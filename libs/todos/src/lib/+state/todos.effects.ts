import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of, Observable, map, concatMap, mergeMap } from 'rxjs';
import * as TodosActions from './todos.actions';
import * as TodosFeature from './todos.reducer';
import { TodosService } from './todos.service';
import { Action } from '@ngrx/store';

@Injectable()
export class TodosEffects {
  constructor(private todosService : TodosService){}
  private actions$ = inject(Actions);

  // init$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TodosActions.initTodos),
  //     switchMap(() => this.todosService.all().pipe(()=> {
  //       map((todos) => TodosActions.loadTodosSuccess(todos))
  //     })),
  //     catchError((error) => {
  //       console.error('Error', error);
  //       return of(TodosActions.loadTodosFailure({ error }));
  //     })
  //   )
  // );

  init$ = createEffect(() =>
  this.actions$.pipe(
    ofType(TodosActions.initTodos),
    switchMap(() =>
      this.todosService.all().pipe(
        map((todos) => TodosActions.loadTodosSuccess({ todos })),
        catchError((error) => {
          console.error('Error', error);
          return of(TodosActions.loadTodosFailure({ error })) ;
        })
      )
    )
  )
);


createTodo$ = createEffect(() => 
this.actions$.pipe(
  ofType(TodosActions.createTodo),
  concatMap((action) => 
    this.todosService
      .create(action.todo)
      .pipe(map((todo) => TodosActions.createTodoSuccess({todo})))
  )
)
);


deleteTodo$ = createEffect(() => 
  this.actions$.pipe(
    ofType(TodosActions.deleteTodo),
    mergeMap((action) =>
      this.todosService.delete(action.todoId)
      .pipe(
        map(()=> TodosActions.deleteTodoSuccess({todoId: action.todoId}))
      )
    )
  )
 )


 toggleDoneTodo$ = createEffect(() => 
 this.actions$.pipe(
   ofType(TodosActions.toggleDone),
   concatMap((action) =>
     this.todosService
       .toggle(action.todoId)
       .pipe(map((todo) => TodosActions.toggleDoneSuccess({todo})))
   )
 )
);

 updateTodo$ = createEffect(() => 
 this.actions$.pipe(
   ofType(TodosActions.updateTodo),
   concatMap((action) =>
     this.todosService
       .update(action.todoId, action.changes)
       .pipe(map((todo) => TodosActions.updateTodoSuccess({todo})))
   )
 )
);

}
