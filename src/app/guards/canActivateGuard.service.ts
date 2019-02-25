import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class CanActivateGuardService implements CanActivate{
    constructor(private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(localStorage.getItem('uname')){
            return true
        }else{
            this.router.navigate(['/login']);
            return false
        }
    }

}