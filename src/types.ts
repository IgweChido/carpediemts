export type FabType = 'Standard' | 'Express';

export type FileAsset = {
  id: string;
  name: string;
  type: 'dwg' | 'jpg' | 'pdf';
  size: string;
};

export type DraftNote = {
  id: string;
  author: string;
  avatar: string;
  timestamp: string;
  message: string;
};

export type JobRow = {
  id: string;
  fabType: FabType;
  fabLabel?: 'New';
  fabId: string;
  jobNo: string;
  pieces: number;
  totalSqFt: number;
  minutes: number | null;
  confirmed: string | null;
  revenue: number | null;
  gp: number | null;
  completeDate: string | null;
};

export type JobDetails = {
  jobId: string;
  title: string;
  subtitle: string;
  slabSmithUsed: boolean;
  fields: Array<{ label: string; value: string }>;
  notes: DraftNote[];
  files: FileAsset[];
};

export type DashboardPayload = {
  dateLabel: string;
  totalCount: number;
  rows: JobRow[];
  selectedJobId: string;
  details: JobDetails;
  operators: string[];
  workstations: string[];
};

export type DashboardState = 'loading' | 'ready' | 'empty' | 'error';
