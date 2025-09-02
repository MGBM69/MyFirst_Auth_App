import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';

export const routes: Routes = [
    {path:'',
     title:"Login",
     component:Login   
    },
    {path:'register',
        title:"Register",
        component:Register
    },
];
