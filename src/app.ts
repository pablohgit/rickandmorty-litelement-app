import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import notFound from "./assets/notFound.svg";
import title from "./assets/title.svg";
import type { Character } from "./interface/characterType";
import { getRickandmortyCharacters } from "./service/rickandmortyapi";
import { styleModule } from "./styles/global-style.js";

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
  @property({ type: Array })
  charactersArr: Character[] = [];
  @property({ type: Boolean })
  characterNotFounded = false;

  private readonly handleSearchClick = async (): Promise<void> => {
    const searchInputComp = this.shadowRoot?.querySelector(
      "search-characters-input",
    );

    await this.searchCharacters();

    searchInputComp?.clearInput();
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
    );

    if (data) {
      this.charactersArr = data;
    } else {
      this.charactersArr = [];
      this.characterNotFounded = true;
    }
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
          : html`<div class="card-grid">
              ${this.charactersArr.map(
                (char) => html`
                  <div class="card">
                    <img src=${char.image} alt=${char.name} />
                    <div class="info">
                      <strong>${char.name}</strong>
                      <p>Species: ${char.species}</p>
                      <p>Type: ${char.type || "-"}</p>
                      <p>Gender: ${char.gender}</p>
                      <p>Status: ${char.status}</p>
                    </div>
                  </div>
                `,
              )}
            </div>`}
      </div>
    `;
  }

  static get styles() {
    return styleModule;
  }
}
