import { TroveNavigationItem } from '../../../@trove/components/navigation';

export interface Navigation
{
    compact?: TroveNavigationItem[];
    default?: TroveNavigationItem[];
    futuristic?: TroveNavigationItem[];
    horizontal: TroveNavigationItem[];
}
