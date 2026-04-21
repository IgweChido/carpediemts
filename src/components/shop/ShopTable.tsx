import type { JobRow } from '../../types';
import { MoreIcon } from '../icons';

type ShopTableProps = {
  rows: JobRow[];
  selectedRowId: string;
  onSelectRow: (rowId: string) => void;
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

function renderValue(value: string | number | null, formatCurrency = false) {
  if (value === null) {
    return '-';
  }

  if (typeof value === 'number' && formatCurrency) {
    return currencyFormatter.format(value);
  }

  return value;
}

export function ShopTable({ rows, selectedRowId, onSelectRow }: ShopTableProps) {
  return (
    <div className="overflow-hidden  bg-white shadow-panel">
      <div className=" bg-[#F6FFE7] px-4 py-4 text-sm  tracking-[0.16em] text-[#4B545D] lg:px-6">
        08 OCTOBER, 2025
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-line text-xs uppercase tracking-[0.12em] text-slate-400">
            <tr>
              <th className="px-4 py-4 lg:px-6">
                <input type="checkbox" className="h-4 w-4 rounded border-line text-brand focus:ring-brand" />
              </th>
              <th className="px-4 py-4">FAB Type</th>
              <th className="px-4 py-4">FAB ID</th>
              <th className="px-4 py-4">Job No</th>
              <th className="px-4 py-4">No. of Pieces</th>
              <th className="px-4 py-4">Total Sq Ft</th>
              <th className="px-4 py-4">WJ Time (Minutes)</th>
              <th className="px-4 py-4">Confirmed</th>
              <th className="px-4 py-4">Revenue</th>
              <th className="px-4 py-4">GP</th>
              <th className="px-4 py-4">FP Complete</th>
              <th className="px-4 py-4" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const isSelected = row.id === selectedRowId;
              return (
                <tr
                  key={row.id}
                  onClick={() => onSelectRow(row.id)}
                  className={`cursor-pointer border-b border-line/80 transition hover:bg-brand/5 ${isSelected ? 'bg-brand/5' : 'bg-white'}`}
                >
                  <td className="px-4 py-5 align-top lg:px-6">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onClick={(event) => event.stopPropagation()}
                      onChange={() => onSelectRow(row.id)}
                      className="h-4 w-4 rounded border-line text-brand focus:ring-brand"
                    />
                  </td>
                  <td className="px-4 py-5 font-medium text-ink">
                    <div className="flex items-center gap-2">
                      <span>{row.fabType}</span>
                      {row.fabLabel ? (
                        <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-dark">
                          {row.fabLabel}
                        </span>
                      ) : null}
                    </div>
                  </td>
                  <td className="px-4 py-5 text-mist">{row.fabId}</td>
                  <td className="px-4 py-5 text-ink">{row.jobNo}</td>
                  <td className="px-4 py-5 text-ink">{row.pieces}</td>
                  <td className="px-4 py-5 text-ink">{row.totalSqFt}</td>
                  <td className="px-4 py-5 text-ink">{renderValue(row.minutes)}</td>
                  <td className="px-4 py-5 text-ink">{renderValue(row.confirmed)}</td>
                  <td className="px-4 py-5 text-ink">{renderValue(row.revenue, true)}</td>
                  <td className="px-4 py-5 text-ink">{renderValue(row.gp)}</td>
                  <td className="px-4 py-5 text-ink">{renderValue(row.completeDate)}</td>
                  <td className="px-4 py-5 text-right text-mist">
                    <button type="button" className="rounded-xl p-2 transition hover:bg-slate-100 hover:text-ink">
                      <MoreIcon className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-3 px-4 py-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between lg:px-6">
        <div className="flex items-center gap-2">
          <span>Show</span>
          <button type="button" className="rounded-xl border border-line px-3 py-2 text-ink">10</button>
          <span>per page</span>
        </div>
        <div className="flex items-center gap-6 self-end sm:self-auto">
          <span>1-10 of 52</span>
          <div className="flex items-center gap-2 text-ink">
            <button type="button" className="rounded-xl px-2 py-1.5 hover:bg-slate-100">←</button>
            <button type="button" className="rounded-xl bg-slate-100 px-3 py-1.5 font-semibold">2</button>
            <button type="button" className="rounded-xl px-3 py-1.5 hover:bg-slate-100">3</button>
            <button type="button" className="rounded-xl px-3 py-1.5 hover:bg-slate-100">4</button>
            <button type="button" className="rounded-xl px-3 py-1.5 hover:bg-slate-100">5</button>
            <button type="button" className="rounded-xl px-2 py-1.5 hover:bg-slate-100">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
