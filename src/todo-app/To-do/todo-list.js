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
              position: relative;
            }
            li:last-of-type {
              border-bottom: none;
            }
            .delete-item:after {
              content: "x";
              font-size: 17px;
              color: #a11717;
            }
            .delete-item {
              background: none;
              border: none;
              position: absolute;
              right: 0;
              cursor: pointer;
              opacity: 0.5;
            }
            .delete-item:hover,
            .delete-item:active,
            .delete-item:focus {
              opacity: 1;
            }
            paper-tab {
              background: #dcdcdc;
            }
            paper-tab.iron-selected {
              background: #538cc6;
              color: #fff;
            }

          </style>
          <paper-input type="text" placeholder="What needs to be done?" value="{{todo}}" on-keydown=_addTask id="task-input"></paper-input>
          <ul>
            <dom-repeat items="{{task}}">
              <template>
                  <li>
                    <paper-checkbox checked="{{item.completed}}" on-change=_isCompleted><label data-id$={{item.id}}>{{item.name}}</label></paper-checkbox>
                    <button class="delete-item" on-click=_deleteTask></button>
                  </li>
              </template>
            </dom-repeat>
          </ul>
          <paper-tabs selected="{{selected}}">
            <paper-tab>All tasks</paper-tab>
            <paper-tab>Completed tasks</paper-tab>
          </paper-tabs>
          <iron-pages selected="{{selected}}">
            <todo-all task={{task}}></todo-all>
            <todo-completed task={{task}}></todo-completed>
          </iron-pages>
      `
    }
    constructor() {
      super();
    }
    _addTask(e) {
      
      if(e.keyCode == 13) {
        var taskObj = JSON.parse(localStorage.getItem("list")),
            taskLength = taskObj.length,
            id = 0;
        if(taskLength != undefined && taskLength != 0) {
            var id = taskObj[taskLength-1].id;
            id++;
        }
        var todo = this.todo,
            obj = {'name':todo,'completed':false, 'id':id};
        this.push('task', obj);
        e.target.value = "";
        var taskStr = JSON.stringify(this.task);
        localStorage.setItem('list', taskStr);
        console.log(this.task);
      }
    }

    _isCompleted(e) {
      var taskStr = JSON.stringify(this.task);
      localStorage.setItem('list', taskStr);
    }

    _deleteTask(e) {
      var elementId = e.target.previousElementSibling.firstElementChild.getAttribute("data-id"),
          taskObj = JSON.parse(localStorage.getItem("list")),
          taskLength = taskObj.length;
      for(var i=0;i<taskLength;i++) {
        if(taskObj[i].id == elementId) {
          taskObj.splice(i,1);
          break;
        } 
      }
      var taskStr = JSON.stringify(taskObj);
      localStorage.setItem('list', taskStr);
      var temp = [],
          tempLength = this.task.length;
      temp = temp.concat(this.task);
      for(var j=0;j<tempLength;j++) {
        if(temp[j].id == elementId) {
          temp.splice(j,1);
          break;
        }
      }
      this.task = [];
      this.task = this.task.concat(temp);
      
    }
}

window.customElements.define('todo-list', ToDoList);