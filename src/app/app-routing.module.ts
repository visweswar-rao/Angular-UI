import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {DashBoardComponent} from "./dash-board/dash-board.component";

const routes: Routes = [
{ path: '',   redirectTo: '/SignUp', pathMatch: 'full' },
{ path: 'SignUp', component: SignUpComponent },
{ path: 'SignIn', component: SignInComponent },
{ path: 'Dashboard', component: DashBoardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  AppComponent,
  SignUpComponent,
  SignInComponent,
  DashBoardComponent];
