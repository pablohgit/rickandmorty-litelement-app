import { html, LitElement } from "lit";

class AppRoot extends LitElement {
  render() {
    return html`hola mundo`;
  }
}

customElements.define("app-root", AppRoot);
