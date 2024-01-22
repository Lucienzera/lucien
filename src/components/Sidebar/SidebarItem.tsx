export interface SidebarItemProps {
  title: string;
  iconComponent: JSX.Element;
  isActive?: boolean;
  href?: string;
  onClick?: VoidFunction;
}

const IN_ACTIVE_STYLE = 'hover:text-slate-300 focus:outline-none focus:ring-1 focus:ring-gray-600';
const ACTIVE_STYLE = ' bg-gray-900 text-white hover:text-slate-300';

export function SidebarItem(props: SidebarItemProps) {
  const { title, iconComponent, isActive } = props;
  return (
    <li>
      <a
        className={`flex
            items-center
            gap-x-3.5
            py-2
            px-2.5
            text-sm
            rounded-lg
            text-slate-400 
            hover:bg-gray-900
            ${isActive ? ACTIVE_STYLE : IN_ACTIVE_STYLE}`}
        href="#"
      >
        {iconComponent}
        {title}
      </a>
    </li>
  );
}
