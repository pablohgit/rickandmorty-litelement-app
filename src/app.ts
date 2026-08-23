import { html, LitElement } from "lit";
import title from "./assets/title.svg";
import { genderArr, speciesArr, statusArr, typesArr } from "./data/selectsData";
import { styleModule } from "./styles/style";

class AppRoot extends LitElement {
  static get styles() {
    return styleModule;
  }

  private readonly handleSearchClick = () => {
    const searchValue = this.shadowRoot?.getElementById(
      "input-search",
    ) as HTMLInputElement;

    console.log("Search value: ", searchValue.value);

    searchValue.value = "";
  };

  private readonly handleSelectChange = (e: Event, select: string) => {
    const selectValue = (e.target as HTMLSelectElement).value;

    console.log(`${select} selector value: `, selectValue);
  };

  render() {
    return html`
      <div class="container">
        <img src="${title}" class="logo" />

        <div class="search-container">
          <input id="input-search" type="text" placeholder="Search character" />
          <button @click=${this.handleSearchClick}>Search</button>
        </div>
      </div>

      <div class="filters">
        <select @change=${(e: Event) => this.handleSelectChange(e, "status")}>
          <option value="-">Select status</option>
          ${statusArr.map((status) => {
            return html`<option value="${status.id}">${status.value}</option>`;
          })}
        </select>

        <select @change=${(e: Event) => this.handleSelectChange(e, "species")}>
          <option value="-">Select species</option>
          ${speciesArr.map((status) => {
            return html`<option value="${status.id}">${status.value}</option>`;
          })}
        </select>

        <select @change=${(e: Event) => this.handleSelectChange(e, "type")}>
          <option value="-">Select type</option>
          ${typesArr.map((status) => {
            return html`<option value="${status.id}">${status.value}</option>`;
          })}
        </select>

        <select @change=${(e: Event) => this.handleSelectChange(e, "gender")}>
          <option value="-">Select gender</option>
          ${genderArr.map((status) => {
            return html`<option value="${status.id}">${status.value}</option>`;
          })}
        </select>
      </div>
    `;
  }
}

customElements.define("app-root", AppRoot);
