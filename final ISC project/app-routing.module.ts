import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule ,Routes } from '@angular/router';
import { DetailsComponent } from './component/details/details.component';
import { placeOrderComponent } from './component/placeorder/placeorder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './component/admin/admin.component';
import { AdminHomeComponent } from './component/adminhome/adminhome.component';




const routes: Routes = [
  {path:'',pathMatch:'full',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'details',component:DetailsComponent},
  {path:'placeorder',component:placeOrderComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminhome',component:AdminHomeComponent}


]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
