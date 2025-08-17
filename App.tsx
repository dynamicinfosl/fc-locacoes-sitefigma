import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedFleet } from './components/FeaturedFleet';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FleetCatalog } from './components/FleetCatalog';
import { QuoteWizard } from './components/QuoteWizard';
import { ClientPortal } from './components/ClientPortal';
import { VehicleConsignment } from './components/VehicleConsignment';
import { AdminPanel } from './components/AdminPanel';

type PageType = 'home' | 'catalog' | 'quote' | 'client-portal' | 'consignment' | 'admin';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return <FleetCatalog />;
      case 'quote':
        return <QuoteWizard />;
      case 'client-portal':
        return <ClientPortal />;
      case 'consignment':
        return <VehicleConsignment />;
      case 'admin':
        return <AdminPanel />;
      default:
        return (
          <>
            <main>
              <Hero />
              <FeaturedFleet />
              <Testimonials />
            </main>
            <Footer />
          </>
        );
    }
  };

  // For demo purposes, add a navigation bar to switch between pages
  const DemoNavigation = () => (
    <div className="fixed top-4 right-4 z-50 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <h4 className="font-semibold text-fc-dark-gray mb-3 text-sm">Demo Navigation</h4>
      <div className="space-y-2">
        <button
          onClick={() => setCurrentPage('home')}
          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
            currentPage === 'home' 
              ? 'bg-fc-orange text-white' 
              : 'text-fc-dark-gray hover:bg-gray-100'
          }`}
        >
          🏠 Site Público
        </button>
        <button
          onClick={() => setCurrentPage('catalog')}
          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
            currentPage === 'catalog' 
              ? 'bg-fc-orange text-white' 
              : 'text-fc-dark-gray hover:bg-gray-100'
          }`}
        >
          🚛 Catálogo de Frota
        </button>
        <button
          onClick={() => setCurrentPage('quote')}
          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
            currentPage === 'quote' 
              ? 'bg-fc-orange text-white' 
              : 'text-fc-dark-gray hover:bg-gray-100'
          }`}
        >
          📋 Solicitar Orçamento
        </button>
        <button
          onClick={() => setCurrentPage('client-portal')}
          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
            currentPage === 'client-portal' 
              ? 'bg-fc-orange text-white' 
              : 'text-fc-dark-gray hover:bg-gray-100'
          }`}
        >
          👤 Portal do Cliente
        </button>
        <button
          onClick={() => setCurrentPage('consignment')}
          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
            currentPage === 'consignment' 
              ? 'bg-fc-orange text-white' 
              : 'text-fc-dark-gray hover:bg-gray-100'
          }`}
        >
          📤 Consignação
        </button>
        <button
          onClick={() => setCurrentPage('admin')}
          className={`block w-full text-left px-3 py-2 text-sm rounded transition-colors ${
            currentPage === 'admin' 
              ? 'bg-fc-orange text-white' 
              : 'text-fc-dark-gray hover:bg-gray-100'
          }`}
        >
          ⚙️ Painel Admin
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Show header only for public pages */}
      {!['client-portal', 'admin'].includes(currentPage) && (
        <Header currentPage={currentPage} />
      )}
      
      {renderPage()}
      
      {/* Demo navigation for testing */}
      <DemoNavigation />
    </div>
  );
}