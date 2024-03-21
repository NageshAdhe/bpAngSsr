import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { TroveHorizontalNavigationComponent } from '../../../../navigation/horizontal/horizontal.component';
import { TroveNavigationService } from '../../../../navigation/navigation.service';
import { TroveNavigationItem } from '../../../../navigation/navigation.types';

@Component({
    selector       : 'trove-horizontal-navigation-spacer-item',
    templateUrl    : './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TroveHorizontalNavigationSpacerItemComponent implements OnInit, OnDestroy
{
    @Input() item!: TroveNavigationItem;
    @Input() name!: string;

    private _troveHorizontalNavigationComponent!: TroveHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _troveNavigationService: TroveNavigationService
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
        this._troveHorizontalNavigationComponent = this._troveNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._troveHorizontalNavigationComponent.onRefreshed.pipe(
            takeUntil(this._unsubscribeAll)
        ).subscribe(() => {

            // Mark for check
            this._changeDetectorRef.markForCheck();
        });
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
