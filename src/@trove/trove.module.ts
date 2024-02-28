import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    {
        // Disable 'theme' sanity check
        provide : MATERIAL_SANITY_CHECKS,
        useValue: {
            doctype: true,
            theme  : false,
            version: true
        }
    },
    {
        // Use the 'fill' appearance on Angular Material form fields by default
        provide : MAT_FORM_FIELD_DEFAULT_OPTIONS,
        useValue: {
            appearance: 'fill'
        }
    }
]
})
export class TroveModule { }
