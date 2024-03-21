import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TroveVerticalNavigationComponent } from '../../../..//navigation/vertical/vertical.component';
import { TroveNavigationService } from '../../../..//navigation/navigation.service';
import { TroveNavigationItem } from '../../../..//navigation/navigation.types';

@Component({
    selector       : 'trove-vertical-navigation-divider-item',
    templateUrl    : './divider.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TroveVerticalNavigationDividerItemComponent implements OnInit, OnDestroy
{
    // @Input() item: TroveNavigationItem;
    // @Input() name: string;

    // private_troveVerticalNavigationComponent: TroveVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private_troveNavigationService: TroveNavigationService
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get the parent navigation component
        // this._troveVerticalNavigationComponent = this._troveNavigationService.getComponent(this.name);

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
