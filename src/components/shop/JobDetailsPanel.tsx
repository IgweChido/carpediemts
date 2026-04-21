import type { JobDetails } from '../../types';
import { FileIcon } from '../icons';
import profileImage from '../../icons/profile.png';

type JobDetailsPanelProps = {
  details: JobDetails;
  onSchedule: () => void;
};

const fileAccent = {
  dwg: 'text-brand-dark bg-brand/10',
  jpg: 'text-blue-600 bg-blue-100',
  pdf: 'text-red-500 bg-red-100',
} as const;

export function JobDetailsPanel({ details, onSchedule }: JobDetailsPanelProps) {
  return (
    <section className="grid gap-0 overflow-hidden  bg-white shadow-panel xl:grid-cols-[280px,minmax(0,1fr)]">
      <aside className=" bg-slate-50 px-6 py-7 ">
        <div className="space-y-10">
          <div>
            <h2 className="text-[20px] font-semibold tracking-tight text-ink">Job Details</h2>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-slate-400">Slab smith used?</p>
              <p className="text-base font-semibold text-ink">{details.slabSmithUsed ? 'Yes' : 'No'}</p>
            </div>
          </div>
          <div>
            <h3 className=" font-semibold text-ink">Drafting notes</h3>
            <div className="mt-6 space-y-6">
              {details.notes.map((note) => (
                <article key={note.id} className="flex gap-4">
                   <img src={profileImage} alt="User Avatar" className="h-9 w-9 rounded-full" />
                  <div className="space-y-2">
                    <p className="text-xs  text-ink">{note.message}</p>
                    <p className="text-xs text-slate-400">
                      {note.author} • {note.timestamp}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <div className="px-6 py-8 lg:px-8">
        <div className="border-b border-line pb-8">
          <h3 className=" font-semibold tracking-tight text-ink">{details.title}</h3>
          <p className="mt-2 text-sm text-ink">{details.subtitle}</p>
          <div className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-5">
            {details.fields.map((field) => (
              <div key={`${field.label}-${field.value}`}>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-400">{field.label}</p>
                <p className="mt-2  font-semibold text-ink">{field.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-[24px] border border-line p-4 lg:p-6">
          <h4 className="text-sm font-semibold text-ink">Uploaded files</h4>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {details.files.map((file) => (
              <article key={file.id} className="rounded-[20px] border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl ${fileAccent[file.type]}`}>
                  <FileIcon className="h-5 w-5" />
                </div>
                <p className="mt-6 truncate text-sm font-semibold text-ink">{file.name}</p>
                <p className="mt-1 text-xs text-slate-400">{file.size}</p>
                <button type="button" className="flex justify-end  w-full underline mt-6 text-sm font-semibold text-brand-dark transition hover:text-brand">
                  Open file
                </button>
              </article>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onSchedule}
            className="rounded-2xl bg-brand px-6 py-4 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Schedule for cutting
          </button>
        </div>
      </div>
    </section>
  );
}
