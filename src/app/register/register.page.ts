import { CONSTANT } from './../utility/constantLogin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public stringRegister = CONSTANT.registrationPage;
  public stringConst = CONSTANT;

  constructor() { }

  ngOnInit() {
  }

}
