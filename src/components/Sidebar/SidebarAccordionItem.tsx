import ArrowDown from '../Icons/ArrowDown';
import ArrowUp from '../Icons/ArrowUp';
import { SidebarItemProps } from './SidebarItem';

type SidebarAccordionChildrenItem = Omit<SidebarItemProps, 'iconComponent' | 'isActive'>;

interface SidebarAccordionItemProps {
  title: string;
  iconComponent: JSX.Element;
  children: SidebarAccordionChildrenItem[];
  isActive?: boolean;
  href?: string;
  onClick?: VoidFunction;
}

const IN_ACTIVE_STYLE =
  ' hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none  dark:focus:ring-gray-600';
const ACTIVE_STYLE = 'hover:bg-gray-100 dark:bg-gray-900 dark:text-white';

const SidebarAccordionItem = (props: SidebarAccordionItemProps) => {
  const { title, isActive, children, iconComponent } = props;

  const renderChildrenItem = (item: SidebarAccordionChildrenItem) => (
    <li>
      <a
        className={`flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg ${isActive ? ACTIVE_STYLE : IN_ACTIVE_STYLE}`}
        href="#"
      >
        {item.title}
      </a>
    </li>
  );
  return (
    <li className="hs-accordion" id="projects-accordion">
      <button
        type="button"
        className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:hs-accordion-active:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      >
        {iconComponent}
        {title}
        <ArrowDown />
        <ArrowUp />
      </button>

      <div
        id="projects-accordion"
        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden"
      >
        <ul className="pt-2 ps-2">{children.map(renderChildrenItem)}</ul>
      </div>
    </li>
  );
};

export default SidebarAccordionItem;
