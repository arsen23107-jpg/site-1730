import Icon from './Icon';
import bless from '../assets/vk/bless-constructor.jpg';
import relx from '../assets/vk/relx-12000.jpg';
import ykar from '../assets/vk/ykar-core.jpg';
import lostVape from '../assets/vk/lost-vape.jpg';

const posts = [
  ['30 сентября 2026', 'BLESS CONSTRUCTOR — НОВЫЙ УРОВЕНЬ ВКУСА 🧬✨\n\n🧬 ЧТО ДЕЛАЕТ…', bless, 'https://vk.ru/wall-212316241_1405'],
  ['29 сентября 2026', 'RELX 12000.\n\nЭто устройство оборудовано разъёмом для подзарядки Type-C и…', relx, 'https://vk.ru/wall-212316241_1403'],
  ['28 сентября 2026', 'Y.K.A.P. — базовая модель Core 🔥\nВыглядит стильно в любом месте и не…', ykar, 'https://vk.ru/wall-212316241_1401'],
  ['27 сентября 2026', 'Подчеркни свою индивидуальность с Lost Vape…', lostVape, 'https://vk.ru/wall-212316241_1400'],
];

export default function VkFeed() {
  return <section className="container vk-feed" data-reveal><div className="section-heading"><div><p className="section-label">Сообщество 1730</p><h2>Мы ВКонтакте</h2></div><a className="text-action" href="https://vk.ru/vape1730" target="_blank" rel="noreferrer">Все публикации <Icon name="arrow" size={17} /></a></div><div className="vk-feed__list">{posts.map(([date, text, image, href]) => <a key={href} className="vk-post" href={href} target="_blank" rel="noreferrer"><span className="vk-post__meta"><Icon name="vk" size={16} />{date}</span><p>{text}</p><img src={image} alt="" loading="lazy" /></a>)}</div></section>;
}
