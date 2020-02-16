import { Component, OnInit } from '@angular/core';
import { IUser } from '../user.model';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification/notification.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginId: string;
  userPassword: string;

  constructor(private router: Router, private notify: NotificationService, private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.notify.success(`Welcome ${this.authentication.user.firstName}`, 'Login successful');
    this.router.navigate(['/shop']);
  }

}
