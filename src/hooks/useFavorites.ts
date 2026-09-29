import { useCallback, useEffect, useState } from 'react';
const KEY = '1730:favorites';
const read = (): string[] => { try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch { return []; } };
export function useFavorites() {
  const [ids, setIds] = useState<string[]>(read);
  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(ids)); }, [ids]);
  const toggle = useCallback((id: string) => setIds(p => p.includes(id) ? p.filter(x => x !== id) : [...p, id]), []);
  return { ids, toggle, has: (id: string) => ids.includes(id) };
}
