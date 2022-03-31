import { CONSTANT } from '../utility/constantLogin';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public constantString = CONSTANT;

  constructor(public router: Router) {
    if (router.getCurrentNavigation().extras.state) {
      const params = this.router.getCurrentNavigation().extras.state;
console.log(params.email);
console.log(params.password);
console.log(params.country);
    }
  }

  onRegister(){
    console.log('Register click');
  }

  loginWithEmail(){
    console.log('Login button click');
  }

}
