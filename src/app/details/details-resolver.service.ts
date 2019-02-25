import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { EmpModel } from '../models/emp.model';
import { Observable } from 'rxjs';
import { EmpService } from '../services/emp.service';

@Injectable()

export class DetailsResolverService implements Resolve<EmpModel> {
    constructor(private EmpService:EmpService) {
    }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EmpModel> {
         let id = activatedRouteSnapshot.paramMap.get('id');
         //console.log(id);
        return this.EmpService.getEmployeeById(id); 
    }
}