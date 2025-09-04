import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth-service';
import { map } from 'rxjs';

export const canActivateHomeGuard: CanActivateFn = (route, state) => {
  const authService=inject(AuthService);
  const router=inject(Router);
  return authService.user$.pipe(map((user)=>{

    if(user){
      return true;

    }else{
      router.navigate(['/']);
      return false;
    }

  })  
);
};
