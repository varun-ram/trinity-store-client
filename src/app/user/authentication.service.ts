import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: IUser;

  constructor() {
    this.user = <IUser>{};
    this.user.firstName = 'Varun';
   }

}
