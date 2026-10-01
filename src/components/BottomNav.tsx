import { NavLink, useLocation } from 'react-router-dom';
import { useLayoutEffect, useRef, useState } from 'react';
import Icon from './Icon';
const items = [['/', 'Главная', 'home'], ['/catalog', 'Каталог', 'grid'], ['/stores', 'Магазины', 'pin'], ['/favorites', 'Избранное', 'heart']];
export default function BottomNav() {
  const { pathname } = useLocation();
  const barRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });
  const activeIndex = Math.max(0, items.findIndex(([to]) => to !== '/' && pathname.startsWith(to)));
  useLayoutEffect(() => {
    const update = () => {
      const bar = barRef.current;
      const item = itemRefs.current[activeIndex];
      if (!bar || !item) return;
      const outer = bar.getBoundingClientRect();
      const inner = item.getBoundingClientRect();
      setIndicator({ left: inner.left - outer.left + 5, width: inner.width - 10, ready: true });
    };
    update();
    addEventListener('resize', update);
    return () => removeEventListener('resize', update);
  }, [activeIndex]);
  return (
    <nav className="bottomnav" ref={barRef} aria-label="Мобильная навигация">
      <span className={'bottomnav__indicator' + (indicator.ready ? ' is-ready' : '')} style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }} aria-hidden="true" />
      {items.map(([to, l, i], index) => <NavLink ref={node => { itemRefs.current[index] = node; }} key={to} to={to} end={to === '/'} className={index === activeIndex ? 'active' : ''}><Icon name={i} /><span>{l}</span></NavLink>)}
    </nav>
  );
}
