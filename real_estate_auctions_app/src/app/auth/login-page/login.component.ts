import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginActions } from './store/actions/login.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginPageComponent implements OnInit {
  userNotExists:boolean = true;

  constructor(private store: Store, private fb: FormBuilder) {}

  loginForm: FormGroup = this.fb.group({
    email: [
      '',
      {
        updateOn: 'change',
      },
    ],
    password: [
      '',
      {
        updateOn: 'change',
      },
    ],
  });

  // login() {
  //   this.store.dispatch(LoginActions.confirm({email: this.loginForm.value['email'], password: this.loginForm.value['password']}));
  //  }

  login() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        LoginActions.confirm({
          email: this.loginForm.value['email'],
          password: this.loginForm.value['password'],
        })
      );
    } else {
      Object.keys(this.loginForm.controls).forEach((key) => {
        const control = this.loginForm.get(key);
        if (control.invalid) {
          control.markAsTouched(); //to provide error
        }
      });
    }
    const storedUserString = localStorage.getItem('user');
    const storedUser = JSON.parse(storedUserString);
    
    if(storedUser===null){
      this.userNotExists=false;
      console.log("Ovaj user ne postoji!")
    }else{
      console.log("Bravo postoji")
    }
    
  }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
}
