import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { User } from '../../models/user.model';
@Injectable()
export class ApiService {
  private API_PATH = environment.api + '/get-user';
  constructor( public httpClient: HttpClient) { }
  // getList() {
  //   const url = environment.api + '/get-user';
  //   return new Promise((resolve, reject) => {
  //       return this.httpClient.get(url)
  //       .subscribe((data: any) => {
  //         resolve(data);
  //       }, err => reject(err)
  //       );
  //   });
  // }
  getList(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.API_PATH);
}

}
