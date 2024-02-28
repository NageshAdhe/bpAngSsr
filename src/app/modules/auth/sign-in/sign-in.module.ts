import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { authSignInRoutes } from './sign-in.routing';



@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authSignInRoutes),
  ]
})
export class SignInModule { }
