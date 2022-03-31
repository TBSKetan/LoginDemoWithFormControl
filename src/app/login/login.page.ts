import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { CONSTANT } from '../utility/constantLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  public constantLogin = CONSTANT;
  email = '';
  password = '';

  constructor(public formBuilder: FormBuilder) {}
  ngOnInit() {}

  submitForm() {
    console.log(this.ionicForm.value);
  }
}
