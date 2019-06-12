import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class ToDoCompleted extends PolymerElement {
  static get properties() {
    return {
      item: {
        type: Array,
        value() {
          var taskObj = JSON.parse(localStorage.getItem("list")),
              arr = [];
          if (taskObj != undefined) {
            for(var i=0;i<taskObj.length;i++) {
              if(taskObj[i].completed === true) {
                arr.push(taskObj[i]);
              }
            }
          return arr;
          }
          else
            return [];
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
        li {
          list-style-type: none;
          padding: 10px;
        }
      </style>
      <ul>
      <dom-repeat items="{{item}}">
        <template>
          <li>{{item.name}}</li>
        </template>
      </dom-repeat>
      </ul>
		`
	}
}

window.customElements.define('todo-completed', ToDoCompleted);