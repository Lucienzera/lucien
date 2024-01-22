import SiddiqLogo from '../../assets/siddiq-logo.png';
import SidebarAccordionItem from './SidebarAccordionItem';
import { SidebarItem } from './SidebarItem';
import { SUPER_ADMIN_SIDEBAR_ITEMS } from './constants';

export function Sidebar() {
  const renderSideBar = () => (
    <div
      id="docs-sidebar"
      className="hs-overlay
        hs-overlay-open:translate-x-0
        -translate-x-full
        transition-all
        duration-300
        transform
        hidden
        fixed
        top-0
        start-0
        bottom-0
        z-[60]
        w-64
        border-e
        pt-7
        pb-10
        overflow-y-auto
        lg:block
        lg:translate-x-0
        lg:end-auto
        lg:bottom-0
        bg-gray-800
        border-gray-700"
    >
      <div className="px-6">
        <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Siddiq">
          <img src={SiddiqLogo} alt="Siddiq logo" />
        </a>
      </div>
      <nav className="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul className="space-y-1.5">
          {SUPER_ADMIN_SIDEBAR_ITEMS.map((item) => {
            if (item?.children && Boolean(item?.children.length)) {
              return (
                <SidebarAccordionItem
                  title={item.title}
                  iconComponent={item.iconComponent}
                  children={item.children}
                  isActive={item?.isActive}
                />
              );
            }

            return <SidebarItem title={item.title} iconComponent={item.iconComponent} isActive={item?.isActive} />;
          })}
        </ul>
      </nav>
    </div>
  );

  return <>{renderSideBar()}</>;
}
