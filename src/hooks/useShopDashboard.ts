import { useEffect, useState } from 'react';
import { dashboardPayload } from '../data/mockDashboard';
import type { DashboardPayload, DashboardState } from '../types';

type UseShopDashboardResult = {
  payload: DashboardPayload | null;
  state: DashboardState;
  refetch: () => void;
  setState: (nextState: DashboardState) => void;
};

const LOAD_DELAY_MS = 900;

export function useShopDashboard(): UseShopDashboardResult {
  const [state, setState] = useState<DashboardState>('loading');
  const [payload, setPayload] = useState<DashboardPayload | null>(null);

  useEffect(() => {
    if (state !== 'loading') {
      if (state === 'ready') {
        setPayload(dashboardPayload);
      }
      if (state === 'empty' || state === 'error') {
        setPayload(null);
      }
      return;
    }

    const timer = window.setTimeout(() => {
      setPayload(dashboardPayload);
      setState('ready');
    }, LOAD_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [state]);

  const refetch = () => {
    setPayload(null);
    setState('loading');
  };

  return { payload, state, refetch, setState };
}
