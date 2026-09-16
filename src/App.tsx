import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar, PageType } from './components/Navbar';
import { Footer } from './components/Footer';
import { NameCheckerModal } from './components/NameCheckerModal';
import { PackageDetailModal } from './components/PackageDetailModal';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { LegalEntity } from './types';

// Page Views
import { BerandaView } from './components/pages/BerandaView';
import { PaketHargaView } from './components/pages/PaketHargaView';
import { SimulasiBiayaView } from './components/pages/SimulasiBiayaView';
import { RekomendasiUsahaView } from './components/pages/RekomendasiUsahaView';
import { LayananEkstraView } from './components/pages/LayananEkstraView';
import { AlurProsesView } from './components/pages/AlurProsesView';
import { SyaratView } from './components/pages/SyaratView';
import { FAQView } from './components/pages/FAQView';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>('beranda');
  const [selectedEntityId, setSelectedEntityId] = useState<string>('pt-mikro-kecil');
  const [nameCheckerOpen, setNameCheckerOpen] = useState(false);
  const [nameCheckerQuery, setNameCheckerQuery] = useState('');
  const [detailModalEntity, setDetailModalEntity] = useState<LegalEntity | null>(null);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectEntity = (entityId: string) => {
    setSelectedEntityId(entityId);
  };

  const handleCheckName = (name: string) => {
    setNameCheckerQuery(name);
    setNameCheckerOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white font-sans antialiased transition-colors duration-200">
      {/* Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenNameChecker={() => {
          setNameCheckerQuery('');
          setNameCheckerOpen(true);
        }}
      />

      {/* Dynamic View Rendering */}
      <main className="flex-grow">
        {currentPage === 'beranda' && (
          <BerandaView 
            onCheckName={handleCheckName}
            onSelectEntity={handleSelectEntity}
            onOpenNameCheckerModal={() => {
              setNameCheckerQuery('');
              setNameCheckerOpen(true);
            }}
            onOpenDetailModal={(entity) => setDetailModalEntity(entity)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'paket-harga' && (
          <PaketHargaView
            onSelectEntityForCalculator={(entityId) => {
              setSelectedEntityId(entityId);
              handleNavigate('simulasi-biaya');
            }}
            onOpenDetailModal={(entity) => setDetailModalEntity(entity)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'simulasi-biaya' && (
          <SimulasiBiayaView
            selectedEntityId={selectedEntityId}
            onSelectEntity={(id) => setSelectedEntityId(id)}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'rekomendasi-usaha' && (
          <RekomendasiUsahaView
            onSelectEntity={(entityId) => {
              setSelectedEntityId(entityId);
              handleNavigate('simulasi-biaya');
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'layanan-ekstra' && (
          <LayananEkstraView
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'alur-proses' && (
          <AlurProsesView
            onNavigate={handleNavigate}
            onOpenNameChecker={() => {
              setNameCheckerQuery('');
              setNameCheckerOpen(true);
            }}
          />
        )}

        {currentPage === 'syarat' && (
          <SyaratView
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'faq' && (
          <FAQView
            onNavigate={handleNavigate}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectEntity={handleSelectEntity}
        onOpenNameChecker={() => {
          setNameCheckerQuery('');
          setNameCheckerOpen(true);
        }}
        onNavigate={handleNavigate}
      />

      {/* Modals & Floating Utilities */}
      <NameCheckerModal
        isOpen={nameCheckerOpen}
        initialQuery={nameCheckerQuery}
        onClose={() => setNameCheckerOpen(false)}
      />

      <PackageDetailModal
        entity={detailModalEntity}
        isOpen={!!detailModalEntity}
        onClose={() => setDetailModalEntity(null)}
        onSelectForCalculator={(entityId) => {
          setSelectedEntityId(entityId);
          setDetailModalEntity(null);
          handleNavigate('simulasi-biaya');
        }}
      />

      <WhatsAppFloat />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

