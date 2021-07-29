import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormsModule } from '@angular/forms';
import { IUserModel,Usermodel } from './Models/userModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularCoding';
  usermodel:IUserModel;
  constructor()
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
   console.log(this.usermodel);
    console.log('current User Form reactive details: ', curForm);
  }
}