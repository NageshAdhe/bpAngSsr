import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
// import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { EmptyLayoutModule } from './layouts/empty/empty.module';
import { ClassicLayoutModule } from './layouts/vertical/classic/classic.module';
import { EnterpriseLayoutModule } from './layouts/horizontal/enterprise/enterprise.module';
import { SettingsModule } from '../common/settings/settings.module';

const layoutModules = [
     // Empty
    EmptyLayoutModule,
     // Vertical navigation
     ClassicLayoutModule,
    // Horizontal navigation
    EnterpriseLayoutModule
];
@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    // LayoutRoutingModule,
    MatIconModule,
    SettingsModule,
    ...layoutModules,
  ],
  exports:[
    LayoutComponent,
    ...layoutModules,
  ]
})
export class LayoutModule { }
