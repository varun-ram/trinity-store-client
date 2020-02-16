import { Routes } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ShopComponent } from './app/shop/shop.component';
import { AboutComponent } from './app/about/about.component';
import { LoginComponent } from './app/user/login/login.component';
import { ProductsComponent } from './app/product/products.component';
import { SignupComponent } from './app/user/signup/signup.component'

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'products', component: ProductsComponent},
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
]