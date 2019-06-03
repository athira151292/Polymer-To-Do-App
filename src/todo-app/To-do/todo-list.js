import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

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
            }
          </style>
          <paper-input type="text" placeholder="What needs to be done?" value="{{todo}}" on-keydown=_addTask id="task-input"></paper-input>
          <dom-repeat items="{{task}}">
            <template>
              <ul>
                <li>
                  <paper-checkbox checked="{{item.completed}}"></paper-checkbox>
                  <label>{{item.name}}</label>
                </li>
              </ul>
            </template>
          </dom-repeat>
          <paper-tabs selected="0">
            <paper-tab>All tasks</paper-tab>
            <paper-tab>Completed tasks</paper-tab>
          </paper-tabs>
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
      if(item.completed == true)
        return item;
    }
}

window.customElements.define('todo-list', ToDoList);