import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class ApiService {
  constructor( public httpClient: HttpClient) { }
  getList() {
    const url = environment.api + '/get-user';
    return new Promise((resolve, reject) => {
        return this.httpClient.get(url)
        .subscribe((data: any) => {
          resolve(data);
        }, err => reject(err)
        );
    });
  }

}
