import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from '../app/modules/example/example.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'sign-in' },
 {
  path: '',
  component: LayoutComponent,
  data: {
      layout: 'empty'
  },
  children: [     
      {path: 'sign-in', loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)} ,
      {path: 'sign-up', loadChildren: () => import('./modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)}     
  ]
},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
