import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-logout',
  template: ``,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
    swal("Log Out Successful");
  }

}
