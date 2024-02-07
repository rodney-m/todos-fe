import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadChildren: () => import('@esol/todos').then((m) => m.todosRoutes)
    }
];
