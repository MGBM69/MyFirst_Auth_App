import { AbstractControl } from "@angular/forms";

export class FormValidationError{
    static getFormControlErrorMessage(ctrl:AbstractControl,name:string):string{
        if(ctrl.hasError('required') && ctrl.touched){
            return `${name} is required!`;
        }

        if(ctrl.hasError('email') && ctrl.touched){
            return `Invalid ${name}`;
            
        }

        if(ctrl.hasError('minLength') && ctrl.touched){
            return `Insufficiant ${name} length`;
        }
        
        
        return "";

    }
}