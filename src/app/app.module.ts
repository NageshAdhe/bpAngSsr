import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TroveModule } from '../@trove/trove.module';
import { LayoutModule } from './layout/layout.module';
import { FuseMockApiModule } from '../@trove/lib/mock-api';
import { mockApiServices } from './mock-api';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // CommonModule,
    AppRoutingModule,
  // Trove, TroveConfig 
    TroveModule,   
    LayoutModule,    
    FuseMockApiModule.forRoot(mockApiServices),
    CoreModule
  ],
  providers: [
    // provideClientHydration(),
    // provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
