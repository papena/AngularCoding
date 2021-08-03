import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserModel,Usermodel } from './Models/userModel';

@Component({
    selector:'login',
    templateUrl:'./app.login.component.html',
    styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit
{
    
    title = 'angularCoding';
    usermodel:IUserModel;
    constructor(private route:Router)
    {
      this.usermodel=new Usermodel("","",false);
    }
    ngOnInit(): void
     {
      this.usermodel.EmailId="TestingEmail";
      this.usermodel.Password="TestingPassword";
  
    }
  
    onSubmit(curForm:any) {
      
     // curForm.pristine
     console.log('in submit');
     console.log(this.usermodel);
      console.log('current User Form reactive details: ', curForm);
      //curForm.
    }
    navigate()
    {
      console.log('in navigate');
      this.route.navigateByUrl('home?Name=AnilKumarPapena',);
    //   .then(e => {
    //     if (e) {
    //       console.log("Navigation is successful!");
    //     } else {
    //       console.log("Navigation has failed!");
    //     }
    //   });
    }
}