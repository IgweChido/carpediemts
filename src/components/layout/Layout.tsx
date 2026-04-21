import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CircleLoader } from '../ui/CircleLoader';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

export function Layout() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <div className="relative flex h-screen bg-grid [background-size:28px_28px] overflow-hidden">
        <Sidebar mobileOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
        <div className="flex min-h-screen flex-1 flex-col">
          <Topbar onMenuToggle={() => setMobileNavOpen(true)} />
          <main className="flex-1 h-auto overflow-y-auto">
            <div className="mx-auto max-w-[1400px]">
              <Suspense fallback={<CircleLoader />}>
                <Outlet />
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
