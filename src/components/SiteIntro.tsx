import { useCallback, useEffect, useRef, useState } from 'react';
import desktopVideo from '../assets/intro/desktop-intro.mp4';
import mobileVideo from '../assets/intro/mobile-intro.mp4';

const SESSION_KEY = '1730:intro-seen';
type Phase = 'visible' | 'leaving' | 'hidden';

export default function SiteIntro() {
  const forcePreview = new URLSearchParams(window.location.search).get('intro') === 'preview';
  const [phase, setPhase] = useState<Phase>(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return reducedMotion || (!forcePreview && sessionStorage.getItem(SESSION_KEY) === 'yes') ? 'hidden' : 'visible';
  });
  const [isMobile] = useState(() => window.matchMedia('(max-width: 820px)').matches);
  const videoRef = useRef<HTMLVideoElement>(null);
  const started = useRef(false);
  const finishTimer = useRef<number | null>(null);
  const fallbackTimer = useRef<number | null>(null);

  const finish = useCallback(() => {
    if (phase !== 'visible') return;
    if (finishTimer.current) window.clearTimeout(finishTimer.current);
    if (fallbackTimer.current) window.clearTimeout(fallbackTimer.current);
    setPhase('leaving');
    window.setTimeout(() => setPhase('hidden'), 250);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'visible') return;
    if (!forcePreview) sessionStorage.setItem(SESSION_KEY, 'yes');
    fallbackTimer.current = window.setTimeout(finish, 1600);
    return () => { if (fallbackTimer.current) window.clearTimeout(fallbackTimer.current); };
  }, [finish, forcePreview, phase]);

  const start = () => {
    if (started.current) return;
    started.current = true;
    if (fallbackTimer.current) window.clearTimeout(fallbackTimer.current);
    finishTimer.current = window.setTimeout(finish, 4000);
  };

  const canPlay = () => {
    videoRef.current?.play().catch(finish);
  };

  if (phase === 'hidden') return null;
  return <div className={'site-intro' + (phase === 'leaving' ? ' site-intro--leaving' : '')} aria-hidden="true">
    <video ref={videoRef} className="site-intro__video" src={isMobile ? mobileVideo : desktopVideo} autoPlay muted playsInline preload="auto" onCanPlay={canPlay} onPlaying={start} onEnded={finish} onError={finish} />
  </div>;
}
