import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class UsernameValidators {
   static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if((control.value as string).indexOf(' ') >=0)
        return { cannotcontainSpace: true }
    
        return null;
   }

   static shouldBeUnique(control: AbstractControl): ValidationErrors | null {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if(control.value === 'sneha')
                resolve({ shouldBeUnique: true });
            else 
                reject(null);
        }, 2000);
    });
   }
} 