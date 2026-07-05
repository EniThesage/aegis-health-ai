import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Settings, UserProfile } from '../types';

interface AppContextType {
  isOnboarded: boolean;
  completeOnboarding: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  userProfile: UserProfile | null;
  updateUserProfile: (profile: UserProfile) => void;
  settings: Settings | null;
  updateSettings: (settings: Settings) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isOnboarded, setIsOnboarded] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [settings, setSettings] = useState<Settings | null>(null);

  const completeOnboarding = () => setIsOnboarded(true);

  const toggleTheme = () => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      document.documentElement.classList.remove(prevTheme);
      document.documentElement.classList.add(newTheme);
      return newTheme;
    });
  };

  const updateUserProfile = (profile: UserProfile) => setUserProfile(profile);
  const updateSettings = (newSettings: Settings) => setSettings(newSettings);

  return (
    <AppContext.Provider value={{ isOnboarded, completeOnboarding, theme, toggleTheme, userProfile, updateUserProfile, settings, updateSettings }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
