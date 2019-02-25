import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AddemployeeComponent } from './addemployee.component';

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<AddemployeeComponent> {

    constructor() { }

    canDeactivate(component: AddemployeeComponent): boolean {
        if (component.createEmployeeForm.dirty) {
            return confirm('Are you sure you want to discard your changes?');
        }
        return true;
    }
}