import { BellIcon, ChatIcon, SearchIcon } from '../icons';
import profileImage from '../../icons/profile.png';

type TopbarProps = {
  onMenuToggle: () => void;
};

export function Topbar({ onMenuToggle }: TopbarProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-brand/10 bg-white/90 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
        <button
          type="button"
          onClick={onMenuToggle}
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line text-ink md:hidden"
          aria-label="Open navigation"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
        <div className="ml-auto flex items-center gap-3.5">
          <div className="hidden min-w-[320px] items-center justify-between gap-3 rounded-[6px] border border-line bg-white px-1.5 py-2 sm:flex">
            <div className='gap-1.5 flex items-center w-full pl-1.5'>
            <SearchIcon className="h-4 min-w-4 text-mist" />
            <input
              className="w-full bg-transparent text-[13px] text-ink outline-none placeholder:text-slate-400"
              placeholder="Search by Cargo, Shipping.."
              aria-label="Search"
            />
            </div>
            
            <span className="rounded-[4px] flex gap-1  border border-line bg-slate-50 px-1.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <p>⌘</p>
              <p>K</p>
            </span>
          </div>
          <button type="button" className="flex flex-col h-10 w-10 items-center  justify-center text-mist transition hover:bg-slate-100 hover:text-ink">
            <BellIcon className="h-5 w-5" />
          </button>
          <button type="button" className="flex flex-col h-10 w-10 items-center  justify-center text-mist transition hover:bg-slate-100 hover:text-ink">
            <ChatIcon className="h-5 w-5" />
          </button>
          <button type="button" className="flex items-center rounded-full border border-[#0BC33F]">
            <img src={profileImage} alt="User Avatar" className="h-9 w-9 rounded-full" />
          </button>
        </div>
      </div>
    </header>
  );
}
