import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class ToDoAll extends PolymerElement {
    static get properties() {
        return {
            task: {
              type: Array,
              value() {
                return [
                  {name: 'Task 1', completed: false}
                ];
              },
              notify: true,
              reflectToAttribute: true
            }
        };
    }
    constructor() {
        super();
      }
	static get template(){
		return html `
			<style>
      </style>
      <dom-repeat items="{{task}}">
            <template>
            <ul>
                <li>
                <paper-checkbox checked="{{item.completed}}" on-change="_completeTask"></paper-checkbox>
                <label>{{item.name}}</label>
                </li>
            </ul>
            </template>
        </dom-repeat>
		`
	}
}

window.customElements.define('todo-all', ToDoAll);