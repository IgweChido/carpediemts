type StatePanelProps = {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function StatePanel({ title, message, actionLabel, onAction }: StatePanelProps) {
  return (
    <div className="flex min-h-[360px] items-center justify-center rounded-[28px] border border-dashed border-brand/30 bg-brand/5 p-8 text-center shadow-panel">
      <div className="max-w-md space-y-4">
        <div className="inline-flex rounded-full bg-brand/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-brand-dark">
          Shop dashboard
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-ink">{title}</h2>
          <p className="text-sm leading-6 text-mist">{message}</p>
        </div>
        {actionLabel && onAction ? (
          <button
            type="button"
            onClick={onAction}
            className="inline-flex items-center justify-center rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
