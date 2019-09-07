import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { User } from '../models/user.model';

export const LIST_USER = '[USER] List User';
export const LIST_USER_SUCCESS = '[USER] List User Success';
export const LIST_USER_FAILED = '[USER] List User Fail';

export class ListUser implements Action {
    readonly type = LIST_USER;
}

export class ListUserSuccessAction implements Action {
    readonly type = LIST_USER_SUCCESS;

    constructor(public payload: User) { }
}

export class ListUserFailAction implements Action {
    readonly type = LIST_USER_FAILED;

    constructor(public payload: any) { }
}

export type Actions = ListUser | ListUserSuccessAction | ListUserFailAction;