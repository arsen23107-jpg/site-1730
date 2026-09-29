import { useState } from 'react';
import Modal from './Modal';
type Mode = 'login' | 'register' | 'reset';
const T: Record<Mode, string> = { login: 'Вход', register: 'Регистрация', reset: 'Восстановление пароля' };
export default function AuthModal({ onClose }: { onClose: () => void }) {
  const [m, setM] = useState<Mode>('login');
  return (
    <Modal title={T[m]} onClose={onClose}>
      <h2 className="h2">{T[m]}</h2>
      <form className="form" onSubmit={e => e.preventDefault()}>
        {m === 'register' && <input className="field" placeholder="Имя" aria-label="Имя" autoComplete="name" />}
        <input className="field" type="email" placeholder="Email" aria-label="Email" autoComplete="email" />
        {m !== 'reset' && <input className="field" type="password" placeholder="Пароль" aria-label="Пароль" autoComplete={m === 'login' ? 'current-password' : 'new-password'} />}
        <button className="btn btn--accent" type="submit">{m === 'login' ? 'Войти' : m === 'register' ? 'Создать аккаунт' : 'Отправить ссылку'}</button>
      </form>
      <div className="form__links">
        {m !== 'login' && <button onClick={() => setM('login')}>Уже есть аккаунт</button>}
        {m === 'login' && <button onClick={() => setM('register')}>Регистрация</button>}
        {m === 'login' && <button onClick={() => setM('reset')}>Забыли пароль?</button>}
      </div>
    </Modal>
  );
}
