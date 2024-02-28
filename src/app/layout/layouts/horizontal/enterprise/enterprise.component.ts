import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navigation } from '../../../../core/navigation/navigation.types';
import { Router } from 'express';

@Component({
  selector: 'enterprise-layout',
  templateUrl: './enterprise.component.html',
  styleUrl: './enterprise.component.scss'
})
export class EnterpriseLayoutComponent {
  isScreenSmall!: boolean;
  navigation!: Navigation;

   /**
     * Constructor
     */
   constructor(
    // private _activatedRoute: ActivatedRoute,
    // private _router: Router
)
{
  this.isScreenSmall = false;
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
        // const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        // if ( navigation )
        // {
        //     // Toggle the opened status
        //     navigation.toggle();
        // }
    }
}
