import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as collection from '../action/user.action';
import { User } from '../models/user.model';
import { ApiService } from '../services/api-service/api.service';


@Injectable()
export class UserEffects {
    @Effect() 
    loadAllArticles$: Observable<Action> = this.actions$
      .ofType(collection.LIST_USER)
      .switchMap(() => 
         this.apiService.getList()
         .map((data: any) => new collection.ListUserSuccessAction(data)) 
      );

    constructor(private actions$: Actions , private apiService: ApiService) { }
}
