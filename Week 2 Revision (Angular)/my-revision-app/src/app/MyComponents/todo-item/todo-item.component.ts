import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { todo } from 'src/app/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  @Input() i: any;
  @Output() todoDelete: EventEmitter<todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo: any){
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
