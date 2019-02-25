import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EmployeeService {
    baseUrl = 'http://localhost:3000/employees';
    constructor(private httpClient: HttpClient) {}

    getEmployees(): Observable<Employee[]> {
        return this.httpClient.get<Employee[]>(this.baseUrl)
        .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }


    addEmployee(employee: Employee) {
        return this.httpClient.post(this.baseUrl, employee, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) })
                   .pipe(catchError(this.handleError));
    }


    getEmployee(id: number): Observable<Employee> {
        return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }


}