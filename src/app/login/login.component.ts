import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {Login} from '../shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {
  }

  loginGroup: FormGroup;

  ngOnInit(): void {
    this.loginGroup = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  login() {
    const login = new Login(this.loginGroup.get('username').value, this.loginGroup.get('password').value);

    console.log(login);
    this.loginService.validateLogin(login);
  }
}
