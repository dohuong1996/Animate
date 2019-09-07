import { Component } from '@angular/core';
import { HelperService } from './services/helper-service/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;
  constructor() {
    // this.auth.handleAuthentication();
    // this._helperService.loading.subscribe(res => {
    //   this.loading = res;
    // });
  }
}
