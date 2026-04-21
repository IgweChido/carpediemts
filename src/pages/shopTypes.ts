import type { DashboardPayload, DashboardState } from '../types';

export type ShopOutletContext = {
  payload: DashboardPayload;
  state: DashboardState;
  refetch: () => void;
  setState: (nextState: DashboardState) => void;
};
