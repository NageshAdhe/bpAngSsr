import { IsActiveMatchOptions } from '@angular/router';

export interface TroveNavigationItem
{
    id?: string;
    title?: string;
    subtitle?: string;
    type:
        | 'aside'
        | 'basic'
        | 'collapsable'
        | 'divider'
        | 'group'
        | 'spacer';
    hidden?: (item: TroveNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    tooltip?: string;
    link?: string;
    externalLink?: boolean;
    target?:
        | '_blank'
        | '_self'
        | '_parent'
        | '_top'
        | string;
    exactMatch?: boolean;
    isActiveMatchOptions?: IsActiveMatchOptions;
    function?: (item: TroveNavigationItem) => void;
    classes?: {
        title?: string;
        subtitle?: string;
        icon?: string;
        wrapper?: string;
    };
    icon?: string;
    badge?: {
        title?: string;
        classes?: string;
    };
    children?: TroveNavigationItem[];
    meta?: any;
}

export type TroveVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'thin';

export type TroveVerticalNavigationMode =
    | 'over'
    | 'side';

export type TroveVerticalNavigationPosition =
    | 'left'
    | 'right';
