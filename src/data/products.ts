import type { Product } from '../types';
import vaporessoXros3Mini from '../assets/products/vaporesso-xros-3-mini-lilac-purple.jpg';
import oxvaXlimPro2Dna from '../assets/products/oxva-xlim-pro-2-dna-frost-titanium-blue.jpg';
import vox10000 from '../assets/products/vox-10000-fruit-crush.jpg';
import waka10000 from '../assets/products/waka-10000-mango-peach.jpg';
import pickMeMandarin from '../assets/products/pick-me-mandarin.jpg';
import blessStrawberryPomelo from '../assets/products/bless-strawberry-pomelo.jpg';

export const products: Product[] = [
  { id: 'vaporesso-xros-3-mini-lilac-purple', title: 'Vaporesso Xros 3 Mini — Lilac Purple', category: 'pod', price: 1270, availability: 'low', availabilityCount: 1, image: vaporessoXros3Mini, manufacturer: 'Vaporesso', stockByStore: { 'barnaul-baltiyskaya-103': 1 }, characteristics: { 'Максимальная мощность': '23 Вт', 'Совместимые картриджи': 'Vaporesso Xros 0.6 / 0.7 / 0.8 / 1.0 / 1.2 Ом' } },
  { id: 'oxva-xlim-pro-2-dna-frost-titanium-blue', title: 'Oxva Xlim Pro 2 DNA — Frost Titanium Blue', category: 'pod', price: 4290, availability: 'in_stock', availabilityCount: 4, image: oxvaXlimPro2Dna, manufacturer: 'Oxva', stockByStore: { 'barnaul-baltiyskaya-103': 1, 'barnaul-lenina-102': 1, 'barnaul-stroiteley-117': 1, 'barnaul-belinskogo-12': 1 }, characteristics: { 'Аккумулятор': '1300 мА·ч', 'Максимальная мощность': '30 Вт', 'Порт зарядки': 'USB Type-C' } },
  { id: 'vox-10000-fruit-crush', title: 'Vdox XL 10000 — Фруктовый Crush', category: 'disposable', price: 1810, availability: 'in_stock', image: vox10000, manufacturer: 'Vdox', characteristics: { 'Количество затяжек': 'До 10 000', 'Объём жидкости': '15 мл', 'Аккумулятор': '500 мА·ч', 'Порт зарядки': 'USB Type-C' } },
  { id: 'waka-10000-mango-peach', title: 'Waka 10000 — Манго Персик', category: 'disposable', price: 1750, availability: 'low', availabilityCount: 2, image: waka10000, manufacturer: 'Waka', stockByStore: { 'barnaul-lenina-102': 1, 'barnaul-kosmonavtov-6v': 1 }, characteristics: { 'Количество затяжек': '10 000', 'Крепость': '10 мг', 'Холодок': '6' } },
  { id: 'pick-me-mandarin', title: 'Арома Pick Me — Мандарин', category: 'liquids', price: 690, availability: 'in_stock', image: pickMeMandarin, manufacturer: 'Pick Me', characteristics: { 'Объём ароматизатора': '14 мл', 'Целевой объём': '30 мл', 'Соотношение VG/PG': '50/50', 'Вкус': 'Мандарин' } },
  { id: 'bless-strawberry-pomelo', title: 'Арома Bless — Клубника Помело', category: 'liquids', availability: 'in_stock', availabilityCount: 16, image: blessStrawberryPomelo, badges: ['Новинка'], manufacturer: 'Bless', characteristics: { 'Объём': '14 мл', 'Вкус': 'Клубника, помело' } },
];
