import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.login = new FormGroup({
      userEmail:  new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(8)])
    });
   }

  ngOnInit() {
  }

  onSubmit() {
    //console.log(this.login.controls.userEmail.value);
    //console.log(this.login.controls.password.value);
  }

}
