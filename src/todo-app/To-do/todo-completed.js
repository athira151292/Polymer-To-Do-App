import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class ToDoCompleted extends PolymerElement {
  constructor() {
    super();
  }
	static get template(){
		return html `
      <style>
        li {
          list-style-type: none;
          padding: 10px;
        }
      </style>
      <ul>
        <template is="dom-repeat" items="{{task}}">
          <template is="dom-if" if="{{item.completed}}">
            <li>{{item.name}}</li>
          </template>
        </template>
      </ul>
		`
	}
}

window.customElements.define('todo-completed', ToDoCompleted);