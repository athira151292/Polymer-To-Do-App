import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './todo-all-tasks.js';
import './todo-completed.js';

class ToDoList extends PolymerElement {
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
        },
        selected: {
          type: Number,
          value: 0
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
            ul {
              padding: 0 30px;
            }
            li {
              list-style-type: none;
              padding: 10px;
              border-bottom: 1px solid #e2dfdf;
            }
            li:last-of-type {
              border-bottom: none;
            }
          </style>
          <paper-input type="text" placeholder="What needs to be done?" value="{{todo}}" on-keydown=_addTask id="task-input"></paper-input>
          <ul>
            <dom-repeat items="{{task}}">
              <template>
                  <li>
                    <paper-checkbox checked="{{item.completed}}" on-change=_isCompleted></paper-checkbox>
                    <label>{{item.name}}</label>
                  </li>
              </template>
            </dom-repeat>
          </ul>
          <paper-tabs selected="{{selected}}">
            <paper-tab>All tasks</paper-tab>
            <paper-tab>Completed tasks</paper-tab>
          </paper-tabs>
          <iron-pages selected="{{selected}}">
            <todo-all></todo-all>
            <todo-completed></todo-completed>
          </iron-pages>
      `
    }
    constructor() {
      super();
    }
    _addTask(e) {
      if(e.keyCode == 13) {
        var todo = this.todo,
            obj = {'name':todo,'completed':false};
        this.push('task', obj);
        e.target.value = "";
        var taskStr = JSON.stringify(this.task);
        localStorage.setItem('list', taskStr);
        console.log(this.task);
      }
    }

    _isCompleted(item) {
      var taskStr = JSON.stringify(this.task);
      localStorage.setItem('list', taskStr);
    }
}

window.customElements.define('todo-list', ToDoList);