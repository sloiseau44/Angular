import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  nomCtrl: FormControl;
  prenomCtrl: FormControl;
  telephoneCtrl: FormControl;
  emailCtrl: FormControl;
  connaissancesCtrl: FormControl;
  personneForm: FormGroup;

  constructor(fb: FormBuilder) {

    this.nomCtrl = fb.control('', [Validators.required, Validators.pattern('^[A-Z].*[a-zA-Z]')]);

    this.prenomCtrl = fb.control('', [Validators.required]);

    this.telephoneCtrl = fb.control('', [Validators.maxLength(10), Validators.minLength(10), Validators.pattern("[0-9].*")]);

    this.emailCtrl = fb.control('', [Validators.email, Validators.required]);

    this.connaissancesCtrl = fb.control('', [Validators.required]);

    this.personneForm = fb.group({
      nom:this.nomCtrl,
      prenom:this.prenomCtrl,
      telephone:this.telephoneCtrl,
      email:this.emailCtrl,
      connaissances:this.connaissancesCtrl,
    })
    ;
  }

  handleClear() {
    this.nomCtrl.setValue('');
    this.prenomCtrl.setValue('');
    this.telephoneCtrl.setValue('');
    this.emailCtrl.setValue('');
    this.connaissancesCtrl.setValue('');
  }

  handleSubmit() {
    console.log(this.personneForm.value);
  }

  ngOnInit() {
  }

}
