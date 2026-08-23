import { html, LitElement } from "lit";

import { styleModule } from "./styles/style";

class AppRoot extends LitElement {
  static get styles() {
    return styleModule;
  }

  render() {
    return html`hola mundo`;
  }
}

customElements.define("app-root", AppRoot);
