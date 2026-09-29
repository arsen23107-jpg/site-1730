import type { ReactNode } from 'react';
export default function Empty({ title, text, children }: { title: string; text?: string; children?: ReactNode }) {
  return <div className="empty"><div className="empty__mark" aria-hidden="true">1730</div><h2 className="h2">{title}</h2>{text && <p className="muted">{text}</p>}{children}</div>;
}
