import { useNavigate, useOutletContext } from 'react-router-dom';
import { FiltersBar } from '../components/shop/FiltersBar';
import { ShopTable } from '../components/shop/ShopTable';
import type { ShopOutletContext } from './shopTypes';

export default function ShopTablePage() {
  const navigate = useNavigate();
  const { payload } = useOutletContext<ShopOutletContext>();

  return (
    <section className="m-5 overflow-hidden rounded-[12px] border border-[#E2E4ED] bg-white/80 shadow-panel backdrop-blur">
      <FiltersBar />
      <ShopTable
        rows={payload.rows}
        selectedRowId=""
        onSelectRow={(rowId) => {
          navigate(`/shop/${rowId}`);
        }}
      />
    </section>
  );
}
