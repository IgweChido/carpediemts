import { ChevronDownIcon, SearchIcon } from '../icons';

type FiltersBarProps = {
  disabled?: boolean;
};

function FilterButton({ label, wide = false }: { label: string; wide?: boolean }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-between gap-2 rounded-md border border-line bg-white px-4 py-3 text-sm text-mist shadow-sm transition hover:border-brand/30 hover:text-ink ${wide ? 'min-w-[190px]' : 'min-w-[140px]'}`}
    >
      <span>{label}</span>
      <ChevronDownIcon className="h-4 w-4" />
    </button>
  );
}

export function FiltersBar({ disabled }: FiltersBarProps) {
  return (
    <div className="flex flex-col gap-3 border-b border-line px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:px-6">
      <div className="flex flex-col gap-3 xl:flex-row">
        <label className="flex min-w-[220px] items-center gap-3 rounded-md border border-line bg-white px-4 py-3 text-sm shadow-sm">
          <SearchIcon className="h-4 w-4 text-mist" />
          <input
            disabled={disabled}
            placeholder="Search by job, Fab ID"
            className="w-full bg-transparent text-ink outline-none placeholder:text-slate-400 disabled:cursor-not-allowed"
          />
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <FilterButton label="2 June - 9 June" />
          <FilterButton label="FAB type" />
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <FilterButton label="Select sales person" wide />
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-line bg-white px-5 py-3 text-xs font-semibold text-ink shadow-sm transition hover:border-brand/30"
        >
          Export CSV
        </button>
      </div>
    </div>
  );
}
