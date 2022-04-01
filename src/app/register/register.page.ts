import { CONSTANT } from './../utility/constantLogin';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public stringRegister = CONSTANT.registrationPage;
  public stringConst = CONSTANT;
  data: any;

  constructor(private activatedRoute: ActivatedRoute, private navigationService: NavigationService) {
    // this.activatedRoute.paramMap.subscribe((data)=>{
    //   console.log(data);
    // });
    //this.data = this.activatedRoute.snapshot.paramMap.get('xyz');
    this.data = this.navigationService.getNavigationData();
  }

  ngOnInit() {
  }

}
