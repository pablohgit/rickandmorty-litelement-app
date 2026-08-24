import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import title from "./assets/title.svg";
import { genderArr, speciesArr, statusArr, typesArr } from "./data/selectsData";
import { getRickandmortyCharacters } from "./service/rickandmortyapi";
import { styleModule } from "./styles/style";

@customElement("app-root")
export class AppRoot extends LitElement {
  @property({ type: String })
  characterName = "";

  @property({ type: String })
  characterStatus = "";

  static get styles() {
    return styleModule;
  }

  constructor() {
    super();
  }

  private readonly handleSearchClick = async (): Promise<void> => {
    const searchValue = this.shadowRoot?.getElementById(
      "input-search",
    ) as HTMLInputElement;

    await this.searchCharacters();

    console.log("Search value: ", searchValue.value);

    searchValue.value = "";
  };

  private readonly handleSelectChange = (e: Event, select: string): void => {
    const selectValue = (e.target as HTMLSelectElement).value;

    console.log(`${select} selector value: `, selectValue);
  };

  private readonly searchCharacters = async (): Promise<void> => {
    const data = await getRickandmortyCharacters(
      this.characterName,
      this.characterStatus,
    );

    console.log(data);
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
          />
          <button @click=${this.handleSearchClick}>Search</button>
        </div>
      </div>

      <div class="filters">
        <select @change=${(e: Event) => this.handleSelectChange(e, "status")}>
          <option value="-">Select status</option>
          ${statusArr.map((status) => {
            return html`<option value="${status.value}">
              ${status.label}
            </option>`;
          })}
        </select>

        <select @change=${(e: Event) => this.handleSelectChange(e, "species")}>
          <option value="-">Select species</option>
          ${speciesArr.map((status) => {
            return html`<option value="${status.value}">
              ${status.label}
            </option>`;
          })}
        </select>

        <select @change=${(e: Event) => this.handleSelectChange(e, "type")}>
          <option value="-">Select type</option>
          ${typesArr.map((status) => {
            return html`<option value="${status.value}">
              ${status.label}
            </option>`;
          })}
        </select>

        <select @change=${(e: Event) => this.handleSelectChange(e, "gender")}>
          <option value="-">Select gender</option>
          ${genderArr.map((status) => {
            return html`<option value="${status.value}">
              ${status.label}
            </option>`;
          })}
        </select>
      </div>
    `;
  }
}
