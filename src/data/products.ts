import type { Product } from '../types';
import vaporessoXros3Mini from '../assets/products/vaporesso-xros-3-mini-lilac-purple.png';
import oxvaXlimPro2Dna from '../assets/products/oxva-xlim-pro-2-dna-frost-titanium-blue.png';
import vox10000 from '../assets/products/vox-10000-fruit-crush.png';
import waka10000 from '../assets/products/waka-10000-mango-peach.png';
import pickMeMandarin from '../assets/products/pick-me-mandarin.png';
import blessStrawberryPomelo from '../assets/products/bless-strawberry-pomelo.png';

export const products: Product[] = [
  { id: 'vaporesso-xros-3-mini-lilac-purple', title: 'Vaporesso Xros 3 Mini — Lilac Purple', category: 'pod', availability: 'in_stock', image: vaporessoXros3Mini, manufacturer: 'Vaporesso' },
  { id: 'oxva-xlim-pro-2-dna-frost-titanium-blue', title: 'Oxva Xlim Pro 2 DNA — Frost Titanium Blue', category: 'pod', availability: 'in_stock', image: oxvaXlimPro2Dna, manufacturer: 'Oxva' },
  { id: 'vox-10000-fruit-crush', title: 'Vox 10000 — Фруктовый Crush', category: 'disposable', availability: 'in_stock', image: vox10000 },
  { id: 'waka-10000-mango-peach', title: 'Waka 10000 — Манго Персик', category: 'disposable', availability: 'in_stock', image: waka10000 },
  { id: 'pick-me-mandarin', title: 'Арома Pick Me — Мандарин', category: 'liquids', availability: 'in_stock', image: pickMeMandarin, manufacturer: 'Pick Me' },
  { id: 'bless-strawberry-pomelo', title: 'Арома Bless — Клубника Помело', category: 'liquids', availability: 'in_stock', image: blessStrawberryPomelo, manufacturer: 'Bless' },
];
