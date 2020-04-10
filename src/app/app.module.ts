import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DoctComponent } from './doct/doct.component';
import { ControlComponent } from './control/control.component';
import { GuideComponent } from './guide/guide.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhComponent } from './adminh/adminh.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment.prod';
import { DocloginComponent } from './doclogin/doclogin.component';
import { ProfileoffComponent } from './profileoff/profileoff.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { BorderComponent } from './border/border.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DoctComponent,
    ControlComponent,
    GuideComponent,
    SigninComponent,
    SignupComponent,
    AdminhComponent,
    DocloginComponent,
    ProfileoffComponent,
    ProfileComponent,
    PaymentComponent,
    BorderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
