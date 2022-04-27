import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { HotToastModule } from '@ngneat/hot-toast';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { placeOrderComponent } from './component/placeorder/placeorder.component';
import { DetailsComponent } from './component/details/details.component';
import { DataService } from './shared/data.service';
import { AuthenticationService } from './services/authentication.service';
import {AngularFireModule} from '@angular/fire/compat';
import { AdminComponent } from './component/admin/admin.component';
import { AdminHomeComponent } from './component/adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DetailsComponent,
    placeOrderComponent,
    AdminComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    provideFirestore(() => getFirestore())
  ],
  providers: [DataService, AuthenticationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
