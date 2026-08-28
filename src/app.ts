import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import notFound from "./assets/notFound.svg";
import title from "./assets/title.svg";
import type { Character } from "./interface/characterType";
import {
  genderArr,
  speciesArr,
  statusArr,
  typesArr,
} from "./mocks/selectsMocks";
import { getRickandmortyCharacters } from "./service/rickandmortyapi";
import { styleModule } from "./styles/style";

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

  static get styles() {
    return styleModule;
  }

  private readonly handleSearchClick = async (): Promise<void> => {
    const searchValue = this.shadowRoot?.getElementById(
      "input-search",
    ) as HTMLInputElement;

    await this.searchCharacters();

    searchValue.value = "";
  };

  private readonly handleSelectChange = (e: Event, select: string): void => {
    const selectValue = (e.target as HTMLSelectElement).value;

    switch (select) {
      case "status":
        this.characterStatus = selectValue;
        break;
      case "species":
        this.characterSpecie = selectValue;
        break;
      case "type":
        this.characterType = selectValue;
        break;
      case "gender":
        this.characterGender = selectValue;
        break;
      default:
        break;
    }
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
          <input
            id="input-search"
            type="text"
            placeholder="Search character"
            .value=${this.characterName}
            @input=${(e: Event) =>
              (this.characterName = (e.target as HTMLInputElement).value)}
          />
          <button @click=${this.handleSearchClick}>Search</button>
        </div>

        <div class="filters">
          <select @change=${(e: Event) => this.handleSelectChange(e, "status")}>
            <option>Select status</option>
            ${statusArr.map((status) => {
              return html`<option value="${status.value}">
                ${status.label}
              </option>`;
            })}
          </select>

          <select
            @change=${(e: Event) => this.handleSelectChange(e, "species")}
          >
            <option>Select species</option>
            ${speciesArr.map((status) => {
              return html`<option value="${status.value}">
                ${status.label}
              </option>`;
            })}
          </select>

          <select @change=${(e: Event) => this.handleSelectChange(e, "type")}>
            <option>Select type</option>
            ${typesArr.map((status) => {
              return html`<option value="${status.value}">
                ${status.label}
              </option>`;
            })}
          </select>

          <select @change=${(e: Event) => this.handleSelectChange(e, "gender")}>
            <option>Select gender</option>
            ${genderArr.map((status) => {
              return html`<option value="${status.value}">
                ${status.label}
              </option>`;
            })}
          </select>
        </div>

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
}
