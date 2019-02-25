import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { EmpService } from "../services/emp.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: []
})
export class DetailsComponent implements OnInit {
  id : number;
  empDetail;
  constructor(private ActivatedRoute:ActivatedRoute, private EmpService:EmpService) { 
    // this.id = ActivatedRoute.snapshot.params['id'];
    // console.log(this.id)
    this.empDetail = this.ActivatedRoute.snapshot.data['employeedetails'];

  }

  ngOnInit() {
    // this.EmpService.getEmployeeById(this.id).subscribe(data=>{
    //   //console.log(data);
    //   this.empDetail = data;
    // }); 
  } 
 
}
