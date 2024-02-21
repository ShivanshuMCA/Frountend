import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule, ToastModule, MessageModule],
  providers: [LoginService, MessageService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  user = {
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    userType: 'CUSTOMERS',
  };

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _messageservice: MessageService
  ) {}

  onSubmit(form: any) {
    console.log('User Registration:', form.value);
    this.loginService.register(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this._messageservice.add({
          severity: 'success',
          summary: 'Succusfully registered',
          detail: 'User is registered for Id :' + data.id,
        });
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 200);
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
}
