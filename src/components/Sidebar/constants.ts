import ClipboardTickIcon from '../Icons/ClipboardTickIcon';
import FeedbackIcon from '../Icons/FeedbackIcon';
import HomeIcon from '../Icons/HomeIcon';
import InstitutionIcon from '../Icons/InsitutionIcon';
import Megafone from '../Icons/Megafone';
import NotificationIcon from '../Icons/Notification';
import UsersIcon from '../Icons/UsersIcon';

export const SUPER_ADMIN_SIDEBAR_ITEMS = [
  {
    title: 'Dashboard',
    iconComponent: HomeIcon,
    isActive: true,
  },
  {
    title: 'Institutions',
    iconComponent: InstitutionIcon,
  },
  {
    title: 'Users',
    iconComponent: UsersIcon,
  },
  {
    title: 'Feedbacks',
    iconComponent: FeedbackIcon,
  },
  {
    title: 'Campaign',
    iconComponent: Megafone,
    children: [{ title: 'Ongoing' }, { title: 'Create campaign' }],
  },
  {
    title: 'Approvals',
    iconComponent: ClipboardTickIcon,
    children: [{ title: 'Sign up requests' }, { title: 'Campaign requests' }],
  },
  {
    title: 'Notifications',
    iconComponent: NotificationIcon,
    children: [{ title: 'Announcement' }],
  },
];
