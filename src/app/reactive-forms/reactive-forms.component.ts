import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styles: []
})
export class ReactiveFormsComponent implements OnInit {
  formGroupControl : FormGroup; 
  empModel: any = {};
  Departments = [{id: "1", name : "Help Desk"},{id: "2", name : "IT"},{id: "3", name : "HR"},{id: "4", name : "Sales"},];
  validationMessages  = {
                          'nameControl' : {
                                            'required': 'Name is Required',
                                            'minlength': 'Minimum 5 Digits are required'
                                          },
                          'phoneControl' :  {
                                              'required': 'Phone is Required',
                                              'minlength': 'Minimum 10 Digits are required',
                                              'maxlength': 'Maximum 10 Digits are required'
                                            },
                          'primaryemailControl' : {
                                                    'required': 'Email is required',
                                                    'pattern' : 'Please Enter Valid Email'
                                                  },
                          'genderControl' : {
                                              'required': 'Gender is required'
                                            },
                          'contactPreferenceControl' : {
                                                          'required': 'Gender is required'
                                                        },
                          'departmentControl' : {
                                                  'required': 'Department is required'
                                                },
                          'emailGroup': {
                                          'emailMismatch': 'Email and Confirm Email do not match.'
                                        },
                          'email': {
                                      'required': 'Email is required.',
                                      'pattern' : 'Please Enter Valid Email'
                                   },
                          'confirmEmail': {
                                            'required': 'Confirm Email is required.',
                                            'pattern' : 'Please Enter Valid Email'
                                          },
                          'passwordGroup': {
                                              'passwordMismatch': 'Password and Confirm Password do not match.'
                                           },
                          'passwordControl' : {
                                                'required': 'Department is required'
                                              },
                          'confirmPasswordControl' : {
                                                'required': 'Department is required'
                                              }
  };

  formErrors = {
    'nameControl' : '',
    'phoneControl' : '',
    'primaryemailControl' : '',
    'genderControl' : '',
    'contactPreferenceControl' : '',
    'departmentControl' : '',
    'emailGroup': '',
    'email': '',
    'confirmEmail': '',
    'passwordGroup': '',
    'passwordControl' : '',
    'confirmPasswordControl' : '',
  };

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formGroupControl = this.fb.group({
      nameControl : ['', [Validators.required, Validators.minLength(5)]],
      phoneControl : ['', [Validators.required]],
      primaryemailControl : ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      genderControl : ['', [Validators.required]],
      contactPreferenceControl : ['', [Validators.required]],
      departmentControl : ['', [Validators.required]],
      emailGroup: this.fb.group({
            email: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
            confirmEmail: ['', [Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
          }, { validator: this.matchEmails }),
      passwordGroup : this.fb.group({
        passwordControl : ['',[Validators.required]],
        confirmPasswordControl : ['',[Validators.required]]
        }, { validator: this.matchPassword })
    });

    this.formGroupControl.valueChanges.subscribe(value =>{
      this.logValidationMessages();
    });
  }

  onSubmit(formsValue){
    // console.log(formsValue);
    // console.log(this.empModel);
    this.logValidationMessages(this.formGroupControl);
    console.log(this.formErrors);
  }

  get fm(){return this.formGroupControl.controls};


  logValidationMessages(group: FormGroup = this.formGroupControl): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
        this.formErrors[key] = '';
          if (abstractControl && !abstractControl.valid && (abstractControl.touched)) {
            const messages = this.validationMessages[key];
            for (const errorKey in abstractControl.errors) {
              if (errorKey) {
                this.formErrors[key] += messages[errorKey] + ' ';
              }
            }
          }
          if (abstractControl instanceof FormGroup) {
            this.logValidationMessages(abstractControl);
          } 
      });
  }

  matchEmails(group: AbstractControl): { [key: string]: any } | null {
    const emailControl = group.get('email');
    const confirmEmailControl = group.get('confirmEmail');
    if (emailControl.value === confirmEmailControl.value || confirmEmailControl.pristine) {
      return null;
    } else {
      return { 'emailMismatch': true };
    }
  }

  matchPassword(group: AbstractControl): { [key: string]: any } | null {
    const pwdControl = group.get('passwordControl');
    const confirmPwdControl = group.get('confirmPasswordControl');
    if (pwdControl.value === confirmPwdControl.value || confirmPwdControl.pristine) {
      return null;
    } else {
      return { 'passwordMismatch': true };
    }
  }

}

// function matchEmails(group: AbstractControl): { [key: string]: any } | null {
//   const emailControl = group.get('email');
//   const confirmEmailControl = group.get('confirmEmail');
//   if (emailControl.value === confirmEmailControl.value || confirmEmailControl.pristine) {
//     return null;
//   } else {
//     return { 'emailMismatch': true };
//   }
// }

