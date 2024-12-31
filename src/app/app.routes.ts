import { Routes } from '@angular/router';
import { TodoappComponent } from './todoapp/todoapp.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'todoapp',
        component:TodoappComponent
    },
    {
        path:"home",
        component:HomeComponent
    }
];
