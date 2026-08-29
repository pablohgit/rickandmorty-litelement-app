import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleModule } from "../styles/input-search-style";

@customElement("search-characters-input")
export class SearchCharactersInput extends LitElement {
  @property({ type: String })
  name = "";

  readonly inputChangedEvent = (e: Event) => {
    this.dispatchEvent(
      new CustomEvent("input-character-changed", {
        detail: {
          characterName: (e.target as HTMLInputElement).value,
        },
      }),
    );
  };

  readonly clearInput = () => {
    (
      this.shadowRoot?.getElementById("input-search") as HTMLInputElement
    ).value = "";
  };

  protected render() {
    return html`<input
      id="input-search"
      type="text"
      placeholder="Search character"
      .value=${this.name}
      @input=${this.inputChangedEvent}
    />`;
  }

  static get styles() {
    return styleModule;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "search-characters-input": SearchCharactersInput;
  }
}
