import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// import { TroveFullscreenModule } from '@trove/components/fullscreen';
// import { TroveLoadingBarModule } from '@trove/components/loading-bar';
import {TroveNavigationModule } from '../../../../../@trove/components/navigation/navigation.module';
// import { LanguagesModule } from 'app/layout/common/languages/languages.module';
// import { MessagesModule } from 'app/layout/common/messages/messages.module';
// import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
// import { QuickChatModule } from 'app/layout/common/quick-chat/quick-chat.module';
// import { SearchModule } from 'app/layout/common/search/search.module';
// import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
// import { UserModule } from 'app/layout/common/user/user.module';
// import { SharedModule } from 'app/shared/shared.module';
import { EnterpriseLayoutComponent } from './enterprise.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        EnterpriseLayoutComponent
    ],
    imports     : [
        HttpClientModule,
        RouterModule,
        CommonModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        // TroveFullscreenModule,
        // TroveLoadingBarModule,
        TroveNavigationModule,
        // LanguagesModule,
        // MessagesModule,
        // NotificationsModule,
        // QuickChatModule,
        // SearchModule,
        // ShortcutsModule,
        // UserModule,
        // SharedModule
    ],
    exports     : [
        EnterpriseLayoutComponent
    ]
})
export class EnterpriseLayoutModule
{
}