import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { EmpModel } from '../models/emp.model';
import { Observable } from 'rxjs';
import { EmpService } from '../services/emp.service';
@Injectable()
export class ParentResolverService implements Resolve<EmpModel[]> {

    constructor(private EmpService:EmpService){}

    resolve(route: ActivatedRouteSnapshot,
             state: RouterStateSnapshot): Observable<EmpModel[]> {
        return this.EmpService.getEmployees(); 

    }
}