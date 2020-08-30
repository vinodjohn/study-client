import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../shared/services/login.service';
import {Login} from '../shared/models/login';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snackBar: MatSnackBar, private formBuilder: FormBuilder, private loginService: LoginService) {
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
    this.loginService.validateLogin(login).subscribe(
      value => console.log(value),
      error => {
        this.snackBar.open(error.error.message + error.error.details[0], 'Close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );
  }
}
