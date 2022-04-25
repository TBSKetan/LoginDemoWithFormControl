import { Component, OnInit } from '@angular/core';
import { CONSTANT } from '../utility/constantLogin';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular/providers/loading-controller';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public stringConst = CONSTANT;
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder) {
    this.ionicForm = this.formBuilder.group({
           email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
    });
  }

  ngOnInit() {}

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      //console.log('Please provide all the required values!');
      return false;
    } else {
      //console.log(this.ionicForm.value);
      return this.ionicForm.value;
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorControl() {
    return this.ionicForm.controls;
  }
}
