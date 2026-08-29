import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import notFound from "./assets/notFound.svg";
import title from "./assets/title.svg";
import type { Character } from "./interface/characterType";
import { getRickandmortyCharacters } from "./service/rickandmortyapi";
import { styleModule } from "./styles/global-style.js";

import "./components/characters-list";
import "./components/search-characters-filters";
import "./components/search-characters-input";

type FilterKeys =
  | "characterStatus"
  | "characterSpecie"
  | "characterType"
  | "characterGender";

@customElement("app-root")
export class AppRoot extends LitElement {
  @property({ type: String })
  characterName = "";
  @property({ type: String })
  characterStatus = "";
  @property({ type: String })
  characterSpecie = "";
  @property({ type: String })
  characterType = "";
  @property({ type: String })
  characterGender = "";
  @property({ type: Number })
  currentPage = 1;
  @property({ type: Number })
  totalPages = 1;
  @property({ type: Array })
  charactersArr: Character[] = [];
  @property({ type: Boolean })
  characterNotFounded = false;

  private readonly handleSearchClick = async (): Promise<void> => {
    const searchInputComp = this.shadowRoot?.querySelector(
      "search-characters-input",
    );

    this.currentPage = 1;
    await this.searchCharacters();

    searchInputComp?.clearInput();
  };

  private readonly handlePreviousPage = async (): Promise<void> => {
    if (this.currentPage <= 1) {
      return;
    }

    this.currentPage -= 1;
    await this.searchCharacters();
  };

  private readonly handleNextPage = async (): Promise<void> => {
    if (this.currentPage >= this.totalPages) {
      return;
    }

    this.currentPage += 1;
    await this.searchCharacters();
  };

  private readonly handlerSelectHasChangedEvent = (ce: CustomEvent) => {
    const { select, value } = ce.detail as {
      select: FilterKeys;
      value: string;
    };

    this[select] = value;
  };

  private readonly searchCharacters = async (): Promise<void> => {
    const data = await getRickandmortyCharacters(
      this.characterName,
      this.characterStatus,
      this.characterSpecie,
      this.characterType,
      this.characterGender,
      this.currentPage,
    );

    if (data) {
      this.charactersArr = data.results;
      this.totalPages = data.info.pages;
      this.characterNotFounded = false;
      return;
    }

    this.charactersArr = [];
    this.characterNotFounded = true;
  };

  render() {
    return html`
      <div class="container">
        <img src="${title}" class="logo" />

        <div class="search-container">
          <search-characters-input
            @input-character-changed=${(ce: CustomEvent) => {
              this.characterName = ce.detail.characterName;
            }}
          ></search-characters-input>
          <button @click=${this.handleSearchClick}>Search</button>
        </div>

        <search-characters-filters
          @selectHasChanged=${this.handlerSelectHasChangedEvent}
        ></search-characters-filters>

        ${this.characterNotFounded
          ? html`<div class="no-results">
              <img src="${notFound}" />
              <p>Character not found</p>
            </div>`
          : html`
              <characters-list
                .charactersArr=${this.charactersArr}
              ></characters-list>

              ${this.totalPages > 1
                ? html`
                    <div class="pagination">
                      <button
                        ?disabled=${this.currentPage === 1}
                        @click=${this.handlePreviousPage}
                      >
                        Previous
                      </button>
                      <span
                        >Page ${this.currentPage} of ${this.totalPages}</span
                      >
                      <button
                        ?disabled=${this.currentPage === this.totalPages}
                        @click=${this.handleNextPage}
                      >
                        Next
                      </button>
                    </div>
                  `
                : null}
            `}
      </div>
    `;
  }

  static get styles() {
    return styleModule;
  }
}
