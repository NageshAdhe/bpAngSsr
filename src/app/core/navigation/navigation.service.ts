import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Navigation } from './navigation.types';

@Injectable({
    providedIn: 'root'
})
export class NavigationService
{
    private _navigation: ReplaySubject<Navigation> = new ReplaySubject<Navigation>(1);

    /**
     * Constructor
     */
    constructor(private _httpClient: HttpClient)
    {
        const test =  [
            {
                id      : 'dashboards',
                title   : 'Dashboards',
                type    : 'group',
                icon    : 'heroicons_outline:home',
                children: [] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
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
        ];
    //    this._navigation.next()
    
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for navigation
     */
    get navigation$(): Observable<Navigation>
    {
        return this._navigation.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get all navigation data
     */
    get(): Observable<Navigation>
    {
        return this._httpClient.get<Navigation>('api/common/navigation').pipe(
            tap((navigation) => {
                this._navigation.next(navigation);
            })
        );
    }
}
