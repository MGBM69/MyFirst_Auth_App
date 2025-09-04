import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { ForgotPassword } from './forgot-password/forgot-password';
import { canActivateLoggingGuard } from './guards/can-activate-logging-guard';
import { canActivateHomeGuard } from './guards/can-activate-home-guard';

export const routes: Routes = [
    {path:'',
     title:"Login",
     component:Login,
     canActivate:[canActivateLoggingGuard]  
    },
    {path:'register',
        title:"Register",
        component:Register,
        canActivate:[canActivateLoggingGuard]
    },
    {
        path:'home',
        title:"Home",
        component:Home,
        canActivate:[canActivateHomeGuard]
    },
    {
        path:'forgot-password',
        title:"Forgot Password",
        component:ForgotPassword,
        canActivate:[canActivateLoggingGuard]
    },
    {
        path:'**',
        title:"Page Not Found",
        component:PageNotFound
    }
];
