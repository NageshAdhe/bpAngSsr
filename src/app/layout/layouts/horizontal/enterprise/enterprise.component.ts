import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Navigation } from '../../../../core/navigation/navigation.types';
import { Router } from 'express';
import { Subject, takeUntil } from 'rxjs';
import { TroveNavigationService, TroveVerticalNavigationComponent } from '../../../../../@trove/components/navigation';
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
    private _troveNavigationService: TroveNavigationService
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
            ] 
            },
          {
              id      : 'apps',
              title   : 'Apps',
              type    : 'group',
              icon    : 'heroicons_outline:qrcode',
              children: [
                {
                    id   : 'apps.academy',
                    title: 'Academy',
                    type : 'basic',
                    icon : 'heroicons_outline:academic-cap',
                    link : '/apps/academy'
                },
                {
                    id      : 'apps.calendar',
                    title   : 'Calendar',
                    subtitle: '3 upcoming events',
                    type    : 'basic',
                    icon    : 'heroicons_outline:calendar',
                    link    : '/apps/calendar'
                },
                {
                    id   : 'apps.chat',
                    title: 'Chat',
                    type : 'basic',
                    icon : 'heroicons_outline:chat-alt',
                    link : '/apps/chat'
                },
                {
                    id   : 'apps.contacts',
                    title: 'Contacts',
                    type : 'basic',
                    icon : 'heroicons_outline:user-group',
                    link : '/apps/contacts'
                },              
                {
                    id      : 'apps.help-center',
                    title   : 'Help Center',
                    type    : 'collapsable',
                    icon    : 'heroicons_outline:support',
                    link    : '/apps/help-center',
                    children: [
                        {
                            id        : 'apps.help-center.home',
                            title     : 'Home',
                            type      : 'basic',
                            link      : '/apps/help-center',
                            exactMatch: true
                        },
                        {
                            id   : 'apps.help-center.faqs',
                            title: 'FAQs',
                            type : 'basic',
                            link : '/apps/help-center/faqs'
                        },
                        {
                            id   : 'apps.help-center.guides',
                            title: 'Guides',
                            type : 'basic',
                            link : '/apps/help-center/guides'
                        },
                        {
                            id   : 'apps.help-center.support',
                            title: 'Support',
                            type : 'basic',
                            link : '/apps/help-center/support'
                        }
                    ]
                },
                {
                    id   : 'apps.mailbox',
                    title: 'Mailbox',
                    type : 'basic',
                    icon : 'heroicons_outline:mail',
                    link : '/apps/mailbox',
                    badge: {
                        title  : '27',
                        classes: 'px-2 bg-pink-600 text-white rounded-full'
                    }
                }
            ]
            },
          {
              id      : 'pages',
              title   : 'Pages',
              type    : 'group',
              icon    : 'heroicons_outline:document-duplicate',
              children: [
                {
                    id   : 'pages.activities',
                    title: 'Activities',
                    type : 'basic',
                    icon : 'heroicons_outline:menu-alt-2',
                    link : '/pages/activities'
                },
                {
                    id      : 'pages.authentication',
                    title   : 'Authentication',
                    type    : 'collapsable',
                    icon    : 'heroicons_outline:lock-closed',
                    children: [
                        {
                            id      : 'pages.authentication.sign-in',
                            title   : 'Sign in',
                            type    : 'collapsable',
                            children: [
                                {
                                    id   : 'pages.authentication.sign-in.classic',
                                    title: 'Classic',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-in/classic'
                                },
                                {
                                    id   : 'pages.authentication.sign-in.modern',
                                    title: 'Modern',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-in/modern'
                                },
                                {
                                    id   : 'pages.authentication.sign-in.modern-reversed',
                                    title: 'Modern Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-in/modern-reversed'
                                },
                                {
                                    id   : 'pages.authentication.sign-in.split-screen',
                                    title: 'Split Screen',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-in/split-screen'
                                },
                                {
                                    id   : 'pages.authentication.sign-in.split-screen-reversed',
                                    title: 'Split Screen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-in/split-screen-reversed'
                                },
                                {
                                    id   : 'pages.authentication.sign-in.fullscreen',
                                    title: 'Fullscreen',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-in/fullscreen'
                                },
                                {
                                    id   : 'pages.authentication.sign-in.fullscreen-reversed',
                                    title: 'Fullscreen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-in/fullscreen-reversed'
                                }
                            ]
                        },
                        {
                            id      : 'pages.authentication.sign-up',
                            title   : 'Sign up',
                            type    : 'collapsable',
                            link    : '/pages/authentication/sign-up',
                            children: [
                                {
                                    id   : 'pages.authentication.sign-up.classic',
                                    title: 'Classic',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-up/classic'
                                },
                                {
                                    id   : 'pages.authentication.sign-up.modern',
                                    title: 'Modern',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-up/modern'
                                },
                                {
                                    id   : 'pages.authentication.sign-up.modern-reversed',
                                    title: 'Modern Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-up/modern-reversed'
                                },
                                {
                                    id   : 'pages.authentication.sign-up.split-screen',
                                    title: 'Split Screen',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-up/split-screen'
                                },
                                {
                                    id   : 'pages.authentication.sign-up.split-screen-reversed',
                                    title: 'Split Screen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-up/split-screen-reversed'
                                },
                                {
                                    id   : 'pages.authentication.sign-up.fullscreen',
                                    title: 'Fullscreen',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-up/fullscreen'
                                },
                                {
                                    id   : 'pages.authentication.sign-up.fullscreen-reversed',
                                    title: 'Fullscreen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-up/fullscreen-reversed'
                                }
                            ]
                        },
                        {
                            id      : 'pages.authentication.sign-out',
                            title   : 'Sign out',
                            type    : 'collapsable',
                            link    : '/pages/authentication/sign-out',
                            children: [
                                {
                                    id   : 'pages.authentication.sign-out.classic',
                                    title: 'Classic',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-out/classic'
                                },
                                {
                                    id   : 'pages.authentication.sign-out.modern',
                                    title: 'Modern',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-out/modern'
                                },
                                {
                                    id   : 'pages.authentication.sign-out.modern-reversed',
                                    title: 'Modern Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-out/modern-reversed'
                                },
                                {
                                    id   : 'pages.authentication.sign-out.split-screen',
                                    title: 'Split Screen',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-out/split-screen'
                                },
                                {
                                    id   : 'pages.authentication.sign-out.split-screen-reversed',
                                    title: 'Split Screen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-out/split-screen-reversed'
                                },
                                {
                                    id   : 'pages.authentication.sign-out.fullscreen',
                                    title: 'Fullscreen',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-out/fullscreen'
                                },
                                {
                                    id   : 'pages.authentication.sign-out.fullscreen-reversed',
                                    title: 'Fullscreen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/sign-out/fullscreen-reversed'
                                }
                            ]
                        },
                        {
                            id      : 'pages.authentication.forgot-password',
                            title   : 'Forgot password',
                            type    : 'collapsable',
                            link    : '/pages/authentication/forgot-password',
                            children: [
                                {
                                    id   : 'pages.authentication.forgot-password.classic',
                                    title: 'Classic',
                                    type : 'basic',
                                    link : '/pages/authentication/forgot-password/classic'
                                },
                                {
                                    id   : 'pages.authentication.forgot-password.modern',
                                    title: 'Modern',
                                    type : 'basic',
                                    link : '/pages/authentication/forgot-password/modern'
                                },
                                {
                                    id   : 'pages.authentication.forgot-password.modern-reversed',
                                    title: 'Modern Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/forgot-password/modern-reversed'
                                },
                                {
                                    id   : 'pages.authentication.forgot-password.split-screen',
                                    title: 'Split Screen',
                                    type : 'basic',
                                    link : '/pages/authentication/forgot-password/split-screen'
                                },
                                {
                                    id   : 'pages.authentication.forgot-password.split-screen-reversed',
                                    title: 'Split Screen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/forgot-password/split-screen-reversed'
                                },
                                {
                                    id   : 'pages.authentication.forgot-password.fullscreen',
                                    title: 'Fullscreen',
                                    type : 'basic',
                                    link : '/pages/authentication/forgot-password/fullscreen'
                                },
                                {
                                    id   : 'pages.authentication.forgot-password.fullscreen-reversed',
                                    title: 'Fullscreen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/forgot-password/fullscreen-reversed'
                                }
                            ]
                        },
                        {
                            id      : 'pages.authentication.reset-password',
                            title   : 'Reset password',
                            type    : 'collapsable',
                            link    : '/pages/authentication/reset-password',
                            children: [
                                {
                                    id   : 'pages.authentication.reset-password.classic',
                                    title: 'Classic',
                                    type : 'basic',
                                    link : '/pages/authentication/reset-password/classic'
                                },
                                {
                                    id   : 'pages.authentication.reset-password.modern',
                                    title: 'Modern',
                                    type : 'basic',
                                    link : '/pages/authentication/reset-password/modern'
                                },
                                {
                                    id   : 'pages.authentication.reset-password.modern-reversed',
                                    title: 'Modern Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/reset-password/modern-reversed'
                                },
                                {
                                    id   : 'pages.authentication.reset-password.split-screen',
                                    title: 'Split Screen',
                                    type : 'basic',
                                    link : '/pages/authentication/reset-password/split-screen'
                                },
                                {
                                    id   : 'pages.authentication.reset-password.split-screen-reversed',
                                    title: 'Split Screen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/reset-password/split-screen-reversed'
                                },
                                {
                                    id   : 'pages.authentication.reset-password.fullscreen',
                                    title: 'Fullscreen',
                                    type : 'basic',
                                    link : '/pages/authentication/reset-password/fullscreen'
                                },
                                {
                                    id   : 'pages.authentication.reset-password.fullscreen-reversed',
                                    title: 'Fullscreen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/reset-password/fullscreen-reversed'
                                }
                            ]
                        },
                        {
                            id      : 'pages.authentication.unlock-session',
                            title   : 'Unlock session',
                            type    : 'collapsable',
                            link    : '/pages/authentication/unlock-session',
                            children: [
                                {
                                    id   : 'pages.authentication.unlock-session.classic',
                                    title: 'Classic',
                                    type : 'basic',
                                    link : '/pages/authentication/unlock-session/classic'
                                },
                                {
                                    id   : 'pages.authentication.unlock-session.modern',
                                    title: 'Modern',
                                    type : 'basic',
                                    link : '/pages/authentication/unlock-session/modern'
                                },
                                {
                                    id   : 'pages.authentication.unlock-session.modern-reversed',
                                    title: 'Modern Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/unlock-session/modern-reversed'
                                },
                                {
                                    id   : 'pages.authentication.unlock-session.split-screen',
                                    title: 'Split Screen',
                                    type : 'basic',
                                    link : '/pages/authentication/unlock-session/split-screen'
                                },
                                {
                                    id   : 'pages.authentication.unlock-session.split-screen-reversed',
                                    title: 'Split Screen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/unlock-session/split-screen-reversed'
                                },
                                {
                                    id   : 'pages.authentication.unlock-session.fullscreen',
                                    title: 'Fullscreen',
                                    type : 'basic',
                                    link : '/pages/authentication/unlock-session/fullscreen'
                                },
                                {
                                    id   : 'pages.authentication.unlock-session.fullscreen-reversed',
                                    title: 'Fullscreen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/unlock-session/fullscreen-reversed'
                                }
                            ]
                        },
                        {
                            id      : 'pages.authentication.confirmation-required',
                            title   : 'Confirmation required',
                            type    : 'collapsable',
                            link    : '/pages/authentication/confirmation-required',
                            children: [
                                {
                                    id   : 'pages.authentication.confirmation-required.classic',
                                    title: 'Classic',
                                    type : 'basic',
                                    link : '/pages/authentication/confirmation-required/classic'
                                },
                                {
                                    id   : 'pages.authentication.confirmation-required.modern',
                                    title: 'Modern',
                                    type : 'basic',
                                    link : '/pages/authentication/confirmation-required/modern'
                                },
                                {
                                    id   : 'pages.authentication.confirmation-required.modern-reversed',
                                    title: 'Modern Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/confirmation-required/modern-reversed'
                                },
                                {
                                    id   : 'pages.authentication.confirmation-required.split-screen',
                                    title: 'Split Screen',
                                    type : 'basic',
                                    link : '/pages/authentication/confirmation-required/split-screen'
                                },
                                {
                                    id   : 'pages.authentication.confirmation-required.split-screen-reversed',
                                    title: 'Split Screen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/confirmation-required/split-screen-reversed'
                                },
                                {
                                    id   : 'pages.authentication.confirmation-required.fullscreen',
                                    title: 'Fullscreen',
                                    type : 'basic',
                                    link : '/pages/authentication/confirmation-required/fullscreen'
                                },
                                {
                                    id   : 'pages.authentication.confirmation-required.fullscreen-reversed',
                                    title: 'Fullscreen Reversed',
                                    type : 'basic',
                                    link : '/pages/authentication/confirmation-required/fullscreen-reversed'
                                }
                            ]
                        }
                    ]
                },
              ] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
          },
          {
              id      : 'user-interface',
              title   : 'UI',
              type    : 'group',
              icon    : 'heroicons_outline:collection',
              children: [
                {
                    id   : 'user-interface.material-components',
                    title: 'Material Components',
                    type : 'basic',
                    icon : 'heroicons_outline:chip',
                    link : '/ui/material-components'
                },
                {
                    id   : 'user-interface.trove-components',
                    title: 'Trove Components',
                    type : 'basic',
                    icon : 'heroicons_outline:chip',
                    link : '/ui/trove-components'
                },
              ] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
          },
          {
              id      : 'navigation-features',
              title   : 'Misc',
              type    : 'group',
              icon    : 'heroicons_outline:menu',
              children: [
                {
                    id   : 'pages.profile',
                    title: 'Profile',
                    type : 'basic',
                    icon : 'heroicons_outline:user-circle',
                    link : '/pages/profile'
                },
              ] // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
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
        const navigation = this._troveNavigationService.getComponent<TroveVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            // navigation.toggle();
        }
    }
}
