import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';
import logo from '../assets/brand/logo-1730.png';
import { stores } from '../data/stores';
const nav = [['/catalog', 'Каталог'], ['/stores', 'Магазины'], ['/contacts', 'Контакты']];
export default function Header({ onSearch, onAuth }: { onSearch: () => void; onAuth: () => void }) {
  const [s, setS] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [phonesOpen, setPhonesOpen] = useState(false);
  const [allPhones, setAllPhones] = useState(false);
  const [city, setCity] = useState('Барнаул');
  const phoneRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const f = () => setS(scrollY > 24); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  useEffect(() => { const close = (e: MouseEvent) => { if (!phoneRef.current?.contains(e.target as Node)) setPhonesOpen(false); }; addEventListener('click', close); return () => removeEventListener('click', close); }, []);
  const cityStores = stores.filter(x => x.city === city);
  const visiblePhones = allPhones ? cityStores : cityStores.slice(0, 4);
  return (
    <header className={'header' + (s ? ' header--scrolled' : '') + (menu ? ' header--menu' : '')}>
      <div className="container header__in">
        <button className="header__menu iconbtn" aria-label="Открыть меню" aria-expanded={menu} onClick={() => setMenu(v => !v)}><Icon name={menu ? 'x' : 'menu'} /></button>
        <Link to="/" className="brand-logo" aria-label="1730 — на главную"><img src={logo} alt="1730" width={2172} height={724} /></Link>
        <nav className="header__nav" aria-label="Основная навигация">
          {nav.map(([to, l]) => <NavLink key={`${to}-${l}`} to={to} end={to === '/'} className="navlink">{l}</NavLink>)}
        </nav>
        <div className="header__desktop-search">
          <button className="header__city" onClick={() => setCityOpen(v => !v)}>{city} <Icon name="chevron" size={13} /></button>
          {cityOpen && <div className="header__city-menu"><button onClick={() => { setCity('Барнаул'); setCityOpen(false); }}>Барнаул</button><button onClick={() => { setCity('Новоалтайск'); setCityOpen(false); }}>Новоалтайск</button></div>}
          <button className="header__search-field" onClick={onSearch}>Поиск по каталогу <Icon name="search" size={19} /></button>
        </div>
        <div className="header__act">
          <div className="header__phones" ref={phoneRef} onMouseEnter={() => setPhonesOpen(true)}>
            <button className="header__phone" onClick={() => setPhonesOpen(v => !v)}><Icon name="phone" size={15} /> +7 (999) 323-60-70 <Icon name="chevron" size={12} /></button>
            {phonesOpen && <div className="header__phone-menu">{visiblePhones.map(store => <a key={store.id} href={'tel:' + store.phone.replace(/[^+\d]/g, '')}><b>{store.phone}</b><span>{store.address}</span></a>)}{cityStores.length > 4 && <button onClick={() => setAllPhones(v => !v)}>{allPhones ? 'Свернуть' : 'Развернуть все'}</button>}</div>}
          </div>
          <button className="header__login" onClick={onAuth}><Icon name="user" size={18} /><span>Войти</span></button>
          <Link className="iconbtn header__fav" aria-label="Избранное" to="/favorites"><Icon name="heart" /></Link>
        </div>
      </div>
      <div className="header__mobile-menu" aria-hidden={!menu}>
        <nav className="container" aria-label="Мобильное меню">
          <NavLink to="/catalog" onClick={() => setMenu(false)}>Каталог <Icon name="arrow" /></NavLink>
          <NavLink to="/stores" onClick={() => setMenu(false)}>Магазины <Icon name="arrow" /></NavLink>
          <NavLink to="/contacts" onClick={() => setMenu(false)}>Контакты <Icon name="arrow" /></NavLink>
          <Link to="/about" onClick={() => setMenu(false)}>Кто мы <Icon name="arrow" /></Link>
          <a href="https://vk.ru/vape1730" target="_blank" rel="noreferrer">Мы ВКонтакте <Icon name="arrow" /></a>
          <a href="https://t.me/+lL9we5w3V9xjMzNi" target="_blank" rel="noreferrer">Telegram <Icon name="arrow" /></a>
          <div className="header__mobile-meta"><button onClick={() => setCity(city === 'Барнаул' ? 'Новоалтайск' : 'Барнаул')}>Ваш город: {city}</button><a href="tel:+79993236070">+7 (999) 323-60-70</a><button onClick={onAuth}>Войти</button></div>
        </nav>
      </div>
    </header>
  );
}
