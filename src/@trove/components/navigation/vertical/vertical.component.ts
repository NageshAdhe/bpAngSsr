import { AnimationBuilder } from "@angular/animations";
import { BooleanInput } from "@angular/cdk/coercion";
import { ScrollStrategy, ScrollStrategyOptions } from "@angular/cdk/overlay";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectorRef, ElementRef, Renderer2, HostBinding, HostListener, SimpleChanges } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { Router } from "express";
import { ReplaySubject, Subject, filter, takeUntil } from "rxjs";
import { TroveUtilsService } from "../../../services/utils/utils.service";
import { TroveNavigationService } from "../navigation.service";
import { TroveVerticalNavigationAppearance, TroveVerticalNavigationMode, TroveVerticalNavigationPosition, TroveNavigationItem } from "../navigation.types";


@Component({
    selector       : 'trove-vertical-navigation',
    templateUrl    : './vertical.component.html',
    styleUrls      : ['./vertical.component.scss'],
    // animations     : troveAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'troveVerticalNavigation'
})
export class TroveVerticalNavigationComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    // static ngAcceptInputType_inner: BooleanInput;
    // static ngAcceptInputType_opened: BooleanInput;
    // static ngAcceptInputType_transparentOverlay: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() appearance: TroveVerticalNavigationAppearance = 'default';
    @Input() autoCollapse: boolean = true;
    @Input() inner: boolean = false;
    @Input() mode: TroveVerticalNavigationMode = 'side';
    @Input() opened: boolean = true;
    @Input() position: TroveVerticalNavigationPosition = 'left';
    @Input() transparentOverlay: boolean = false;

    private _animationsEnabled: boolean = false;
    private _hovered: boolean = false;

    /**
     * Constructor
     */
    constructor(
    )
    {
      
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            'trove-vertical-navigation-animations-enabled'             : this._animationsEnabled,
            [`trove-vertical-navigation-appearance-${this.appearance}`]: true,
            'trove-vertical-navigation-hover'                          : this._hovered,
            'trove-vertical-navigation-inner'                          : this.inner,
            'trove-vertical-navigation-mode-over'                      : this.mode === 'over',
            'trove-vertical-navigation-mode-side'                      : this.mode === 'side',
            'trove-vertical-navigation-opened'                         : this.opened,
            'trove-vertical-navigation-position-left'                  : this.position === 'left',
            'trove-vertical-navigation-position-right'                 : this.position === 'right'
        };
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
       
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
       
    }

    /**
     * After view init
     */
    ngAfterViewInit(): void
    {
      
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
       
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    }
