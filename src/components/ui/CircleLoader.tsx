export function CircleLoader() {
  return (
    <div className="flex min-h-[260px] items-center justify-center">
      <span
        className="h-12 w-12 animate-spin rounded-full border-4 border-brand/30 border-t-brand"
        aria-label="Loading page"
        role="status"
      />
    </div>
  );
}
