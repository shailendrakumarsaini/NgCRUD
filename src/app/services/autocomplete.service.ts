import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { TreeNode } from '@angular/router/src/utils/tree';

@Injectable()  
export class AutoCompleteService {  

    constructor (private httpService: HttpClient) { }  

    search(term) {
      
        var listOfBooks = this.httpService.get("https://jsonplaceholder.typicode.com/users")
        .pipe(
            //debounceTime(1000),  // WAIT FOR 500 MILISECONDS ATER EACH KEY STROKE.
            map(
                (data: any) => {
                    console.log(data)
                    return (
                        data.length != 0 ? data as any[] : [{"name": "No Record Found"} as any]
                    );
                }
        ));

        return listOfBooks;  
    }  


}