import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid';
import StorePreview from '../components/StorePreview';
import PromoBanners from '../components/PromoBanners';
import VkFeed from '../components/VkFeed';
import Icon from '../components/Icon';
import { useReveal } from '../hooks/useReveal';
import storeInterior from '../assets/about/store-interior.jpg';
const signals = [['Каталог', 'Актуальный ассортимент по категориям', 'grid'], ['Наличие', 'Проверяйте товар в магазинах сети', 'pin'], ['Избранное', 'Сохраняйте то, к чему хотите вернуться', 'heart']];
export default function Home() {
  useReveal();
  return <><PromoBanners /><section className="container signalbar" data-reveal>{signals.map(([title, text, icon]) => <Link to={title === 'Каталог' ? '/catalog' : title === 'Наличие' ? '/stores' : '/favorites'} key={title} className="signal"><Icon name={icon} size={22} /><div><b>{title}</b><span>{text}</span></div><Icon name="arrow" size={16} /></Link>)}</section><CategoryGrid /><VkFeed /><section className="container story" data-reveal><div className="story__copy"><p className="section-label">1730 / О сети</p><h2>Выбирайте спокойно.<br />Проверяйте <em>сразу.</em></h2><p>Мы собрали каталог, наличие и адреса магазинов в одном месте — чтобы нужное находилось без лишних шагов.</p><Link to="/about" className="text-action">Кто мы <Icon name="arrow" size={17} /></Link></div><div className="story__visual"><img src={storeInterior} alt="Интерьер магазина 1730" width={1438} height={1093} /></div></section><StorePreview /></>;
}
