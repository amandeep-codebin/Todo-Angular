import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

todoList : any[] = []

  addTodo(form: NgForm){
    this.todoList.push({id: this.todoList.length, todo: form.controls['task'].value, isCompleted: false})
    form.reset()
  }

  onDelete(id: number | string ) {
    this.todoList = this.todoList.filter((item)=> item.id !== id)
  }

  onCheck(index: number) {

    this.todoList[index].isCompleted = !this.todoList[index].isCompleted

  }

}

