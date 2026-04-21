import { useMemo, useState } from 'react';
import { Link, useNavigate, useOutletContext, useParams } from 'react-router-dom';
import { JobDetailsPanel } from '../components/shop/JobDetailsPanel';
import { ScheduleModal } from '../components/shop/ScheduleModal';
import { ShopTable } from '../components/shop/ShopTable';
import type { ShopOutletContext } from './shopTypes';

export default function JobDetailsPage() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const { payload } = useOutletContext<ShopOutletContext>();
  const [modalOpen, setModalOpen] = useState(false);

  const selectedRowId = useMemo(() => {
    if (!jobId) {
      return payload.rows[0]?.id ?? '';
    }

    const found = payload.rows.find((row) => row.id === jobId);
    return found?.id ?? payload.rows[0]?.id ?? '';
  }, [jobId, payload.rows]);

  return (
    <div className="space-y-6">
      

      <JobDetailsPanel details={payload.details} onSchedule={() => setModalOpen(true)} />

      <ScheduleModal
        open={modalOpen}
        jobCode={payload.details.jobId}
        subtitle={payload.details.subtitle}
        operators={payload.operators}
        workstations={payload.workstations}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
