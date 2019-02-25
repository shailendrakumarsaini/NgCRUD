import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService } from '../services/emp.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  employees;
  // Now we can access child component properties and methods with this 'ChildRefVariable' variable
  @ViewChild('childRefVariable') ChildRefVariable;
  
  constructor(private EmpService:EmpService,private _router:Router, private ar:ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService) { 
    this.employees = this.ar.snapshot.data['parentData'];
  }

  ngOnInit() {
    this.EmpService.getEmployees().subscribe(data => {
      //console.log(data)
      this.employees = data;
    });
  }

  logChildDataIntoParentComponent(childRefVariable,h1Variable){
    console.log(this.ChildRefVariable);
    h1Variable.innerHTML = childRefVariable.employee.name;
  }

}
