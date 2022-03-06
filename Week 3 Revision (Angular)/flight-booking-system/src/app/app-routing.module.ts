import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'home',component:HomeComponent},
  {path:'book-flight',component:BookFlightComponent},
  {path:'add-flight',component:AddFlightComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'admin-login',component:AdminLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
