import { createAction, props } from '@ngrx/store';
import { TodosEntity } from './todos.models';

export const initTodos = createAction('[Todos Page] Init');

export const createTodo = createAction(
  '[Todos Page] Create todo',
  props<{todo : TodosEntity}>()
);

export const selectTodo = createAction(
  '[Todos Page] Select todo',
  props<{todoId : string}>()
);

export const updateTodo = createAction(
  '[Todos Page] Update todo',
  props<{todoId : string ; changes: TodosEntity}>()
);

export const deleteTodo = createAction(
  '[Todos Page] Delete todo',
  props<{todoId : string}>()
)

export const toggleDone = createAction(
  '[Todos Page] Toggle Done',
  props<{todoId : string}>()
)

export const clearSelectedTodo = createAction(
  '[Todos Page] Clear selected todo'
);


export const loadTodosSuccess = createAction(
  '[Todos/API] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos/API] Load Todos Failure',
  props<{ error: any }>()
);


export const createTodoSuccess = createAction(
  '[Todos/API] Create Todo Success',
  props<{ todo: TodosEntity }>()
);

export const createTodoFailure = createAction(
  '[Todos/API] Create Todo Failure',
  props<{ error: any }>()
);

export const updateTodoSuccess = createAction(
  '[Todos/API] Update Todo Success',
  props<{ todo: TodosEntity }>()
);

export const updateTodoFailure = createAction(
  '[Todos/API] Update Todo Failure',
  props<{ error: any }>()
);

export const deleteTodoSuccess = createAction(
  '[Todos/API] Delete Todo Success',
  props<{ todoId: string }>()
);

export const deleteTodoFailure = createAction(
  '[Todos/API] Delete Todo Failure',
  props<{ error: any }>()
);

export const getTodoSuccess = createAction(
  '[Todos/API] Get Todo Success',
  props<{ todoId: string }>()
);

export const getTodoFailure = createAction(
  '[Todos/API] Get Todo Failure',
  props<{ error: any }>()
);

export const toggleDoneSuccess = createAction(
  '[Todos/API] Get Todo Success',
  props<{ todo: TodosEntity }>()
);

export const toggleDoneFailure = createAction(
  '[Todos/API] Get Todo Failure',
  props<{ error: any }>()
);
