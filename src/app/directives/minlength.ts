import { Directive, Input } from '@angular/core'
import { NG_VALIDATORS, Validator, AbstractControl, Validators } from '@angular/forms'

@Directive({
  selector: '[Min]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinDirective, multi: true }]
})
export class MinDirective implements Validator {

  @Input() Min: number;

  validate(control: AbstractControl): { [key: string]: any } {    
    return Validators.minLength(this.Min)(control) 
  }
}