import { Routes } from '@angular/router';

export const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     component: HomeComponent
    // },
    // {
    //     path: 'todo',
    //     component: TodosComponent
    // }
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>{ return import("./home/home.component").then(m => m.HomeComponent)}
    },
    {
        path: 'todo',
        loadComponent: () =>{ return import("./todos/todos.component").then(m => m.TodosComponent)}
    }
];
