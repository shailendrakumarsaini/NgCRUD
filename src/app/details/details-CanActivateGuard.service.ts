import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmpService } from '../services/emp.service';


@Injectable()
export class DetailsCanActivateGuardService implements CanActivate {
    constructor(private EmpService:EmpService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean{
        const employeeExists = !!this.EmpService.getEmployeeById(+route.paramMap.get('id'));
        // console.log(employeeExists)
        if(employeeExists){
            return true;
        }else{
            this.router.navigate['/notfound'];
            return false;
        }
    }
}

