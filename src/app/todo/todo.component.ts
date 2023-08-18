import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

todoList : any[] = []

  addTodo(item: string | any){
    this.todoList.push({id: this.todoList.length, todo: item, completed: false})
      console.log("todo added",item)
  }

  removeTodo(id: number | string ) {
    this.todoList = this.todoList.filter((item)=> item.id !== id)
    console.log('removeTodo',id)
  }
}

