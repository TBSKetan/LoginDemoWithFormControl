import { Component, OnInit } from '@angular/core';
import { CONSTANT } from '../utility/constantLogin';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public stringConst = CONSTANT;

  constructor() { }

  ngOnInit() {
  }

}
