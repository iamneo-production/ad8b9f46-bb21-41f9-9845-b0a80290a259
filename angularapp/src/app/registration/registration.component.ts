import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  hide: boolean = true;
  hiden: boolean = true;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    userName:['',[Validators.required]],
    mobileNumber:['',[Validators.required]]
  })


  onLogin() {
    if (!this.registerForm.valid) {
      return;
    }
    console.log(this.registerForm.value);
  }

}
