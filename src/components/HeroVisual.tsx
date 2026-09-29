import { useRef } from 'react';
import { heroImage } from '../assets/hero';
export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: React.PointerEvent) => {
    const r = ref.current!.getBoundingClientRect();
    ref.current!.style.setProperty('--mx', String((e.clientX - r.left) / r.width - 0.5));
    ref.current!.style.setProperty('--my', String((e.clientY - r.top) / r.height - 0.5));
  };
  return (
    <div className="hero-visual" ref={ref} onPointerMove={move} aria-hidden={heroImage ? undefined : true}>
      <span className="hero-visual__orb hero-visual__orb--one" />
      <span className="hero-visual__orb hero-visual__orb--two" />
      <span className="hero-visual__line hero-visual__line--one" />
      <span className="hero-visual__line hero-visual__line--two" />
      {heroImage ? <img className="hv__img" src={heroImage} alt="" width={720} height={800} /> : (
        <div className="hero-device"><span className="hero-device__top" /><span className="hero-device__glass" /><span className="hero-device__body"><em>1730</em><i /></span></div>
      )}
    </div>
  );
}
