import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class ToDoAll extends PolymerElement {
    static get properties() {
      return {
        task: {
          type: Array,
          value() {
            var taskObj = JSON.parse(localStorage.getItem("list"));
            if (taskObj != undefined)
              return taskObj;
            else
              return [];
          },
          notify: true,
          reflectToAttribute: true
        }
      };
    }
    static get template(){
      
        return html `
        <style>
        :host {
            max-width: 500px;
            display: block;
            margin: 0 auto;
        }
        li {
            list-style-type: none;
            padding: 10px;
        }
        </style>
        <ul>
        <dom-repeat items="{{task}}">
        <template>
            <li>{{item.name}}</li>
        </template>
        </dom-repeat>
        </ul>
      `
    }
    constructor() {
      super();
    }
}

window.customElements.define('todo-all', ToDoAll);