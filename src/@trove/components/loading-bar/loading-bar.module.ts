import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TroveLoadingBarComponent } from '../../components/loading-bar/loading-bar.component';
import { TroveLoadingBarInterceptor } from '../../components/loading-bar/loading-bar.interceptor';

@NgModule({
    declarations: [
        TroveLoadingBarComponent
    ],
    imports     : [
        CommonModule,
        MatProgressBarModule
    ],
    exports     : [
        TroveLoadingBarComponent
    ],
    providers   : [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: TroveLoadingBarInterceptor,
            multi   : true
        }
    ]
})
export class TroveLoadingBarModule
{
}
