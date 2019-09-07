import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

@Injectable()
export class ConfigService {

  public settings: any;

  constructor(
    public httpClient: HttpClient
  ) {

  }

  // load(): Promise<boolean> {
  //   return new Promise((resolve, reject) => {

  //     this.httpClient.get('assets/data/config.json')
  //       .subscribe(data => {

  //         this.settings = data;

  //         resolve(true);

  //       }, err => {
  //         reject(err);
  //       });
  //   });
  // }

  // get(setting) {
  //   return this.settings[setting];
  // }

}
