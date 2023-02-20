export interface TreoNavigationItem
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
    hidden?: (item: TreoNavigationItem) => boolean;
    active?: boolean;
    disabled?: boolean;
    link?: string;
    externalLink?: boolean;
    exactMatch?: boolean;
    function?: (item: TreoNavigationItem) => void;
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
    children?: TreoNavigationItem[];
    meta?: any;
}

export type TreoVerticalNavigationAppearance =
    | 'default'
    | 'compact'
    | 'dense'
    | 'futuristic'
    | 'thin'
    | string;

export type TreoVerticalNavigationMode =
    | 'over'
    | 'side';

export type TreoVerticalNavigationPosition =
    | 'left'
    | 'right';
