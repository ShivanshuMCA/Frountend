import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor( private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let userStr = JSON.parse(sessionStorage.getItem('user') as any);
    let token = sessionStorage.getItem('token');
    if(token && token != undefined &&  userStr?.authorities[0]?.authority ==="ADMIN"){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
  
}