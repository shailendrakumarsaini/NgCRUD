import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {

  constructor(public http:HttpClient, public router:Router) { }

  ngOnInit() {
  }

  docLogin(values){
    console.log(values)
    var obj={
            username:values.username,
            password:values.password,
            email:values.email
          }

      this.http.post('api/doctor/login',obj).subscribe(dt=>{
            //  var token=JSON.parse((dt._body));
            //   localStorage.setItem('token',token);
            //   if(token){
            //     this.router.navigate(['/dashboard'])
            //   }
            });

  }


}
