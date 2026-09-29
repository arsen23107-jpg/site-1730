import { useState } from 'react';
import Modal from './Modal';
import Icon from './Icon';
import { api } from '../services/api';
import { useAsync } from '../hooks/useAsync';
import ProductCard from './ProductCard';
export default function SearchOverlay({ onClose }: { onClose: () => void }) {
  const [q, setQ] = useState('');
  const { data } = useAsync(() => (q.trim() ? api.getProducts(undefined, q) : Promise.resolve([])), [q]);
  return (
    <Modal title="Поиск" onClose={onClose} full>
      <label className="search"><Icon name="search" /><input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder="Поиск по каталогу" aria-label="Поиск по каталогу" /></label>
      <div className="search__res">
        {!q.trim() && <p className="muted">Начните вводить название товара</p>}
        {q.trim() && data && data.length === 0 && <p className="muted">Ничего не найдено по запросу «{q}»</p>}
        <div className="grid">{data?.map(p => <ProductCard key={p.id} product={p} />)}</div>
      </div>
    </Modal>
  );
}
