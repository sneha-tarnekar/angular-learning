import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { UsernameValidators } from './username-validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required,
    Validators.minLength(3),
    UsernameValidators.cannotContainSpace,
    UsernameValidators.shouldBeUnique]),
    password: new FormControl('', Validators.minLength(3))
  });

  login() {
    this.form.setErrors({
      inValidLogin: true
    })
  }

  get username() {
    return this.form.get('username'); 
  }
}
