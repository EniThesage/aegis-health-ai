import React from 'react';
import { Home, User, Activity, Folder, DollarSign } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navLinks = [
  { name: 'Dashboard', icon: Home, id: 'dashboard' },
  { name: 'Passport', icon: User, id: 'passport' },
  { name: 'Timeline', icon: Activity, id: 'timeline' },
  { name: 'Vault', icon: Folder, id: 'vault' },
  { name: 'Savings', icon: DollarSign, id: 'savings' },
];

export const BottomNav = ({ activeTab, setActiveTab }: BottomNavProps) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex justify-around py-2">
      {navLinks.map((link) => (
        <button
          key={link.id}
          onClick={() => setActiveTab(link.id)}
          className={`flex flex-col items-center justify-center w-full ${activeTab === link.id ? 'text-green-500' : 'text-gray-500 dark:text-gray-300'}`}>
          <link.icon className="w-6 h-6" />
          <span className="text-xs">{link.name}</span>
        </button>
      ))}
    </nav>
  );
};
