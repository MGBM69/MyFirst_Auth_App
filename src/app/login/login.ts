import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators}from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-login',
  imports: [RouterLink,ReactiveFormsModule,MatButtonModule,MatCardModule,MatIconModule,MatFormFieldModule,MatInputModule,MatSelectModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
   errorMessage=signal("Email is required");
  loginForm!:FormGroup;
  #formBuilder=inject(FormBuilder);

   ngOnInit(): void {
    this.loginForm=this.#formBuilder.group({
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    });
    
  }


  hide = signal(true);
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    this.hide.set(!this.hide());
    
  }

}
