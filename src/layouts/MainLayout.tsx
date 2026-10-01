import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AgeGate from '../components/AgeGate';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Footer from '../components/Footer';
import SearchOverlay from '../components/SearchOverlay';
import ErrorBoundary from '../components/ErrorBoundary';
import AuthModal from '../components/AuthModal';
import PageControls from '../components/PageControls';
export default function MainLayout() {
  const [search, setSearch] = useState(false);
  const [auth, setAuth] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <AgeGate />
      <Header onSearch={() => setSearch(true)} onAuth={() => setAuth(true)} />
      <main key={pathname} className="page"><ErrorBoundary><Outlet /></ErrorBoundary></main>
      {pathname !== '/' && <PageControls />}
      <Footer />
      <BottomNav />
      {search && <SearchOverlay onClose={() => setSearch(false)} />}
      {auth && <AuthModal onClose={() => setAuth(false)} />}
    </>
  );
}
