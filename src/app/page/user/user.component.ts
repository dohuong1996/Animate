import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listData: Observable<User[]>;
  constructor( private dataService: ApiService) {
  }

  ngOnInit() {
    // this.dataService.getList().then((res: any) => {
    //   this.listData = res.data ? res.data: [];
    // })

  }

}