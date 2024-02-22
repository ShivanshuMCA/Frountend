import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../common/helper';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private _http: HttpClient) {}

    public addUser(user: any) {
      return this._http.post(`${baseUrl}/register`, user);
    }

    public updateUser(user: any) {
      return this._http.post(`${baseUrl}/updateUser`, user);
    }

    verifyUser(username: string) {
      return this._http.get(`${baseUrl}/verifyUserName/` + username)
    }

}
