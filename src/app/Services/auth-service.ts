import { inject, Injectable, signal } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, User } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router } from '@angular/router';
import { Iuser } from '../Models/iuser.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  #auth =inject(Auth);
  #router=inject(Router);
  #snackBar=inject(MatSnackBar);
  
  

  get user$():Observable<User| null>{
    return authState(this.#auth);
  }

  async createUserIthEmailAndPassword(iUser:Iuser){

    try{
      const registeredUser= await createUserWithEmailAndPassword(this.#auth,iUser.email,iUser.password);
      this.#redirect('/home');

    }catch(error){
      this.#showAlert('Error creating user:'+error);
      throw new Error('Error creating user:'+error);

    }

  }

  #showAlert(message:string){
    this.#snackBar.open(message,'Close',{
      duration: 3000,
      horizontalPosition:'start',
      verticalPosition:'bottom',

    });

  }

  #redirect(path:string){
    this.#router.navigate([path]);
  }

  async logout(){
    signOut(this.#auth);
    this.#showAlert('Successfully Logout!');
    this.#redirect('/');
  }

  async signInWithEmailAndPassword(iuser:Iuser){
    

    try{
      const loggedUser= await signInWithEmailAndPassword(this.#auth,iuser.email,iuser.password);
      this.#redirect('/home');
      this.#showAlert("Successful Logging!")

    }catch(error){
      this.#showAlert("Error logging"+error);
      throw new Error("Error logging in "+error);

    }

  }
  async sendPasswordResetEmail(email:string){
    try{

      sendPasswordResetEmail(this.#auth,email);
      this.#showAlert('Password successfullt reset!');
      this.#router.navigate(['/']);

    }catch(error){
      this.#showAlert('Something went wrong when resetting password'+error);
      throw new Error('Something went wrong when resetting password'+error);
    }
  }

  
}
