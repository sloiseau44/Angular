import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {isPrefixTotoValidator} from "../validator/password.validator";

@Component({
  selector: 'app-form-ts',
  templateUrl: './form-ts.component.html',
  styleUrls: ['./form-ts.component.css']
})
export class FormTSComponent implements OnInit {

  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  userForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);

    this.passwordCtrl = fb.control('', [isPrefixTotoValidator]);

    this.userForm = fb.group({
      email:this.emailCtrl,
      password:this.passwordCtrl
    })
    ;
  }

  handleClear() {
    this.emailCtrl.setValue('');
    this.passwordCtrl.setValue('');
  }

  handleSubmit() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }
}
