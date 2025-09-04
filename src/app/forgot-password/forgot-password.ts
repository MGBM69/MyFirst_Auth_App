import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators}from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { Logo } from '../logo/logo';
import { FormValidationError }from '../shared/form.errors';
import { AuthService } from '../Services/auth-service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink,ReactiveFormsModule,MatButtonModule,MatCardModule,MatIconModule,MatFormFieldModule,MatInputModule,MatSelectModule,Logo,MatProgressSpinnerModule],
  templateUrl: './forgot-password.html',
  styleUrl: './forgot-password.css'
})
export class ForgotPassword implements OnInit {
  

  forgotPasswordForm!:FormGroup;
  #formBuilder=inject(FormBuilder);
  #authService=inject(AuthService);
  isLoading=signal(false);

  ngOnInit(): void {
    this.forgotPasswordForm=this.#formBuilder.group({
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ])
    });
  }

  getErrors(ctrl:AbstractControl,name:string):string{


    return FormValidationError.getFormControlErrorMessage(ctrl,name);

  }

  async forgotPasswordReset(){
    try{
      this.isLoading.set(true);
      this.forgotPasswordForm.disable()
      await this.#authService.sendPasswordResetEmail(this.forgotPasswordForm.value.email);
      this.isLoading.set(false);
      this.forgotPasswordForm.enable();

    }catch(error){
      console.log('Something went wrong while resetting:'+error);
      

    }
  }

}
