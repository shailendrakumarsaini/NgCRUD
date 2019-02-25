import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from "../services/emp.service";
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import swal from 'sweetalert';
import { Router } from '@angular/router';
import { EmpModel } from '../models/emp.model'
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styles: []
})
export class AddemployeeComponent implements OnInit {
  empModel:EmpModel = new EmpModel();
  datePickerConfig: Partial<BsDatepickerConfig>;
  Departments = [{id: "1", name : "Help Desk"},{id: "2", name : "IT"},{id: "3", name : "HR"},{id: "4", name : "Sales"},];
  @ViewChild('empForm') createEmployeeForm;

  constructor(private EmpService:EmpService, private Router:Router, private ActivatedRoute:ActivatedRoute) { 
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',
        // minDate: new Date(2018, 0, 1),
        // maxDate: new Date(2018, 11, 31),
      });
  }

  // + Symbol for converting string into a number
  ngOnInit() {
    if(+this.ActivatedRoute.snapshot.paramMap.get('id')){
      this.EmpService.getEmployeeById(+this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(data=>{
         this.empModel = <EmpModel>data;
         this.empModel.dob = new Date(this.empModel.dob);
      });
    }else{
      this.empModel.gender = "male";
      this.empModel.dob = new Date();
      this.empModel.contactPreference = "phone";
      this.empModel.IsActive = false; 
      this.empModel.department = '';
    }
  }

  onSubmit(emp){ 
    if(+this.ActivatedRoute.snapshot.paramMap.get('id')){
      this.EmpService.updateEmployee(+this.ActivatedRoute.snapshot.paramMap.get('id'),emp).subscribe(res => {
        // console.log(res)
        this.Router.navigate(['/viewemp']);
      });
    }else{
      this.EmpService.addEmp(emp).subscribe(
        data =>{
          // console.log(data);
          this.Router.navigate(['/viewemp']);
          // swal("Data Saved") 
          // setTimeout(()=>{
          //   this.Router.navigate(['/viewemp']);
          // },1000);
        });
    }
  }

  resetFrom(){
    this.createEmployeeForm.reset({
      gender : 'male',
      dob : new Date(),
      contactPreference : 'phone',
      IsActive : false,
      department : ''
    });
  }

}
