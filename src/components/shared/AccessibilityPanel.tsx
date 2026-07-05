import React from 'react';
import { 
  Settings, 
  Type, 
  Eye, 
  Volume2, 
  MousePointer2,
  Moon,
  Sun
} from 'lucide-react';
import { motion } from 'framer-motion';

export const AccessibilityPanel: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold">Accessibility</h2>
        <p className="text-muted-foreground mt-1">Personalize your CareVault experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <section className="bg-card border border-border rounded-3xl p-6 space-y-6">
          <h3 className="font-bold flex items-center gap-2">
            <Type size={18} className="text-health-blue" />
            Display & Text
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Text Size</span>
                <span className="text-xs text-muted-foreground">Default (16px)</span>
              </div>
              <input type="range" className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-health-blue" />
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-border flex items-center justify-center">
                  <Eye size={16} />
                </div>
                <span className="text-sm font-medium">High Contrast</span>
              </div>
              <button className="w-10 h-6 bg-slate-200 dark:bg-slate-800 rounded-full relative transition-colors">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-3xl p-6 space-y-6">
          <h3 className="font-bold flex items-center gap-2">
            <Volume2 size={18} className="text-health-blue" />
            Audio & Voice
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-border flex items-center justify-center">
                  <Volume2 size={16} />
                </div>
                <span className="text-sm font-medium">Screen Reader Support</span>
              </div>
              <button className="w-10 h-6 bg-health-blue rounded-full relative transition-colors">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-border flex items-center justify-center">
                  <MousePointer2 size={16} />
                </div>
                <span className="text-sm font-medium">Voice Navigation</span>
              </div>
              <button className="w-10 h-6 bg-slate-200 dark:bg-slate-800 rounded-full relative transition-colors">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-3xl p-6 space-y-6 md:col-span-2">
          <h3 className="font-bold flex items-center gap-2">
            <Settings size={18} className="text-health-blue" />
            Language & Region
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['English', 'Nigerian Pidgin', 'Yoruba', 'Hausa', 'Igbo'].map((lang) => (
              <button 
                key={lang}
                className={`p-4 rounded-2xl border text-sm font-medium text-left transition-all ${
                  lang === 'English' 
                    ? 'border-health-blue bg-health-blue/5 text-health-blue' 
                    : 'border-border hover:border-health-blue/30'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
