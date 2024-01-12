import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { RegistrationActions } from './store/actions/registration.actions';
import { Roles } from '../../utils/enums/roles.enum';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationPageComponent implements OnInit{
 
  constructor(private store: Store, private fb: FormBuilder){}
  
  registrationForm: FormGroup = this.fb.group({
    firstName: ['', {
      updateOn: 'change',
    }],
    lastName: ['',{
      updateOn: 'change',
    }],
    email: ['',{
      updateOn: 'change',
    }],
    password: ['',{
      updateOn: 'change',
    }],
  })

  // registration(){
  //   this.store.dispatch(RegistrationActions.confirm({firstName: this.registrationForm.value['firstName'], lastName: this.registrationForm.value['lastName'], email: this.registrationForm.value['email'], password: this.registrationForm.value['password'], role: Roles.USER}));
  // }

  registration() {
    if (this.registrationForm.valid) {
      this.store.dispatch(RegistrationActions.confirm({
        firstName: this.registrationForm.value['firstName'],
        lastName: this.registrationForm.value['lastName'],
        email: this.registrationForm.value['email'],
        password: this.registrationForm.value['password'],
        role: Roles.USER
      }));
    } else {
      Object.keys(this.registrationForm.controls).forEach(key => {
        const control = this.registrationForm.get(key);
        if (control.invalid) {
          control.markAsTouched(); //to provide error
        }
      });
    }
  }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

}
