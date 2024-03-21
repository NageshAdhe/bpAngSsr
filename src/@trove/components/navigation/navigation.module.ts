import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TroveHorizontalNavigationBasicItemComponent } from '../navigation/horizontal/components/basic/basic.component';
import { TroveHorizontalNavigationBranchItemComponent } from '../navigation/horizontal/components/branch/branch.component';
import { TroveHorizontalNavigationDividerItemComponent } from '../navigation/horizontal/components/divider/divider.component';
import { TroveHorizontalNavigationSpacerItemComponent } from '../navigation/horizontal/components/spacer/spacer.component';
import { TroveHorizontalNavigationComponent } from '../navigation/horizontal/horizontal.component';
import { TroveVerticalNavigationAsideItemComponent } from '../navigation/vertical/components/aside/aside.component';
import { TroveVerticalNavigationBasicItemComponent } from '../navigation/vertical/components/basic/basic.component';
import { TroveVerticalNavigationCollapsableItemComponent } from '../navigation/vertical/components/collapsable/collapsable.component';
import { TroveVerticalNavigationDividerItemComponent } from '../navigation/vertical/components/divider/divider.component';
import { TroveVerticalNavigationGroupItemComponent } from '../navigation/vertical/components/group/group.component';
import { TroveVerticalNavigationSpacerItemComponent } from '../navigation/vertical/components/spacer/spacer.component';
import { TroveVerticalNavigationComponent } from '../navigation/vertical/vertical.component';

@NgModule({
    declarations: [
        TroveHorizontalNavigationBasicItemComponent,
        TroveHorizontalNavigationBranchItemComponent,
        TroveHorizontalNavigationDividerItemComponent,
        TroveHorizontalNavigationSpacerItemComponent,
        TroveHorizontalNavigationComponent,
        TroveVerticalNavigationAsideItemComponent,
        TroveVerticalNavigationBasicItemComponent,
        TroveVerticalNavigationCollapsableItemComponent,
        TroveVerticalNavigationDividerItemComponent,
        TroveVerticalNavigationGroupItemComponent,
        TroveVerticalNavigationSpacerItemComponent,
        TroveVerticalNavigationComponent
    ],
    imports     : [
        CommonModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatTooltipModule,
        // TroveScrollbarModule
    ],
    exports     : [
        TroveHorizontalNavigationComponent,
        TroveVerticalNavigationComponent
    ]
})
export class TroveNavigationModule
{
}
