import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top"><span className="footer__kicker">1730 / Барнаул · Новоалтайск</span><div className="footer__big" aria-hidden="true">1730</div></div>
      <div className="container footer__grid">
        <div className="footer__brand"><Link to="/" className="logo">1730</Link><p>Каталог и наличие в магазинах сети.</p><a href="tel:+79993236070">+7 (999) 323-60-70</a></div>
        <div><h4>Навигация</h4><Link to="/catalog">Каталог</Link><Link to="/stores">Магазины</Link><Link to="/favorites">Избранное</Link></div>
        <div><h4>Покупателю</h4><Link to="/contacts">Контакты</Link><Link to="/contacts">Гарантия</Link><Link to="/contacts">Вопросы и помощь</Link></div>
        <div><h4>На связи</h4><a href="https://t.me/vapeshop1730" target="_blank" rel="noreferrer">Telegram</a><a href="https://vk.com" target="_blank" rel="noreferrer">ВКонтакте</a></div>
      </div>
      <div className="container footer__legal"><b>18+</b><p>Информация на сайте предназначена только для совершеннолетних. Дистанционная продажа и доставка никотиносодержащей продукции не осуществляются.</p><span>© 1730</span></div>
    </footer>
  );
}
