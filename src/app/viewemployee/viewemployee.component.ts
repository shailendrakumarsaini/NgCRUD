import { Component, OnInit, ViewChild } from '@angular/core';
import { EmpService} from '../services/emp.service';
import { Router, ActivatedRoute } from '@angular/router'
import { EmpModel } from '../models/emp.model';
import swal from 'sweetalert';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styles: []
})
export class ViewemployeeComponent implements OnInit {
  employees;
  empDetail;
  @ViewChild('childRef') childRef; 
  selectedEmployeeId: number;

  // Use this property to stored filtered employees, so we do not lose the original list and do not have to make a round trip to the web server on every new search
  filteredEmployees:EmpModel;
  private _searchTerm: string;

  constructor(private EmpService:EmpService, private router:Router, private ActivatedRoute: ActivatedRoute) { 
    this.employees = this.ActivatedRoute.snapshot.data['employeeList'];
    this.filteredEmployees = this.employees;
    console.log(this.employees)
  }

  // We are binding to this property in the view template, so this getter is called when the binding needs to read the value
  get searchTerm(): string {
    return this._searchTerm;
  }

  // This setter is called everytime the value in the search text box changes
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

  ngOnInit() {
    // this.EmpService.getEmployees().subscribe(data => {
    //   // console.log(data)
    //   this.employees = data;
    //   this.filteredEmployees = this.employees;
    // });
    this.selectedEmployeeId = +this.ActivatedRoute.snapshot.paramMap.get('id');
  }  

  openModel(id){
    this.EmpService.getEmployeeById(id).subscribe(data=>{
      // console.log(data);
      this.empDetail = data;
    });
  }

  deleteEmploueeFun(id){
    this.EmpService.deleteEmployee(id).subscribe(()=>{
      swal("","Employee Deleted Successfully");
      this.EmpService.getEmployees().subscribe(data => {
        this.employees = data;
        this.filteredEmployees = this.employees;
      });
    });
  }

}
