import { Component, inject } from '@angular/core';
import { AuthService } from '../Services/auth-service';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [AsyncPipe,MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  #authService=inject(AuthService);
  user$=this.#authService.user$;


  logout(){
    
  }
}
