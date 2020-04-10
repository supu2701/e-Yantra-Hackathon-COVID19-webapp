import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { DoctComponent } from './doct/doct.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { ControlComponent } from './control/control.component';
import { GuideComponent } from './guide/guide.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AdminhComponent } from './adminh/adminh.component';
import { ProfileoffComponent } from './profileoff/profileoff.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { BorderComponent } from './border/border.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'doct', component: DoctComponent },
  { path: 'profileoff', component: ProfileoffComponent },
  { path: 'border', component: BorderComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'doclogin', component: DocloginComponent },
  { path: 'control', component: ControlComponent },
  { path: 'guide', component: GuideComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminhComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
