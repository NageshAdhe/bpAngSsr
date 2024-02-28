import { AnimationBuilder } from "@angular/animations";
import { BooleanInput } from "@angular/cdk/coercion";
import { ScrollStrategy, ScrollStrategyOptions } from "@angular/cdk/overlay";
import { Component, ViewEncapsulation, ChangeDetectionStrategy, OnChanges, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ChangeDetectorRef, ElementRef, Renderer2, HostBinding, HostListener, SimpleChanges } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { Router } from "express";
import { ReplaySubject, Subject, filter, takeUntil } from "rxjs";
import { FuseUtilsService } from "../../../services/utils/utils.service";
import { FuseNavigationService } from "../navigation.service";
import { FuseVerticalNavigationAppearance, FuseVerticalNavigationMode, FuseVerticalNavigationPosition, FuseNavigationItem } from "../navigation.types";


@Component({
    selector       : 'fuse-vertical-navigation',
    templateUrl    : './vertical.component.html',
    styleUrls      : ['./vertical.component.scss'],
    // animations     : fuseAnimations,
    encapsulation  : ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs       : 'fuseVerticalNavigation'
})
export class FuseVerticalNavigationComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    // static ngAcceptInputType_inner: BooleanInput;
    // static ngAcceptInputType_opened: BooleanInput;
    // static ngAcceptInputType_transparentOverlay: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() appearance: FuseVerticalNavigationAppearance = 'default';
    @Input() autoCollapse: boolean = true;
    @Input() inner: boolean = false;
    @Input() mode: FuseVerticalNavigationMode = 'side';
    @Input() opened: boolean = true;
    @Input() position: FuseVerticalNavigationPosition = 'left';
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
            'fuse-vertical-navigation-animations-enabled'             : this._animationsEnabled,
            [`fuse-vertical-navigation-appearance-${this.appearance}`]: true,
            'fuse-vertical-navigation-hover'                          : this._hovered,
            'fuse-vertical-navigation-inner'                          : this.inner,
            'fuse-vertical-navigation-mode-over'                      : this.mode === 'over',
            'fuse-vertical-navigation-mode-side'                      : this.mode === 'side',
            'fuse-vertical-navigation-opened'                         : this.opened,
            'fuse-vertical-navigation-position-left'                  : this.position === 'left',
            'fuse-vertical-navigation-position-right'                 : this.position === 'right'
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
