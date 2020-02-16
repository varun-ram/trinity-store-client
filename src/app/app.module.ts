import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TabnavComponent } from './tabnav/tabnav.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './user/login/login.component';
import { ProductsComponent } from './product/products.component';
import { SignupComponent } from './user/signup/signup.component';

import {NotificationService} from './shared/notification/notification.service';

import {appRoutes} from '../routes';

@NgModule({
  declarations: [
    AppComponent,
    TabnavComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    LoginComponent,
    ProductsComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
