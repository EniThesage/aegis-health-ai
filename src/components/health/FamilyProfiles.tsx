import React from 'react';
import { 
  Plus, 
  User as UserIcon, 
  Heart, 
  Activity,
  ShieldAlert,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const profiles = [
  { id: '1', name: 'You', relationship: 'Self', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop', status: 'Healthy' },
  { id: '2', name: 'Chinelo Okafor', relationship: 'Mother', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop', status: 'Managed' },
  { id: '3', name: 'Obinna Okafor', relationship: 'Son', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop', status: 'Healthy' },
];

export const FamilyProfiles: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Family Profiles</h2>
          <p className="text-muted-foreground">Manage health records for your loved ones</p>
        </div>
        <button className="bg-health-blue text-white p-2 md:px-4 md:py-2 rounded-2xl flex items-center gap-2 font-medium hover:bg-health-blue-dark transition-all text-sm">
          <Plus size={18} />
          <span className="hidden md:inline">Add Member</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile, i) => (
          <motion.div
            key={profile.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-card border border-border rounded-3xl p-6 hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={profile.avatar} 
                alt={profile.name}
                className="w-16 h-16 rounded-2xl object-cover ring-4 ring-slate-50 dark:ring-slate-900"
              />
              <div>
                <h3 className="font-bold text-lg">{profile.name}</h3>
                <p className="text-sm text-muted-foreground">{profile.relationship}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-sm">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-health-blue" />
                  <span>Health Status</span>
                </div>
                <span className="font-medium text-green-600 dark:text-green-400">{profile.status}</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50 text-sm">
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-red-500" />
                  <span>Records Shared</span>
                </div>
                <span className="font-medium">All</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-health-blue text-sm font-semibold group-hover:translate-x-1 transition-transform">
              <span>View Records</span>
              <ChevronRight size={18} />
            </div>
          </motion.div>
        ))}

        <button className="border-2 border-dashed border-border rounded-3xl p-6 flex flex-col items-center justify-center gap-4 hover:border-health-blue/50 hover:bg-health-blue/5 transition-all text-muted-foreground hover:text-health-blue min-h-[220px]">
          <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
            <Plus size={24} />
          </div>
          <span className="font-medium">Add Family Member</span>
        </button>
      </div>

      <div className="bg-health-blue/5 border border-health-blue/20 rounded-3xl p-6 flex gap-4">
        <div className="w-12 h-12 rounded-2xl bg-health-blue/10 flex items-center justify-center text-health-blue shrink-0">
          <ShieldAlert size={24} />
        </div>
        <div>
          <h4 className="font-bold mb-1">Privacy First</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Family members must grant permission before you can view their medical records. 
            All data is encrypted and accessible only by authorized family managers.
          </p>
        </div>
      </div>
    </div>
  );
};
