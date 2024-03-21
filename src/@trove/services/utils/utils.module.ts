import { NgModule } from '@angular/core';
import { TroveUtilsService } from '../../services/utils/utils.service';

@NgModule({
    providers: [
        TroveUtilsService
    ]
})
export class TroveUtilsModule
{
    /**
     * Constructor
     */
    constructor(private _troveUtilsService: TroveUtilsService)
    {
    }
}
