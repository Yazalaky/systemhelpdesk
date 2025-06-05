import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import InventoryPage from './pages/InventoryPage';
import EquipmentDetailPage from './pages/EquipmentDetailPage';
import ActivitiesPage from './pages/ActivitiesPage';
import MaintenancePage from './pages/MaintenancePage';
import SitesPage from './pages/SitesPage';
import ReportsPage from './pages/ReportsPage'; // Import the new page

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100">
      <main className="flex-grow pb-20">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" replace />} />
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/inventario" element={<InventoryPage />} />
          <Route path="/inventario/:equipoId" element={<EquipmentDetailPage />} />
          <Route path="/actividades" element={<ActivitiesPage />} />
          <Route path="/mantenimientos" element={<MaintenancePage />} />
          <Route path="/configuracion" element={<SitesPage />} />
          <Route path="/informes" element={<ReportsPage />} /> 
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
};

export default App;