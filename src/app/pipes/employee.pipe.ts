import { Pipe, PipeTransform } from "@angular/core";
import { EmpModel } from "../models/emp.model";

@Pipe({
    name:'empPipe'
})
export class EmployeePipe implements PipeTransform {
    transform(employees:EmpModel[], param :string):EmpModel[]{
        if(!employees || !param){
            return employees;
        }else
        {
            return employees.filter(emp =>
                emp.name.toLowerCase().indexOf(param.toLowerCase()) !== -1);
        }
    }
}
