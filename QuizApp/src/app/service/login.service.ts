import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from '../common/helper';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor(private _http: HttpClient) {}

    // Login user detail's
    public getCurrentUser() {
        return this._http.get(`${baseUrl}/current-user`);
    }

    // generate Token
    public generateToken(loginData: any) {
        return this._http.post(`${baseUrl}/login`, loginData);
    }

    //LoginUser: set token in sessionStorage
    public loginUser(token: any) {
        sessionStorage.setItem('token', token);
        return true;
    }

    //isLogin : User is login or not
    public isLoggedIn() {
        let tokenStr = sessionStorage.getItem('token');
        if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
            return false;
        } else {
            return true;
        }
    }

    //logOut function:
    public logout() {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        return true;
    }

    //getToken
    public getToken() {
        return sessionStorage.getItem('token');
    }

    // Set UserDetails
    public setUser(user: any) {
        sessionStorage.setItem('user', JSON.stringify(user));
    }

    //getUser
    public getUser() {
        let userStr = sessionStorage.getItem('user');
        if (userStr != null) {
            return JSON.parse(userStr);
        } else {
            this.logout();
            return null;
        }
    }

    // getUserRole
    public getUserRole() {
        let user = this.getUser();
        return user.authorities[0].authority;
    }
}
