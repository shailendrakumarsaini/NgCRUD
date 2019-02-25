import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private router:Router) {}
  ngOnInit() {}

  formSubmitFunction(obj){
    localStorage.setItem('uname',obj.UserName);
    swal("", "Username : "+obj.UserName+", Password : "+obj.Password, "success");
    this.router.navigate(['/welcome']);
  }

}
