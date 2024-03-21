import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { TroveLoadingBarService } from '../../components/loading-bar/loading-bar.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector     : 'trove-loading-bar',
    templateUrl  : './loading-bar.component.html',
    styleUrls    : ['./loading-bar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'troveLoadingBar'
})
export class TroveLoadingBarComponent implements OnChanges, OnInit, OnDestroy
{
    @Input() autoMode: boolean = true;
    mode!: 'determinate' | 'indeterminate';
    progress: number = 0;
    show: boolean = false;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    /**
     * Constructor
     */
    constructor(private _troveLoadingBarService: TroveLoadingBarService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Auto mode
        if ( 'autoMode' in changes )
        {
            // Set the auto mode in the service
            // this._troveLoadingBarService.setAutoMode(coerceBooleanProperty(changes.autoMode.currentValue));
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Subscribe to the service
        this._troveLoadingBarService.mode$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.mode = value;
            });

        this._troveLoadingBarService.progress$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.progress = value;
            });

        this._troveLoadingBarService.show$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((value) => {
                this.show = value;
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
