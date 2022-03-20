import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  user=new User();
  msg='';

  constructor(private fb: FormBuilder,private _service:RegistrationService,private _router:Router) {
  }

  ngOnInit() {
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })


  onLogin() {
   this._service.loginserFromRemote(this.user).subscribe(
     data => {
       console.log("response received");
       this._router.navigate(['/userDashboard']);
      },
     error => {
       console.log("exception occured");
       this.msg="!!!Bad credentials!!!";
      }
   );
  }

}
