import { Component, OnInit } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { EmpModel } from '../models/emp.model';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styles: []
})
export class ContentProjectionComponent implements OnInit {
  employees: EmpModel[];

  constructor(private EmpService:EmpService) { }

  ngOnInit() {
    this.EmpService.getEmployees().subscribe(data=>{
      console.log(data);
      this.employees = data;
    });
  }


}
