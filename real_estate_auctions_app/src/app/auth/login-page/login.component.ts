import { Component } from '@angular/core';
import { Store} from '@ngrx/store';
import { FormBuilder, FormGroup} from '@angular/forms';
import { LoginActions } from './store/actions/login.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginPageComponent{

  constructor(private store: Store, private fb: FormBuilder){}

  loginForm: FormGroup = this.fb.group({
    email: ['', {
      updateOn: 'change',
    }],
    password: ['',{
      updateOn: 'change',
    }]
  })
  
  login() {
    this.store.dispatch(LoginActions.confirm({email: this.loginForm.value['email'], password: this.loginForm.value['password']}));
   }


}
