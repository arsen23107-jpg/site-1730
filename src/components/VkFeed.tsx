import Icon from './Icon';
import xros from '../assets/products/vaporesso-xros-3-mini-lilac-purple.png';
import oxva from '../assets/products/oxva-xlim-pro-2-dna-frost-titanium-blue.png';
import bless from '../assets/products/bless-strawberry-pomelo.png';
import waka from '../assets/products/waka-10000-mango-peach.png';

const posts = [
  ['Новости 1730', 'Подборка актуальных устройств и ароматов уже в магазинах сети.', xros],
  ['Новинка недели', 'BLESS CONSTRUCTOR — новые вкусы в наличии.', bless],
  ['Устройства', 'OXVA: компактный формат, точная настройка и зарядка Type‑C.', oxva],
  ['В наличии', 'WAKA 10000 — популярные вкусы в магазинах 1730.', waka],
];
export default function VkFeed() {
  return <section className="container vk-feed" data-reveal><div className="section-heading"><div><p className="section-label">Сообщество 1730</p><h2>Мы ВКонтакте</h2></div><a className="text-action" href="https://vk.ru/vape1730" target="_blank" rel="noreferrer">Все публикации <Icon name="arrow" size={17} /></a></div><div className="vk-feed__list">{posts.map(([title, text, image]) => <a key={title} className="vk-post" href="https://vk.ru/vape1730" target="_blank" rel="noreferrer"><span className="vk-post__meta"><Icon name="vk" size={16} /> 1730 ВКонтакте</span><h3>{title}</h3><p>{text}</p><img src={image} alt="" /></a>)}</div></section>;
}
