import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import { useAsync } from '../hooks/useAsync';
import Empty from '../components/Empty';
import { stores } from '../data/stores';
import Icon from '../components/Icon';
import { useFavorites } from '../hooks/useFavorites';
const mapSearch = (city: string, address: string) => `https://yandex.ru/maps/?mode=search&text=${encodeURIComponent(`${city}, ${address}`)}`;
export default function ProductPage() {
  const { id = '' } = useParams();
  const { data, loading } = useAsync(() => api.getProduct(id), [id]);
  const { has, toggle } = useFavorites();
  if (loading) return <div className="container section"><div className="skeleton" /></div>;
  if (!data) return <div className="container section"><Empty title="Товар не найден" text="Возможно, он больше недоступен." /></div>;
  return (
    <div className="container section pdp">
      <div className="pdp__gallery">{(data.gallery ?? (data.image ? [data.image] : [])).map((s, index) => <img key={s} src={s} alt={data.title} loading={index === 0 ? 'eager' : 'lazy'} />)}</div>
      <div className="pdp__info">
        <div className="pdp__title-row"><h1 className="h1">{data.title}</h1><button className={'pdp__fav' + (has(data.id) ? ' is-on' : '')} aria-pressed={has(data.id)} aria-label={has(data.id) ? 'Убрать из избранного' : 'Добавить в избранное'} onClick={() => toggle(data.id)}><Icon name="heart" fill={has(data.id)} /></button></div>
        {data.price !== undefined ? <p className="pdp__price">{new Intl.NumberFormat('ru-RU').format(data.price)} ₽</p> : <p className="pdp__price pdp__price--pending">Цена уточняется</p>}
        <p className={'av av--' + data.availability}>{data.availabilityCount === undefined ? 'Наличие уточняется' : `Есть в наличии: ${data.availabilityCount}`}</p>
        {data.manufacturer && <p className="muted">{data.manufacturer}</p>}
        {data.description && <p>{data.description}</p>}
        {data.characteristics && <dl className="chars">{Object.entries(data.characteristics).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>}
        <section className="product-stock"><p className="section-label">Наличие в магазинах</p>{data.stockByStore ? <div className="product-stock__list">{Object.entries(data.stockByStore).map(([storeId, count]) => { const store = stores.find(item => item.id === storeId); return store && <a key={storeId} href={mapSearch(store.city, store.address)} target="_blank" rel="noreferrer"><span><b>{store.city}</b>{store.address}</span><strong>{count} шт.</strong></a>; })}</div> : <p className="muted">Количество по отдельным магазинам уточняется. Общий остаток указан выше.</p>}</section>
      </div>
    </div>
  );
}
