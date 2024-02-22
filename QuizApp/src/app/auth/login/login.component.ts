import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/service/layout.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];
    loginData = {
        username: '',
        password: '',
    };
    password!: string;
    constructor(
        public layoutService: LayoutService,
        private _messageservice: MessageService,
        private _loginService: LoginService,
        private router: Router
    ) {}

    login() {
        if (
            this.loginData.username.trim() == '' ||
            this.loginData.password == null
        ) {
            this._messageservice.add({
                severity: 'error',
                summary: 'Validation Error',
                detail: 'Username is required',
            });
        } else if (
            this.loginData.password.trim() == '' ||
            this.loginData.password == null
        ) {
            this._messageservice.add({
                severity: 'error',
                summary: 'Validation Error',
                detail: 'Password is required',
            });
        } else {
            this._loginService
                .generateToken(this.loginData)
                .subscribe((data: any) => {
                    this._loginService.loginUser(data.token);
                    this._loginService
                        .getCurrentUser()
                        .subscribe((user: any) => {
                            this._loginService.setUser(user);
                            if (
                                user.authorities[0].authority == 'CUSTOMERS'
                            ) {
                                this.router.navigate(['/user']); 
                            } else if (
                                user.authorities[0].authority === 'ADMIN'
                            ) {
                                this.router.navigate(['/admin']); 
                            } else {
                                this._loginService.logout();
                            }
                        });
                });
        }
    }
}
