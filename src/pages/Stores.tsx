import { api } from '../services/api';
import { useAsync } from '../hooks/useAsync';
import Empty from '../components/Empty';
export default function Stores() {
  const { data, loading } = useAsync(() => api.getStores());
  return (
    <div className="container section">
      <h1 className="h1">Магазины</h1>
      <div className="stores">
        <div className="stores__list">
          {loading && <div className="skeleton" />}
          {data?.length === 0 && <Empty title="Адреса скоро появятся" text="Мы обновляем информацию о магазинах." />}
          {data?.map(s => (
            <article key={s.id} className="store">
              <h3>{s.city}</h3><p>{s.address}</p><p className="muted">{s.openingHours}</p>
              <a href={`tel:${s.phone}`}>{s.phone}</a>
            </article>
          ))}
        </div>
        <div className="map" aria-label="Карта магазинов"><span className="logo">1730</span><p className="muted">Карта магазинов</p></div>
      </div>
    </div>
  );
}
