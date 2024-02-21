import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, ToastModule, MessageModule],
  providers: [LoginService, MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  model: any = {};

  constructor(
    private _loginService: LoginService,
    private _router: Router,
    private _messageservice: MessageService
  ) {}

  onSubmit() {
    console.log('Login', this.model);
    this._loginService.login(this.model).subscribe(
      (res: any) => {
        if (res?.token) {
          this._loginService.loginUser(res.token);
          this._loginService.getCurrentUser().subscribe((user: any) => {
            this._loginService.setUser(user);
            if (user.authorities[0].authority == 'CUSTOMERS') {
              this._router.navigate(['customers']);
            } else if (user.authorities[0].authority == 'ADMIN') {
              this._router.navigate(['admin']);
            } else {
              this._loginService.logout();
            }
          });
        } else {
          this._messageservice.add({
            severity: 'error',
            summary: 'Invalid Credentials',
          });
        }
      },
      (error) => {
        console.log(error);
        this._messageservice.add({
          severity: 'error',
          summary: 'Something went wrong',
        });
      }
    );
  }

  register() {
    this._router.navigate(['/register']);
  }
}
