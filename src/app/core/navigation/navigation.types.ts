import { FuseNavigationItem } from '../../../@trove/components/navigation';

export interface Navigation
{
    compact?: FuseNavigationItem[];
    default?: FuseNavigationItem[];
    futuristic?: FuseNavigationItem[];
    horizontal: FuseNavigationItem[];
}
