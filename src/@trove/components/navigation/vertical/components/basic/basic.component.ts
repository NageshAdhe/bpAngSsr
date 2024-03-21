import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IsActiveMatchOptions } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TroveVerticalNavigationComponent } from '../../../vertical/vertical.component';
import { TroveNavigationService } from '../../../navigation.service';
import { TroveNavigationItem } from '../../../navigation.types';
import { TroveUtilsService } from '../../../../../services/utils/utils.service';

@Component({
    selector       : 'trove-vertical-navigation-basic-item',
    templateUrl    : './basic.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TroveVerticalNavigationBasicItemComponent implements OnInit, OnDestroy
{
    // @Input() item: TroveNavigationItem;
    // @Input() name: string;

    isActiveMatchOptions: IsActiveMatchOptions;
    // private _troveVerticalNavigationComponent: TroveVerticalNavigationComponent;s
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _troveNavigationService: TroveNavigationService,
        private _troveUtilsService: TroveUtilsService
    )
    {
        // Set the equivalent of {exact: false} as default for active match options.
        // We are not assigning the item.isActiveMatchOptions directly to the
        // [routerLinkActiveOptions] because if it's "undefined" initially, the router
        // will throw an error and stop working.
        this.isActiveMatchOptions = this._troveUtilsService.subsetMatchOptions;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Set the "isActiveMatchOptions" either from item's
        // "isActiveMatchOptions" or the equivalent form of
        // item's "exactMatch" option
        // this.isActiveMatchOptions =
        //     this.item.isActiveMatchOptions ?? this.item.exactMatch
        //         ? this._troveUtilsService.exactMatchOptions
        //         : this._troveUtilsService.subsetMatchOptions;

        // Get the parent navigation component
        // this._troveVerticalNavigationComponent = this._troveNavigationService.getComponent(this.name);

        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Subscribe to onRefreshed on the navigation component
        // this._troveVerticalNavigationComponent.onRefreshed.pipe(
        //     takeUntil(this._unsubscribeAll)
        // ).subscribe(() => {

        //     // Mark for check
        //     this._changeDetectorRef.markForCheck();
        // });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        // this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
