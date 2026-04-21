import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

const ShopPage = lazy(() => import('./pages/ShopPage'));
const ShopTablePage = lazy(() => import('./pages/ShopTablePage'));
const JobDetailsPage = lazy(() => import('./pages/JobDetailsPage'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/shop" replace />} />
          <Route path="shop" element={<ShopPage />}>
            <Route index element={<ShopTablePage />} />
            <Route path=":jobId" element={<JobDetailsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/shop" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
