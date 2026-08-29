import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { Character } from "../interface/characterType";
import { styleModule } from "../styles/characters-list-style";

@customElement("characters-list")
export class CharactersList extends LitElement {
  static styles = [styleModule];

  @property({ type: Array }) charactersArr: Character[] = [];

  render() {
    return html`
      <div class="card-grid">
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
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "characters-list": CharactersList;
  }
}
