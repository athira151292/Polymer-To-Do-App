import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/paper-tabs/paper-tabs.js';
import '@polymer/paper-tabs/paper-tab.js';
import 'To-do/todo-list.js';
/**
 * @customElement
 * @polymer
 */
class ToDoApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --paper-checkbox-size: 20px;
          --paper-checkbox-checked-color: #538cc6;
          --paper-tab-ink: #b3cce6;
        }
      </style>

      <todo-list name="todo-list"></todo-list>

    `;
  }

}

window.customElements.define('todo-app', ToDoApp);
