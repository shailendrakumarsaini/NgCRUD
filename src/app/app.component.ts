import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Event} from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.component.css']
})
export class AppComponent {
  showLoadingIndicator = true;
  template: string =`<img src="../assets/hq.gif" />`;
  //template: string =`<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`
  constructor(private _router: Router, private spinnerService: Ng4LoadingSpinnerService) {
    this._router.events.subscribe((routerEvent: Event) => {

      if (routerEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
        this.spinnerService.show();
      }

      // On NavigationEnd or NavigationError or NavigationCancel
      // set showLoadingIndicator to false

      if (routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel) {
        this.showLoadingIndicator = false;
        this.spinnerService.hide();
      }

    });
  }


}
