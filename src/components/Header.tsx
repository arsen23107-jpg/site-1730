import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Icon from './Icon';
import logo from '../assets/brand/logo-1730-small.png';
import { stores } from '../data/stores';

const links = [['/catalog', 'Каталог'], ['/stores', 'Магазины'], ['/contacts', 'Контакты'], ['/about', 'О сети 1730']] as const;

export default function Header({ onSearch, onAuth }: { onSearch: () => void; onAuth: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [phonesOpen, setPhonesOpen] = useState(false);
  const [phoneSheet, setPhoneSheet] = useState(false);
  const [allPhones, setAllPhones] = useState(false);
  const [city, setCity] = useState('Барнаул');
  const phoneRef = useRef<HTMLDivElement>(null);
  const phoneCloseTimer = useRef<number | null>(null);
  const menuCloseTimer = useRef<number | null>(null);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const update = () => setScrolled(scrollY > 24);
    update(); addEventListener('scroll', update, { passive: true });
    return () => removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    const close = (event: MouseEvent) => { if (!phoneRef.current?.contains(event.target as Node)) setPhonesOpen(false); };
    addEventListener('click', close); return () => removeEventListener('click', close);
  }, []);

  const cityStores = stores.filter(store => store.city === city);
  const visiblePhones = allPhones ? cityStores : cityStores.slice(0, 4);
  const closeMenu = () => setMenu(false);
  const openPhones = () => {
    if (phoneCloseTimer.current) window.clearTimeout(phoneCloseTimer.current);
    setPhonesOpen(true);
  };
  const schedulePhonesClose = () => {
    phoneCloseTimer.current = window.setTimeout(() => setPhonesOpen(false), 240);
  };
  const goBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate('/');
  };
  const openMenu = () => {
    if (menuCloseTimer.current) window.clearTimeout(menuCloseTimer.current);
    setMenu(true);
  };
  const scheduleMenuClose = () => {
    menuCloseTimer.current = window.setTimeout(() => setMenu(false), 240);
  };

  return <>
    <header className={'header' + (scrolled ? ' header--scrolled' : '') + (menu ? ' header--menu' : '')}>
      <div className="container header__in">
        <div className="header__menu-wrap">
          {pathname !== '/' && <button className="header__back iconbtn" aria-label="Назад" onClick={goBack}><Icon name="arrow" /></button>}
          <button className="header__menu iconbtn" aria-label={menu ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={menu} onMouseEnter={openMenu} onMouseLeave={scheduleMenuClose} onClick={() => setMenu(value => !value)}><Icon name={menu ? 'x' : 'menu'} /></button>
          <div className="header__side-menu" aria-hidden={!menu} onMouseEnter={openMenu} onMouseLeave={scheduleMenuClose}>
            <nav className="container" aria-label="Меню сайта">
              {links.map(([to, label]) => <NavLink key={to} to={to} onClick={closeMenu}>{label}<Icon name="arrow" /></NavLink>)}
              <a href="https://vk.ru/vape1730" target="_blank" rel="noreferrer">Мы ВКонтакте<Icon name="arrow" /></a>
              <a href="https://t.me/+lL9we5w3V9xjMzNi" target="_blank" rel="noreferrer">Telegram<Icon name="arrow" /></a>
              <div className="header__menu-bottom"><button onClick={() => setCity(city === 'Барнаул' ? 'Новоалтайск' : 'Барнаул')}>Ваш город: {city}</button><button onClick={onAuth}>Личный кабинет</button></div>
            </nav>
          </div>
        </div>
        <Link to="/" className="brand-logo" aria-label="1730 — на главную"><img src={logo} alt="1730" width={2172} height={724} /></Link>
        <div className="header__desktop-search">
          <button className="header__city" onClick={() => setCityOpen(value => !value)}>{city} <Icon name="chevron" size={13} /></button>
          {cityOpen && <div className="header__city-menu"><button onClick={() => { setCity('Барнаул'); setCityOpen(false); }}>Барнаул</button><button onClick={() => { setCity('Новоалтайск'); setCityOpen(false); }}>Новоалтайск</button></div>}
          <button className="header__search-field" onClick={onSearch}>Поиск по каталогу <Icon name="search" size={19} /></button>
        </div>
        <div className="header__act">
          <div className="header__phones" ref={phoneRef} onMouseEnter={openPhones} onMouseLeave={schedulePhonesClose}>
            <button className="header__phone" onClick={() => setPhonesOpen(value => !value)}><Icon name="phone" size={15} /> +7 (999) 323-60-70 <Icon name="chevron" size={12} /></button>
            {phonesOpen && <div className="header__phone-menu">{visiblePhones.map(store => <a key={store.id} href={'tel:' + store.phone.replace(/[^+\d]/g, '')}><b>{store.phone}</b><span>{store.address}</span></a>)}{cityStores.length > 4 && <button onClick={() => setAllPhones(value => !value)}>{allPhones ? 'Свернуть' : 'Развернуть все'}</button>}</div>}
          </div>
          <button className="header__login" onClick={onAuth}><Icon name="user" size={18} /><span>Войти</span></button>
          <Link className="iconbtn header__fav" aria-label="Избранное" to="/favorites"><Icon name="heart" /></Link>
        </div>
        <div className="header__mobile-actions" aria-label="Быстрые действия">
          <button className="iconbtn" aria-label="Телефоны магазинов" onClick={() => setPhoneSheet(true)}><Icon name="phone" /></button>
          <button className="iconbtn" aria-label="Поиск" onClick={onSearch}><Icon name="search" /></button>
          <button className="iconbtn" aria-label="Личный кабинет" onClick={onAuth}><Icon name="user" /></button>
        </div>
      </div>
    </header>
    {phoneSheet && <section className="phone-sheet" role="dialog" aria-modal="true" aria-label="Телефоны магазинов">
      <div className="phone-sheet__head"><h2>Телефоны</h2><button className="iconbtn" onClick={() => setPhoneSheet(false)} aria-label="Закрыть"><Icon name="x" size={30} /></button></div>
      <div className="phone-sheet__list">{stores.map(store => <a key={store.id} href={'tel:' + store.phone.replace(/[^+\d]/g, '')}><b>{store.phone}</b><span>{store.address}</span></a>)}</div>
    </section>}
  </>;
}
