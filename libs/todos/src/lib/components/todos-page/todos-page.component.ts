import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodosListComponent } from '../todos-list/todos-list.component';
import { Store } from '@ngrx/store';
import * as TodosActions  from '../../+state/todos.actions';
import { TodosEntity } from '../../+state/todos.models';
import { Observable } from 'rxjs';
import { selectAllTodos, selectSelectedTodo } from '../../+state/todos.selectors';

@Component({
  selector: 'esol-todos-page',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodosListComponent],
  templateUrl: './todos-page.component.html',
  styleUrl: './todos-page.component.css',
})
export class TodosPageComponent implements OnInit {
  todos$: Observable<TodosEntity[]>;
  currentTodo$: Observable<TodosEntity | null | undefined> ;

  
  constructor(private store : Store){
    this.todos$ = store.select(selectAllTodos);
    this.currentTodo$ = store.select(selectSelectedTodo);
  }
  
  ngOnInit(): void {
      this.store.dispatch(TodosActions.initTodos())
  }

  delete(id : string ){
    this.store.dispatch(TodosActions.deleteTodo({todoId: id}))
  }

  toggleDone(id : string ){
    this.store.dispatch(TodosActions.toggleDone({todoId: id}))
  }

  selected(todoId : string ){
    this.store.dispatch(TodosActions.selectTodo({todoId}))

  }
}
