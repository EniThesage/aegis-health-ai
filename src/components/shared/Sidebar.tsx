import React from 'react';
import { Home, User, Activity, Folder, DollarSign, Settings, Book, BarChart2 } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navLinks = [
  { name: 'Dashboard', icon: Home, id: 'dashboard' },
  { name: 'Passport', icon: User, id: 'passport' },
  { name: 'Timeline', icon: Activity, id: 'timeline' },
  { name: 'Vault', icon: Folder, id: 'vault' },
  { name: 'Savings', icon: DollarSign, id: 'savings' },
  { name: 'Meds', icon: Folder, id: 'meds' }, 
  { name: 'Appointments', icon: Folder, id: 'appointments' },
  { name: 'Education', icon: Book, id: 'education' },
  { name: 'Reports', icon: BarChart2, id: 'reports' },
  { name: 'Settings', icon: Settings, id: 'settings' },
];

export const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  return (
    <aside className="hidden md:flex flex-col items-center bg-white dark:bg-gray-800 w-20 py-6">
      <div className="text-2xl font-bold text-green-500">CV</div>
      <nav className="flex flex-col items-center mt-10 space-y-6">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => setActiveTab(link.id)}
            className={`p-3 rounded-lg ${activeTab === link.id ? 'bg-green-500 text-white' : 'text-gray-500 dark:text-gray-300'}`}>
            <link.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
    </aside>
  );
};
