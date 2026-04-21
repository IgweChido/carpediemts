import { Outlet } from 'react-router-dom';
import { StatePanel } from '../components/ui/StatePanel';
import { useShopDashboard } from '../hooks/useShopDashboard';
import type { DashboardState } from '../types';

const stateOptions: Array<{ value: DashboardState; label: string }> = [
  { value: 'ready', label: 'Preview data' },
  { value: 'loading', label: 'Loading' },
  { value: 'empty', label: 'Empty' },
  { value: 'error', label: 'Error' },
];

export default function ShopPage() {
  const { payload, state, refetch, setState } = useShopDashboard();

  return (
    <div className="">
      <section className="border-b border-[#DFDFDF] bg-white/80 px-6 py-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-[28px] font-semibold tracking-tight text-ink">Shop</h1>
            <p className="mt-2 text-sm text-mist">View shop status list and cutting processes</p>
          </div>
          {/* <div className="flex flex-wrap items-center gap-3">
            {stateOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setState(option.value)}
                className={`rounded-2xl px-4 py-2 text-sm font-semibold transition ${state === option.value ? 'bg-brand text-white' : 'border border-line bg-white text-mist hover:text-ink'}`}
              >
                {option.label}
              </button>
            ))}
            <button
              type="button"
              onClick={refetch}
              className="rounded-2xl border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-brand/30"
            >
              Reload mock data
            </button>
          </div> */}
        </div>
      </section>

      {state === 'loading' ? (
        <StatePanel
          title="Loading dashboard"
          message="Preparing the latest shop queue, job details, and scheduling data for the current production run."
        />
      ) : null}

      {state === 'empty' ? (
        <StatePanel
          title="No shop jobs available"
          message="There are currently no rows to show for the selected filters. Adjust your filters or reload the mock data to continue reviewing jobs."
          actionLabel="Reload dashboard"
          onAction={refetch}
        />
      ) : null}

      {state === 'error' ? (
        <StatePanel
          title="Unable to load the dashboard"
          message="A recoverable mock data error occurred while loading the shop interface. Retry the request to restore the job list and details panel."
          actionLabel="Try again"
          onAction={refetch}
        />
      ) : null}

      {state === 'ready' && payload ? (
        <Outlet
          context={{
            payload,
            state,
            refetch,
            setState,
          }}
        />
      ) : null}
    </div>
  );
}
