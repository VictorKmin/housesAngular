import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {Response} from './Response';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  isLogined = !!localStorage.getItem('token');

  isAuth = new BehaviorSubject<boolean>(this.isLogined);

  constructor(private userService: UserService) {

  }

  regUser(registerForm) {
    console.log(registerForm.value);
    this.userService.registerUser(registerForm.value).subscribe(resp => {
      console.log(resp);
    });
  }

  logUser(loginForm) {
    console.log(loginForm.value);
    this.userService.loginUser(loginForm.value).subscribe((resp: Response) => {
      console.log(resp);

      if (resp.success) {
        const {accessToken, refreshToken} = resp.message;

        localStorage.setItem('token', accessToken);
        localStorage.setItem('refresh', refreshToken);

        this.isAuth.next(true);

      } else {
        console.log(resp.message);
      }

    });

  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh');

    this.isAuth.next(false);
  }
}
