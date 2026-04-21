import { useState } from 'react';
import type { FormEvent } from 'react';
import { CalendarIcon, ChevronDownIcon, CloseIcon } from '../icons';

type ScheduleModalProps = {
  open: boolean;
  jobCode: string;
  subtitle: string;
  operators: string[];
  workstations: string[];
  onClose: () => void;
};

export function ScheduleModal({ open, jobCode, subtitle, operators, workstations, onClose }: ScheduleModalProps) {
  const [selectedOperator] = useState(operators[0] ?? '');
  const [selectedWorkstation] = useState(workstations[0] ?? '');

  if (!open) {
    return null;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[520px] overflow-hidden rounded-[28px] bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-[18px]">
          <div>
            <p className="text-sm font-semibold text-ink">Schedule cutting</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-xl p-2 text-mist transition hover:bg-slate-100 hover:text-ink">
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6">
          <div className=''>
            <h3 className="font-semibold text-ink">{jobCode}</h3>
            <p className="mt-1 text-sm text-ink">{subtitle}</p>
          </div>
          <div className='flex flex-col gap-5'>
 <div className="grid gap-4 sm:grid-cols-2 ">
            <label className="space-y-2 text-sm font-medium text-slate-500">
              <span>Select workstation</span>
              <div className="flex items-center justify-between rounded-[4px] border border-line px-4 py-3 text-ink">
                <span>{selectedWorkstation}</span>
                <ChevronDownIcon className="h-4 w-4 text-mist" />
              </div>
            </label>
            <label className="space-y-2 text-sm font-medium text-slate-500">
              <span>Hours scheduled</span>
              <input
                type="text"
                placeholder="Enter hour"
                className="w-full rounded-[4px] border border-line px-4 py-3 text-ink outline-none transition focus:border-brand"
              />
            </label>
          </div>
          <label className="space-y-2 text-sm font-medium text-slate-500">
            <span>Schedule date</span>
            <div className="flex items-center gap-3 rounded-[4px] border border-line px-4 py-3">
              <input
                type="text"
                placeholder="Select date"
                className="w-full text-ink outline-none placeholder:text-slate-400"
              />
              <CalendarIcon className="h-5 w-5 text-mist" />
            </div>
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-500">
            <span>Assigned operator</span>
            <div className="flex items-center justify-between rounded-[4px] border border-line bg-slate-50 px-4 py-3 text-ink">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ead8c0,#a7b7ad)] text-[11px] font-bold text-slate-700">
                  MR
                </div>
                <span className="font-semibold">{selectedOperator}</span>
              </div>
              <ChevronDownIcon className="h-4 w-4 text-mist" />
            </div>
          </label>
          </div>
         
          <div className="flex justify-end gap-3 pt-8">
            <button
              type="button"
              onClick={onClose}
              className="rounded-[4px] border border-line px-6 py-3 text-sm font-semibold text-mist transition hover:bg-slate-50 hover:text-ink"
            >
              Cancel
            </button>
            <button type="submit" className="rounded-[4px] bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
              Schedule for cutting
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
