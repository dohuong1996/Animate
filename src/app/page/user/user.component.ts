import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service/api.service';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  listData: any = [];
  constructor( private dataService: ApiService) {
  }

  ngOnInit() {
    this.dataService.getList().then((res: any) => {
      this.listData = res.data ? res.data: [];
    })

  }

}