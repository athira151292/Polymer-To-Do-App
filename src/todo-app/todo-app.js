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
        }
      </style>

      <todo-list name="todo-list"></todo-list>

    `;
  }
  // static get properties() {
  //   return {
  //     page: {
  //       type: String,
  //       observer: '_pageChanged'
  //     }
  //   };
  // }


  _pageChanged(currentPage, oldPage){
    // switch(currentPage){
    //   case 'login':
    //   import('./Login/login-view.js').then()
    //   break;
    // case 'signup':
    //   import('./Login/signup-view.js').then()
    //   break; 
    // case 'todo-list':
    //   import('./To-do/todo-list.js').then()
    //   break;      
    // default:
    //   this.page = 'login';
    // }
  }


  static get observers(){
    // return ['_routerChanged(routeData.page)'];
  }

  _routerChanged(page){
    // this.page = page || 'login';
  }

}

window.customElements.define('todo-app', ToDoApp);
