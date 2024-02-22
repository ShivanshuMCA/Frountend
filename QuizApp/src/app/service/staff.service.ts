import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../common/helper';

@Injectable({
    providedIn: 'root',
})
export class StaffService {
   
    constructor(private _http: HttpClient) {}

    getAllStaff() {
        return this._http.get(`${baseUrl}/api/staff/all`);
    }

    saveStaff(staffMember: any) {
        return this._http.post(`${baseUrl}/api/staff/add`, staffMember);
    }

    getStaffByShift(shift: any) {
        return this._http.get(`${baseUrl}/api/staff/available?shift=${shift}`);
    }
    deleteStaff(staffId: number) {
        return this._http.delete(`${baseUrl}/api/staff/${staffId}`);
    }

    addOrder(dto: any) {
        return this._http.post(`${baseUrl}/api/order/add`, dto);
    }

    getAllOrder() {
        return this._http.get(`${baseUrl}/api/order/all`);
    }
}
