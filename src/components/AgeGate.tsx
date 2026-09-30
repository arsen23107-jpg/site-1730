import { useState } from 'react';
import logo from '../assets/brand/logo-1730-small.png';
const KEY = '1730:age-confirmed';
export default function AgeGate() {
  const [open, setOpen] = useState(() => localStorage.getItem(KEY) !== 'yes');
  const [denied, setDenied] = useState(false);
  if (!open) return null;
  return (
    <div className="agegate" role="dialog" aria-modal="true" aria-labelledby="ag-t">
      <div className="agegate__glow" />
      <div className="agegate__box">
        <img className="agegate__logo" src={logo} alt="1730" width={2172} height={724} /><span className="agegate__label">Возрастное подтверждение</span>
        <div className="agegate__big" id="ag-t">18+</div>
        <p>{denied ? 'Доступ к информации на сайте ограничен для лиц младше 18 лет.' : 'Сайт содержит информацию о товарах, предназначенных только для совершеннолетних. Подтвердите свой возраст.'}</p>
        <div className="agegate__actions">
          <button className="btn btn--accent" autoFocus onClick={() => { localStorage.setItem(KEY, 'yes'); setOpen(false); }}>Мне есть 18 лет</button>
          <button className="btn btn--ghost" onClick={() => setDenied(true)}>Мне нет 18 лет</button>
        </div>
      </div>
    </div>
  );
}
