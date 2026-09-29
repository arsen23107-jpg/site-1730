import { NavLink } from 'react-router-dom';
import Icon from './Icon';
const items = [['/', 'Главная', 'home'], ['/catalog', 'Каталог', 'grid'], ['/stores', 'Магазины', 'pin'], ['/favorites', 'Избранное', 'heart']];
export default function BottomNav() {
  return (
    <nav className="bottomnav" aria-label="Мобильная навигация">
      {items.map(([to, l, i]) => <NavLink key={to} to={to} end={to === '/'}><Icon name={i} /><span>{l}</span></NavLink>)}
    </nav>
  );
}
