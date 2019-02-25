      // Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared.module';
import { EmployeeModule } from './employee.module';
import { AppRouting } from "./app.routing";
import { NgxMaskModule } from 'ngx-mask'
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule, MatInputModule } from "@angular/material";
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

      // Directives and Custom Validators
import { ConfirmEqualValidatorDirective } from "./directives/confirm-equal-validator.directive";
import { OnlyNumberWithLengthDirective } from './shared/Directives/onlyNumberWithLength';

      // Pipes
import { EmployeePipe } from "./pipes/employee.pipe";      

      // Services
import { EmployeeService } from './services/employee.service';
import { AutoCompleteService } from "./services/autocomplete.service";
import { EmpService } from "./services/emp.service";
import { CanDeactivateGuardService } from "./addemployee/canDeactivate-guard.service";
import { EmployeeListResolverService } from "./viewemployee/employee-list-resolver.service";
import { DetailsResolverService } from './details/details-resolver.service';
import { ParentResolverService } from './parent/parent-resolver.service';
import { CanActivateGuardService } from './guards/canActivateGuard.service';

      // Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { DetailsCanActivateGuardService } from './details/details-CanActivateGuard.service';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { AccordionComponent } from './shared/accordion/accordion.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      WelcomeComponent,
      PageNotFoundComponent,
      TestComponent,
      AutocompleteComponent,
      ConfirmEqualValidatorDirective,
      ContentProjectionComponent,
      AccordionComponent,
      LogoutComponent,
      ReactiveFormsComponent,

      OnlyNumberWithLengthDirective
  ],
  imports: [
      BrowserModule,
      SharedModule,
      AppRouting,
      NgxMaskModule.forRoot(),
      HttpClientModule,
      MatAutocompleteModule, 
      MatInputModule,
      Ng4LoadingSpinnerModule.forRoot(),
      EmployeeModule
  ],
  providers: [    
      EmployeeService, 
      AutoCompleteService, 
      EmpService, 
      CanDeactivateGuardService, 
      EmployeeListResolverService,
      DetailsResolverService,
      ParentResolverService,
      DetailsCanActivateGuardService,
      CanActivateGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
