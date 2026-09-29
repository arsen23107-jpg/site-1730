import { useEffect, type ReactNode } from 'react';
import Icon from './Icon';
export default function Modal({ title, onClose, children, full }: { title: string; onClose: () => void; children: ReactNode; full?: boolean }) {
  useEffect(() => { const f = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); addEventListener('keydown', f); document.body.style.overflow = 'hidden'; return () => { removeEventListener('keydown', f); document.body.style.overflow = ''; }; }, [onClose]);
  return (
    <div className="modal" onMouseDown={e => e.target === e.currentTarget && onClose()}>
      <div className={'modal__box' + (full ? ' modal__box--full' : '')} role="dialog" aria-modal="true" aria-label={title}>
        <button className="iconbtn modal__x" aria-label="Закрыть" onClick={onClose}><Icon name="x" /></button>
        {children}
      </div>
    </div>
  );
}
