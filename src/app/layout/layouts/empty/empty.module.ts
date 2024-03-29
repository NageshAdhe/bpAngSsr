import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyLayoutComponent } from './empty.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EmptyLayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    EmptyLayoutComponent
  ]
})
export class EmptyLayoutModule { }
