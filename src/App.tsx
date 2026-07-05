import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Layout } from './components/shared/Layout';
import { Toaster } from './components/ui/sonner';

// Components (we will create these)
import { Onboarding } from './components/onboarding/Onboarding';
import { Dashboard } from './components/dashboard/Dashboard';
import { HealthPassport } from './components/health/HealthPassport';
import { HealthTimeline } from './components/health/HealthTimeline';
import { DocumentVault } from './components/health/DocumentVault';
import { HealthFund } from './components/savings/HealthFund';
import { MedicationManager } from './components/health/MedicationManager';
import { AppointmentManager } from './components/health/AppointmentManager';
import { SettingsPage } from './components/shared/SettingsPage';
import { HealthEducation } from './components/health/HealthEducation';
import { AIHealthReports } from './components/health/AIHealthReports';

const AppContent = () => {
  const { isOnboarded } = useApp();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!isOnboarded) {
    return <Onboarding />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'passport': return <HealthPassport />;
      case 'timeline': return <HealthTimeline />;
      case 'vault': return <DocumentVault />;
      case 'savings': return <HealthFund />;
      case 'meds': return <MedicationManager />;
      case 'appointments': return <AppointmentManager />;
      case 'education': return <HealthEducation />;
      case 'reports': return <AIHealthReports />;
      case 'settings': return <SettingsPage />;
      default: return <Dashboard />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
      <Toaster position="top-center" richColors />
    </AppProvider>
  );
}
export default App;
