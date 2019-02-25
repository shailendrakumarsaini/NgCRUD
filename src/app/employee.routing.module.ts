import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared.module';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { CanActivateGuardService } from './guards/canActivateGuard.service';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EmployeeListResolverService } from './viewemployee/employee-list-resolver.service';
import { DetailsComponent } from './details/details.component';
import { DetailsResolverService } from './details/details-resolver.service';
import { DetailsCanActivateGuardService } from './details/details-CanActivateGuard.service';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { CanDeactivateGuardService } from './addemployee/canDeactivate-guard.service';
import { ParentComponent } from './parent/parent.component';
import { ParentResolverService } from './parent/parent-resolver.service';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const AppRoutes:Routes = [
  {
    path : 'employee',
    children : [
      { 
        path : "register", 
        component : RegisterComponent,
        canActivate: [CanActivateGuardService]
      },
      { 
        path : "viewemp",
        component : ViewemployeeComponent,
        canActivate :[CanActivateGuardService],
        resolve : { employeeList : EmployeeListResolverService }
      },
      { 
        path : "details/:id",
        component : DetailsComponent,
        resolve :{ employeedetails : DetailsResolverService },
        canActivate :[CanActivateGuardService, DetailsCanActivateGuardService]
        // canActivate :[DetailsCanActivateGuardService]
      },
      { 
        path : "edit/:id", 
        component : AddemployeeComponent, 
        canActivate :[CanActivateGuardService]
      },
      { 
        path : "addEmp",
        component : AddemployeeComponent,
        canDeactivate:[CanDeactivateGuardService] ,
        canActivate: [CanActivateGuardService]
      },
      { 
        path : "parent",
        component : ParentComponent,
        resolve:{parentData : ParentResolverService} ,
        canActivate: [CanActivateGuardService]
      },
      {
        path :"reactiveForms",
        component : ReactiveFormsComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(AppRoutes),
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class EmployeeRoutingModule { }
