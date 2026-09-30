export default function MapEmbed({ className = '' }: { className?: string }) {
  return <iframe
    className={'yandex-map ' + className}
    title="Карта магазинов 1730"
    src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa5885fc8154420df729d134dc336b2a8e89ca7bb9fae5b64b4a69b9329039582&source=constructor"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />;
}
