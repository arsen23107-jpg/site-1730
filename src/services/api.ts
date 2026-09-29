import { categories } from '../data/categories';
import { products } from '../data/products';
import { stores } from '../data/stores';
import { contacts } from '../data/contacts';
import type { Category, Product, Store, Contacts } from '../types';
const wait = <T,>(v: T) => new Promise<T>(r => setTimeout(() => r(v), 250));
// Замените тела функций на fetch(...) — страницы менять не нужно.
export const api = {
  getCategories: (): Promise<Category[]> => wait(categories),
  getProducts: (cat?: string, q = ''): Promise<Product[]> =>
    wait(products.filter(p => (!cat || p.category === cat) && p.title.toLowerCase().includes(q.toLowerCase()))),
  getProduct: (id: string): Promise<Product | undefined> => wait(products.find(p => p.id === id)),
  getStores: (): Promise<Store[]> => wait(stores),
  getContacts: (): Promise<Contacts> => wait(contacts),
};
