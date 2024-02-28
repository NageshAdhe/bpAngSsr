import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TroveModule } from '../@trove/trove.module';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    AppRoutingModule,
    // Trove, TroveConfig 
    TroveModule,   
    LayoutModule,
  ],
  providers: [
    // provideClientHydration(),
    // provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
