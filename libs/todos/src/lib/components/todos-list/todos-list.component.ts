import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosEntity } from '../../+state/todos.models';

@Component({
  selector: 'esol-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent {
  @Input() todos: TodosEntity[] | null = [];
  @Output() delete = new EventEmitter<string >();
  @Output() done = new EventEmitter<string >();
  @Output() selectedTodo = new EventEmitter<string >();


  remove(id? : string ){
    this.delete.emit(id);
  }
  toggleDone(id? : string ){
    this.done.emit(id);
  }

  selected(todoId? : string){
    this.selectedTodo.emit(todoId);
  }
}
