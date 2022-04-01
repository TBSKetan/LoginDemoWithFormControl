import { NavigationService } from './../navigation.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CONSTANT } from '../utility/constantLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  [x: string]: any;
  public constantLogin = CONSTANT;
  email: string | '';
  password: string | '';

  constructor(
    private router: Router,
    private navigationService: NavigationService,
  ) {}
  ngOnInit() {}

  signUp(){
    console.log('email',this.email);
    console.log('password', this.password);
    const userData = {
      email: this.email,
      password: this.password
    };
    this.navigationService.setNavigationData(userData);
    //this.router.navigate(['home/ ' + JSON.stringify(userData)]);
    this.router.navigate(['register']);
  }
}
