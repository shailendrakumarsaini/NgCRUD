import { RouterModule,Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SharedModule } from "./shared.module";
import { EmployeeRoutingModule } from "./employee.routing.module";

import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from "./test/test.component";
import { AutocompleteComponent} from './autocomplete/autocomplete.component';
import { ContentProjectionComponent } from "./content-projection/content-projection.component";
import { LogoutComponent } from "./logout/logout.component";
import { CanActivateGuardService } from "./guards/canActivateGuard.service";


const AppRoutes:Routes = [
    { path : "login", component : LoginComponent },
    { path : "logout", component : LogoutComponent },
    { 
      path : "test",
      component : TestComponent, 
      canActivate: [CanActivateGuardService]
    },
    { 
      path : "contProj", 
      component : ContentProjectionComponent,
      canActivate: [CanActivateGuardService]
    },
    { 
      path : "auto", 
      component : AutocompleteComponent,
      canActivate: [CanActivateGuardService]
     },
    { 
      path : "welcome", 
      component : WelcomeComponent 
    },
    { 
      path : "",
      redirectTo : "welcome",
      pathMatch:"full" 
    },
    { 
      path : "notfound",
      component : PageNotFoundComponent 
    },
    { 
      path : "**",
      component : PageNotFoundComponent 
    }
]

@NgModule({
    imports: [ 
      SharedModule,
      EmployeeRoutingModule,
      RouterModule.forRoot(AppRoutes, { enableTracing: false }) 
    ],
    exports: [ RouterModule ]
})
export class AppRouting {}
