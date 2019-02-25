import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { AutoCompleteService } from "../services/autocomplete.service";

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styles: []
})
export class AutocompleteComponent implements OnInit {

  searchTerm : FormControl = new FormControl();
  Users:any;
  UsersArr:any;
  constructor (private service: AutoCompleteService) { }
  
  ngOnInit () {
    this.searchTerm.valueChanges.subscribe(
      term => {
        if (term != '') {
          this.service.search(term).subscribe(
            data => {
              this.Users = data as any[];
              console.log(data);
          })
        }
    })
  }

  searchFun(data){
    console.log(data);
    alert(data.value)
  }

  

}
