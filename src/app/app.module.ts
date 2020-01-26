import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

import { AppComponent } from './app.component';
import { TabnavComponent } from './tabnav/tabnav.component';
import { HomeComponent } from './home/home.component';

import {NotificationService} from './shared/notification.service';

import {appRoutes} from '../routes';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    TabnavComponent,
    HomeComponent,
    ShopComponent,
    AboutComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
