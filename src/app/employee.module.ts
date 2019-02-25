import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register/register.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { DetailsComponent } from './details/details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeePipe } from './pipes/employee.pipe';
import { EmployeeRoutingModule } from './employee.routing.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmployeeRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  exports :[
    ChildComponent,
    BsDatepickerModule
  ],
  declarations: [
    RegisterComponent,
    AddemployeeComponent,
    ViewemployeeComponent,
    DetailsComponent,
    ParentComponent,
    ChildComponent,
    EmployeePipe,
  ]
})
export class EmployeeModule { }
