import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { EmployeeService } from '../services/employee.service'
import { Employee } from '../models/employee'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  submitted : boolean = false;
  employeeForm : FormGroup;
  employees : Employee[];
  // This object will hold the messages to be displayed to the user
  // Notice, each key in this object has the same name as the
  // corresponding form control
  formErrors = {
    'fullName': '',
    'email': '',
    'phone': '',
    'skillName': '',
    'experienceInYears': '',
    'proficiency': ''
  };
  
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters',
      'maxlength': 'Full Name must be less than 10 characters.',
    },
    'email': {
      'required': 'Email is required.',
      'emailDomain': 'Email domian should be prgaimtech.com'
    },
    'phone': {
      'required': 'Phone is required.'
    },
    'skillName': {
      'required': 'Skill Name is required.',
    },
    'experienceInYears': {
      'required': 'Experience is required.',
    },
    'proficiency': {
      'required': 'Proficiency is required.',
    },
  };
  constructor(private fb:FormBuilder,private empService:EmployeeService, private _router: Router,private route: ActivatedRoute,) { }

  GetEmployee(empId){
    this.empService.getEmployee(empId).subscribe((data)=>{
      console.log(data);
    })
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //console.log(params.get('id'))
      const empId = +params.get('id');
      if (empId) {
        this.GetEmployee(empId);
      }
    });
  

    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      contactPreference: ['email'],
      email: ['', Validators.required],
      phone: [''],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      }),
    });
  
    // When any of the form control value in employee form changes
    // our validation function logValidationErrors() is called
    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });

    this.employeeForm.get('contactPreference').valueChanges.subscribe((data: string) => {
      this.onContactPrefernceChange(data);
    });
  }

  get f(){return this.employeeForm.controls}

  onContactPrefernceChange(selectedValue: string) {
    const phoneFormControl = this.employeeForm.get('phone');
    if (selectedValue === 'phone') {
      phoneFormControl.setValidators(Validators.required);
    } else {
      phoneFormControl.clearValidators();
    }
    phoneFormControl.updateValueAndValidity();
  }

  getEmployeeFun(){
    this.empService.getEmployees().subscribe((data)=>{
      this.employees = data;
      //console.log(this.employees);
    });
  }

  loadDataFun(){

    this.employeeForm = this.fb.group({
      fullName: ['Sunny', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['sunny@gmail.com', Validators.required],
      skills: this.fb.group({
        skillName: ['Angular', Validators.required],
        experienceInYears: ['1', Validators.required],
        proficiency: ['intermediate', Validators.required]
      }),
    });
    this.submitted = false;
    this.logValidationErrors(this.employeeForm)
      this.employeeForm.valueChanges.subscribe((data) => {
        this.logValidationErrors(this.employeeForm);
      });
  }

  clearDataFun(){
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      email: ['', Validators.required],
      skills: this.fb.group({
        skillName: ['', Validators.required],
        experienceInYears: ['', Validators.required],
        proficiency: ['', Validators.required]
      }),
    });
    this.submitted = true;
    this.logValidationErrors();
  }

  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach(
      (key)=>{
        const abstractControl = group.get(key);
        if(abstractControl instanceof FormGroup){
          this.logValidationErrors(abstractControl)
        }else{
          this.formErrors[key] = '';
          if(abstractControl && abstractControl.invalid && (abstractControl.touched || abstractControl.dirty || this.submitted)){
            const messages = this.validationMessages[key];
            for(const errorName in abstractControl.errors){
              if(errorName){
                this.formErrors[key] += messages[errorName] + ' ';
              }
            }
          }
        }
      }
    )
  }

  saveDataFun(employee){
    this.submitted = true;
    this.logValidationErrors();
    if(this.employeeForm.valid){
      this.empService.addEmployee(employee).subscribe((data)=>{
        console.log(data);
      });
      swal("", "You Data has been saved", "success");
    }
  }


  editButtonClick(employeeId: number) {
    this._router.navigate(['/edit', employeeId]);
  }


}
