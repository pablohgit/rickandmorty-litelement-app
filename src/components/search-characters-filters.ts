import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

import {
  genderArr,
  speciesArr,
  statusArr,
  typesArr,
} from "../mocks/selectsMocks";
import { styleModule } from "../styles/filters-search-style";

@customElement("search-characters-filters")
export class SearchCharactersFilters extends LitElement {
  static styles = [styleModule];

  @property({ type: String })
  characterStatus = "";
  @property({ type: String })
  characterSpecie = "";
  @property({ type: String })
  characterType = "";
  @property({ type: String })
  characterGender = "";

  private readonly throwSelectHasChange = (e: Event, select: string): void => {
    const selectValue = (e.target as HTMLSelectElement).value;

    this.dispatchEvent(
      new CustomEvent("selectHasChanged", {
        detail: {
          select,
          value: selectValue,
        },
      }),
    );
  };

  render() {
    return html`
      <div class="filters">
        <select
          @change=${(e: Event) =>
            this.throwSelectHasChange(e, "characterStatus")}
        >
          <option>Select status</option>
          ${statusArr.map((status) => {
            return html`<option value="${status.value}">
              ${status.label}
            </option>`;
          })}
        </select>

        <select
          @change=${(e: Event) =>
            this.throwSelectHasChange(e, "characterSpecie")}
        >
          <option>Select species</option>
          ${speciesArr.map((status) => {
            return html`<option value="${status.value}">
              ${status.label}
            </option>`;
          })}
        </select>

        <select
          @change=${(e: Event) => this.throwSelectHasChange(e, "characterType")}
        >
          <option>Select type</option>
          ${typesArr.map((status) => {
            return html`<option value="${status.value}">
              ${status.label}
            </option>`;
          })}
        </select>

        <select
          @change=${(e: Event) =>
            this.throwSelectHasChange(e, "characterGender")}
        >
          <option>Select gender</option>
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

declare global {
  interface HTMLElementTagNameMap {
    "search-characters-filters": SearchCharactersFilters;
  }
}
