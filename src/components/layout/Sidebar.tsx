import type { ComponentType } from 'react';
import { NavLink } from 'react-router-dom';
import {  GridIcon, JobsIcon, ProfileIcon, SettingsIcon, ShopIcon, UsersIcon } from '../icons';

type SidebarProps = {
  mobileOpen: boolean;
  onClose: () => void;
};

type SidebarItem = {
  label: string;
  icon: ComponentType<{ className?: string }>;
  href?: string;
  section?: string;
};

const items: SidebarItem[] = [
  { label: 'Dashboards', icon: GridIcon },
  { label: 'Employees', icon: UsersIcon, section: 'MENU' },
  { label: 'Department', icon: ProfileIcon },
  { label: 'Jobs', icon: JobsIcon },
  { label: 'Shop', icon: ShopIcon, href: '/shop' },
  { label: 'Settings', icon: SettingsIcon },
];

export function Sidebar({ mobileOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-slate-950/30 transition md:hidden ${mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
     
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[260px] flex-col bg-brand-dark  text-white  transition md:static md:w-[210px] md:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >

        <div className='h-[83px] w-full bg-[white]'>

      </div>

      <div className='px-4 py-6'>
        <nav className="">
          {items.map(({ label, icon: Icon, href, section }) => (
            <div key={label} className="">
              {section ? <p className="mb-[2px] mt-2.5  font-semibold uppercase tracking-[0.18em] text-white/55">{section}</p> : null}
              {href ? (
                <NavLink
                  to={href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex w-full items-center gap-3 rounded-lg p-3 text-left font-medium transition ${isActive ? 'bg-black/15 text-white' : 'text-white/80 hover:bg-white/10 hover:text-white'}`
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </NavLink>
              ) : (
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg p-3 text-left font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </button>
              )}
            </div>
          ))}
        </nav>
      </div>
         
       
      </aside>
    </>
  );
}
