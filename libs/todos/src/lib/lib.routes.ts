import { Route } from '@angular/router';
import { provideStore, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import * as fromTodos from './+state/todos.reducer';
import { TodosEffects } from './+state/todos.effects';
import { TodosPageComponent } from './components/todos-page/todos-page.component';

export const todosRoutes: Route[] = [
  {
    path: '',
    component: TodosPageComponent,
    providers: [
      provideState(fromTodos.TODOS_FEATURE_KEY, fromTodos.todosReducer),
      provideEffects(TodosEffects),
    ],
  },
];
