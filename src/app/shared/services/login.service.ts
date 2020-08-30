import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(httpClient: HttpClient) {
  }

  public validateLogin(login: Login) {

  }
}
