import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: []
})
export class ChildComponent implements OnInit {
  @Input() employee;
  panelExpan: boolean = true;
  constructor() { }

  ngOnInit() {
  }
 
}
