import Icon from './Icon';

export default function ScrollTop() {
  return <button className="scroll-top" aria-label="Наверх" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><Icon name="arrow" size={20} /></button>;
}
