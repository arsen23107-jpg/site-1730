import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import { useAsync } from '../hooks/useAsync';
import Empty from '../components/Empty';
export default function ProductPage() {
  const { id = '' } = useParams();
  const { data, loading } = useAsync(() => api.getProduct(id), [id]);
  if (loading) return <div className="container section"><div className="skeleton" /></div>;
  if (!data) return <div className="container section"><Empty title="Товар не найден" text="Возможно, он больше недоступен." /></div>;
  return (
    <div className="container section pdp">
      <div className="pdp__gallery">{(data.gallery ?? (data.image ? [data.image] : [])).map((s, index) => <img key={s} src={s} alt={data.title} loading={index === 0 ? 'eager' : 'lazy'} />)}</div>
      <div>
        <h1 className="h1">{data.title}</h1>
        {data.price !== undefined ? <p className="pdp__price">{new Intl.NumberFormat('ru-RU').format(data.price)} ₽</p> : <p className="pdp__price pdp__price--pending">Цена уточняется</p>}
        <p className={'av av--' + data.availability}>{data.availabilityCount === undefined ? 'Наличие уточняется' : `Есть в наличии: ${data.availabilityCount}`}</p>
        {data.manufacturer && <p className="muted">{data.manufacturer}</p>}
        {data.description && <p>{data.description}</p>}
        {data.characteristics && <dl className="chars">{Object.entries(data.characteristics).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
      </div>
    </div>
  );
}
