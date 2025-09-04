import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
    {path:'',
     title:"Login",
     component:Login   
    },
    {path:'register',
        title:"Register",
        component:Register
    },
    {
        path:'home',
        title:"Home",
        component:Home
    },
    {
        path:'**',
        title:"Page Not Found",
        component:PageNotFound
    }
];
