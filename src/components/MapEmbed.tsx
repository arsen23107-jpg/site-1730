import { useEffect, useRef, useState } from 'react';
export default function MapEmbed({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setReady(true); observer.disconnect(); } }, { rootMargin: '240px' }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect(); }, []);
  return <div ref={ref} className={'map-loader ' + className}>{ready ? <iframe
    className="yandex-map"
    title="Карта магазинов 1730"
    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa5885fc8154420df729d134dc336b2a8e89ca7bb9fae5b64b4a69b9329039582&source=constructor"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  /> : <span>Загружаем карту магазинов…</span>}</div>;
}
