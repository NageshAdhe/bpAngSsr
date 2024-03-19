import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navigation } from '../../../../core/navigation/navigation.types';
import { Router } from 'express';
import { Subject, takeUntil } from 'rxjs';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '../../../../../@trove/components/navigation';
import { NavigationService } from '../../../../core/navigation/navigation.service';

@Component({
  selector: 'enterprise-layout',
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.scss'
})
export class EnterpriseLayoutComponent {
  isScreenSmall!: boolean;
  navigation!: Navigation;  

  private _unsubscribeAll: Subject<any> = new Subject<any>();

   /**
     * Constructor
     */
   constructor(
    private _activatedRoute: ActivatedRoute,
    // private _router: Router,
    private _navigationService: NavigationService,
    private _fuseNavigationService: FuseNavigationService
)
{
  this.isScreenSmall = false;
}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {

      this.navigation = {
        horizontal : [
          {
              id      : 'dashboards',
              title   : 'Dashboards',
              type    : 'group',
              icon    : 'heroicons_outline:home',
              children: [
                {
                    id   : 'dashboards.project',
                    title: 'Project',
                    type : 'basic',
                    icon : 'heroicons_outline:clipboard-check',
                    link : '/dashboards/project'
                }
            ] 
            },
          {
              id      : 'apps',
              title   : 'Apps',
              type    : 'group',
              icon    : 'heroicons_outline:qrcode',
              children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
          },
          {
              id      : 'pages',
              title   : 'Pages',
              type    : 'group',
              icon    : 'heroicons_outline:document-duplicate',
              children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
          },
          {
              id      : 'user-interface',
              title   : 'UI',
              type    : 'group',
              icon    : 'heroicons_outline:collection',
              children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
          },
          {
              id      : 'navigation-features',
              title   : 'Misc',
              type    : 'group',
              icon    : 'heroicons_outline:menu',
              children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
          }
      ],
      default:  [
        {
            id      : 'dashboards',
            title   : 'Dashboards',
            subtitle: 'Unique dashboard designs',
            type    : 'group',
            icon    : 'heroicons_outline:home',
            children: [
                {
                    id   : 'dashboards.project',
                    title: 'Project',
                    type : 'basic',
                    icon : 'heroicons_outline:clipboard-check',
                    link : '/dashboards/project'
                },
                {
                    id   : 'dashboards.analytics',
                    title: 'Analytics',
                    type : 'basic',
                    icon : 'heroicons_outline:chart-pie',
                    link : '/dashboards/analytics'
                },
                {
                    id   : 'dashboards.finance',
                    title: 'Finance',
                    type : 'basic',
                    icon : 'heroicons_outline:cash',
                    link : '/dashboards/finance'
                },
                {
                    id   : 'dashboards.crypto',
                    title: 'Crypto',
                    type : 'basic',
                    icon : 'heroicons_outline:currency-dollar',
                    link : '/dashboards/crypto'
                }
            ]
        }
    ]
      }
     
        // Subscribe to navigation data
        // this._navigationService.navigation$
        //     .pipe(takeUntil(this._unsubscribeAll))
        //     .subscribe((navigation: Navigation) => {
        //         this.navigation = navigation;
        //     });  
    }
    
    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(true); 
        this._unsubscribeAll.complete();
    }

 // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle navigation
     *
     * @param name
     */
    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            // navigation.toggle();
        }
    }
}
