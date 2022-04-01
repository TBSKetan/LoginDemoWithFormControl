import { CONSTANT } from '../utility/constantLogin';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public constantString = CONSTANT;


  constructor() {
  }

  onRegister(){
    console.log('Register click');
  }

  loginWithEmail(){
    console.log('Login button click');
  }

}
