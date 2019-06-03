import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class LoginApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'login-app'
      }
    };
  }
}

window.customElements.define('login-app', LoginApp);
