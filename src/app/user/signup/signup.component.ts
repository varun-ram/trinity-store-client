import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants/constants';
import { IUser } from '../user.model';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: IUser;
  houseSide: string[];
  mouseOverSubmit: boolean;
  password: string;
  reTypePassword: string;

  constructor(private router: Router, private notify: NotificationService) {
    this.user = <IUser>{};
    this.houseSide = Constants.houseSide;
  }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.success(`${this.user.firstName} added as a Trinity customer. Login to continue.`, 'Sign Up successful');
    this.router.navigate(['/login']);
  }

}
