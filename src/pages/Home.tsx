import { Link } from 'react-router-dom';
import HeroVisual from '../components/HeroVisual';
import CategoryGrid from '../components/CategoryGrid';
import StorePreview from '../components/StorePreview';
import Icon from '../components/Icon';
import { useReveal } from '../hooks/useReveal';
const signals = [['Каталог', 'Актуальный ассортимент по категориям', 'grid'], ['Наличие', 'Проверяйте товар в магазинах сети', 'pin'], ['Избранное', 'Сохраняйте то, к чему хотите вернуться', 'heart']];
export default function Home() {
  useReveal();
  return <><section className="hero"><div className="hero__texture" /><div className="container hero__in"><div className="hero__copy"><p className="eyebrow"><span /> Сеть магазинов</p><h1>Найти своё.<br /><em>Рядом.</em></h1><p className="hero__lead">Каталог вейпинга, кальянов и сопутствующих товаров с наличием в магазинах 1730.</p><div className="hero__actions"><Link to="/catalog" className="btn btn--accent">Открыть каталог <Icon name="arrow" size={18} /></Link><Link to="/stores" className="text-action">Найти магазин <Icon name="arrow" size={17} /></Link></div></div><HeroVisual /><div className="hero__index" aria-hidden="true"><b>01</b><span /> 03</div></div></section><section className="container signalbar" data-reveal>{signals.map(([title, text, icon]) => <Link to={title === 'Каталог' ? '/catalog' : title === 'Наличие' ? '/stores' : '/favorites'} key={title} className="signal"><Icon name={icon} size={22} /><div><b>{title}</b><span>{text}</span></div><Icon name="arrow" size={16} /></Link>)}</section><CategoryGrid /><section className="container story" data-reveal><div className="story__copy"><p className="section-label">1730 / О сети</p><h2>Выбирайте спокойно.<br />Проверяйте <em>сразу.</em></h2><p>Мы собрали каталог, наличие и адреса магазинов в одном месте — чтобы нужное находилось без лишних шагов.</p><Link to="/contacts" className="text-action">О компании <Icon name="arrow" size={17} /></Link></div><div className="story__visual" aria-hidden="true"><span className="story__frame" /><span className="story__light" /><b>1730</b><p>Всё важное —<br />в одном ритме.</p></div></section><StorePreview /></>;
}
