import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable, throwError, of } from 'rxjs';
import { delay, catchError, retry  } from 'rxjs/operators';
import { EmpModel } from '../models/emp.model';
@Injectable()

export class EmpService{
    _baseUrl = "http://localhost:3000/Emp";
    constructor(private http:HttpClient){}

    getEmployees():Observable<EmpModel[]>{
        return this.http.get<EmpModel[]>(this._baseUrl).pipe(delay(2000),catchError(this.handleError));
    }

    getEmployeeById(id){
        return this.http.get<EmpModel>("http://localhost:3000/Emp/"+id).pipe(delay(2000),catchError(this.handleError));
    }

    addEmp(body){
        return this.http.post(this._baseUrl, body, {headers : new HttpHeaders({'Content-Type': 'application/json'})});
    }

    updateEmployee(id,emp) {
        return this.http.patch("http://localhost:3000/Emp/"+id, emp);
    }

    deleteEmployee(id){
        return this.http.delete("http://localhost:3000/Emp/"+id);
    }

    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) 
            {
            // client-side error
            errorMessage = `client-side Error: ${error.error.message}`;
            } 
        else 
            {
            // server-side error
            errorMessage = `Server-side Error Code: ${error.status}\nMessage: ${error.message}`;
            }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }


}