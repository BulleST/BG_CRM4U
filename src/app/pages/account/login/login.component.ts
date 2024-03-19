import { Component } from '@angular/core';
import { Login } from 'src/app/model/account.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = new Login;
  showHide: boolean = false;

}
