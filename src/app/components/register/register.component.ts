import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  registerForm = new FormGroup({
    firstname: new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(15), Validators.pattern("[a-zA-Z].*")]),
    lastname: new FormControl(""),
    dob: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    address1: new FormControl("", [Validators.required]),
    address2: new FormControl(""),
    pin: new FormControl("", [Validators.required, Validators.maxLength(6), Validators.minLength(6), Validators.pattern("[0-9]*")]),
    mobile: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[0-9]*")]),
    state: new FormControl(""),
    dist: new FormControl(""),
  });

  registerSubmited() {
    console.log(this.registerForm.value);
  }
  
  get FirstName() : FormControl{
    return this.registerForm.get("firstname") as FormControl;
  }
  get DOB() : FormControl{
    return this.registerForm.get("dob") as FormControl;
  }
  get Gender() : FormControl{
    return this.registerForm.get("gender") as FormControl;
  }
  get Address() : FormControl{
    return this.registerForm.get("address1") as FormControl;
  }
  get PIN() : FormControl{
    return this.registerForm.get("pin") as FormControl;
  }
  get Mobile() : FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }
}
