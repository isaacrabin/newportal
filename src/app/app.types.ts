import { TreoNavigationItem } from '@treo/components/navigation';
import { Message } from 'app/layout/common/messages/messages.types';
import { Notification } from 'app/layout/common/notifications/notifications.types';
import { Shortcut } from 'app/layout/common/shortcuts/shortcuts.types';
import { Subscriber } from './core/user/subscriber.model';

export interface InitialData
{
    messages: Message[];
    navigation: {
        compact: TreoNavigationItem[],
        default: TreoNavigationItem[],
        futuristic: TreoNavigationItem[],
        horizontal: TreoNavigationItem[],
        tubi_admin: TreoNavigationItem[],
        school_admin: TreoNavigationItem[]
    };
    notifications: Notification[];
    shortcuts: Shortcut[];
    user: Subscriber;
}
