import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators,ValidatorFn,ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide: boolean = true;
  hiden: boolean = true;
  msg=''
  user=new User();

  constructor(private fb: FormBuilder,private _service:RegistrationService,private _router:Router) {
  }

  ngOnInit() {
  }

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    userName:['',[Validators.required]],
    mobileNumber:['',[Validators.required]],
    confirm_password:['',[Validators.required]]
  }, {validator: passwordMatchValidator})
  get password() { return this.registerForm.get('password'); }
  get confirm_password() { return this.registerForm.get('confirm_password'); }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.registerForm.hasError('passwordMismatch'))
      this.confirm_password.setErrors([{'passwordMismatch': true}]);
    else
      this.confirm_password.setErrors(null);
  }

  onRegister() {
    this._service.registerFromRemote(this.user).subscribe(
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
export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('confirm_password').value)
    return null;
  else
    return {passwordMismatch: true};
};

  


