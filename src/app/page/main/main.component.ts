import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(private _api: ApiService) {
    // auth.handleAuthentication();
  }
  ngAfterContentInit() {
    // this.auth.handleAuthentication('main');
  }
  ngOnInit() {
  }

  ngOnDestroy() {
  
  }
}
