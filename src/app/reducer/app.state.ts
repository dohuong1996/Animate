import { User } from '../models/user.model';

export interface AppState {
	userState: UserState;
}

export interface UserState {
	user: User[]
}