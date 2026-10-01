import { Link } from 'react-router-dom';
import CategoryGrid from '../components/CategoryGrid';
import StorePreview from '../components/StorePreview';
import PromoBanners from '../components/PromoBanners';
import VkFeed from '../components/VkFeed';
import { useReveal } from '../hooks/useReveal';
import storeInterior from '../assets/about/store-interior.jpg';
export default function Home() {
  useReveal();
  return <><PromoBanners /><CategoryGrid /><VkFeed /><section className="container story story--about" data-reveal><Link to="/about" className="story__visual"><img src={storeInterior} alt="Интерьер магазина 1730" width={1438} height={1093} /><span>Кто мы <b>→</b></span></Link></section><StorePreview /></>;
}
