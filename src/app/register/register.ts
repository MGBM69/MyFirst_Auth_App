import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormValidationError } from '../shared/form.errors';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Logo } from '../logo/logo';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { AuthService } from '../Services/auth-service';

@Component({
  selector: 'app-register',
  imports: [MatFormFieldModule,MatInputModule,MatSelectModule,MatIconModule,MatCardModule,Logo,MatButtonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  errorMessage=signal("Email is required");
  registerForm!:FormGroup;
  #formBuilder=inject(FormBuilder);
  #authService=inject(AuthService);


  ngOnInit(): void {
    this.registerForm=this.#formBuilder.group({
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      username: new FormControl('',[
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20)

      ])
    });
    
  }

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    this.hide.set(!this.hide());
    
  }

  getError(ctrl:AbstractControl,name:string):string{
   

    return FormValidationError.getFormControlErrorMessage(ctrl,name);
  }

  async register(){
    try{
      await this.#authService.createUserIthEmailAndPassword(this.registerForm.value);

    }catch(error){}
     
  }

}
