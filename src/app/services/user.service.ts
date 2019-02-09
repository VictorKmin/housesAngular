import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hosts} from '../Hosts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public httpClient: HttpClient) {
  }

  // headers = new HttpHeaders()
  //   .set('Content-Type', undefined);

  registerUser(userInfo) {
    return this.httpClient.post(`${Hosts.API_HOST}/user/register`, {userInfo}, {});
  }

  loginUser(userInfo) {
    return this.httpClient.post(`${Hosts.API_HOST}/user/login`, {userInfo}, {});
  }

}
