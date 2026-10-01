import { useEffect, useState } from 'react';
import Icon from './Icon';
import telegramWide from '../assets/banners/telegram-wide.jpg';
import telegramMobile from '../assets/banners/telegram-mobile.jpg';
import vkWide from '../assets/banners/vk-wide.jpg';
import vkMobile from '../assets/banners/vk-mobile.jpg';

const banners = [
  { name: 'Telegram 1730', href: 'https://t.me/+lL9we5w3V9xjMzNi', wide: telegramWide, mobile: telegramMobile },
  { name: 'Группа 1730 ВКонтакте', href: 'https://vk.ru/vape1730', wide: vkWide, mobile: vkMobile },
];

export default function PromoBanners() {
  const [active, setActive] = useState(0);
  useEffect(() => { const timer = window.setInterval(() => setActive(value => (value + 1) % banners.length), 5000); return () => window.clearInterval(timer); }, []);
  const change = (direction: number) => setActive(value => (value + direction + banners.length) % banners.length);
  const banner = banners[active];
  return <section className="promos" aria-label="Новости 1730"><a key={banner.name} className="promo soft-morph-content" href={banner.href} target="_blank" rel="noreferrer" aria-label={banner.name}><picture><source media="(max-width: 820px)" srcSet={banner.mobile} /><img src={banner.wide} alt="" /></picture></a><div className="promo__controls"><button aria-label="Предыдущий баннер" onClick={() => change(-1)}><Icon name="arrow" size={20} /></button><div className="promo__dots" aria-label="Выбор баннера">{banners.map((item, index) => <button key={item.name} className={index === active ? 'is-active' : ''} aria-label={`Баннер ${index + 1}`} aria-current={index === active} onClick={() => setActive(index)} />)}</div><button aria-label="Следующий баннер" onClick={() => change(1)}><Icon name="arrow" size={20} /></button></div></section>;
}
