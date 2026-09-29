import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Icon from './Icon';
const nav = [['/catalog', 'Каталог'], ['/stores', 'Магазины'], ['/contacts', 'Гид'], ['/contacts', 'Контакты']];
export default function Header({ onSearch, onProfile }: { onSearch: () => void; onProfile: () => void }) {
  const [s, setS] = useState(false);
  const [menu, setMenu] = useState(false);
  useEffect(() => { const f = () => setS(scrollY > 24); f(); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f); }, []);
  return (
    <header className={'header' + (s ? ' header--scrolled' : '') + (menu ? ' header--menu' : '')}>
      <div className="container header__in">
        <button className="header__menu iconbtn" aria-label="Открыть меню" aria-expanded={menu} onClick={() => setMenu(v => !v)}><Icon name={menu ? 'x' : 'menu'} /></button>
        <Link to="/" className="logo" aria-label="1730 — на главную">1730</Link>
        <nav className="header__nav" aria-label="Основная навигация">
          {nav.map(([to, l]) => <NavLink key={`${to}-${l}`} to={to} end={to === '/'} className="navlink">{l}</NavLink>)}
        </nav>
        <div className="header__act">
          <span className="header__city">Барнаул <Icon name="chevron" size={13} /></span>
          <button className="iconbtn" aria-label="Поиск" onClick={onSearch}><Icon name="search" /></button>
          <Link className="iconbtn header__fav" aria-label="Избранное" to="/favorites"><Icon name="heart" /></Link>
          <button className="iconbtn" aria-label="Профиль" onClick={onProfile}><Icon name="user" /></button>
        </div>
      </div>
      <div className="header__mobile-menu" aria-hidden={!menu}>
        <nav className="container" aria-label="Мобильное меню">
          <NavLink to="/catalog" onClick={() => setMenu(false)}>Каталог <Icon name="arrow" /></NavLink>
          <NavLink to="/stores" onClick={() => setMenu(false)}>Магазины <Icon name="arrow" /></NavLink>
          <NavLink to="/contacts" onClick={() => setMenu(false)}>Контакты <Icon name="arrow" /></NavLink>
          <button onClick={() => { setMenu(false); onProfile(); }}>Личный кабинет <Icon name="arrow" /></button>
          <div className="header__mobile-meta"><span>Ваш город: Барнаул</span><a href="tel:+79993236070">+7 (999) 323-60-70</a></div>
        </nav>
      </div>
    </header>
  );
}
