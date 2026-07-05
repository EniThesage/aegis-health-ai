import React from 'react';
import { 
  QrCode, 
  Download, 
  Share2, 
  Info,
  ShieldCheck,
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';

export const EmergencyQR: React.FC = () => {
  return (
    <div className="max-w-md mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Emergency QR Code</h2>
        <p className="text-muted-foreground mt-2">
          In case of emergency, medics can scan this to see your vitals and contacts.
        </p>
      </div>

      <div className="bg-white p-8 rounded-[40px] shadow-2xl border border-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-red-500" />
        
        <div className="flex justify-center mb-8">
          <div className="relative p-4 bg-slate-50 rounded-3xl border-2 border-slate-100">
            {/* Using a placeholder QR code generator service */}
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CareVault-Emergency-User123" 
              alt="Emergency QR Code"
              className="w-48 h-48"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
              <QrCode size={100} />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-bold text-lg">Chukwudi Okafor</h3>
            <p className="text-sm text-red-600 font-medium">Blood Group: O+</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-2xl bg-slate-50 border border-border text-center">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Genotype</p>
              <p className="font-bold">AA</p>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 border border-border text-center">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Allergies</p>
              <p className="font-bold">Penicillin</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Emergency Contact</p>
              <p className="font-bold">0801 234 5678</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-border font-semibold hover:bg-slate-50 transition-colors">
          <Download size={20} />
          Save Image
        </button>
        <button className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-health-blue text-white font-semibold hover:bg-health-blue-dark transition-colors">
          <Share2 size={20} />
          Share
        </button>
      </div>

      <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs text-muted-foreground">
        <ShieldCheck size={16} className="shrink-0" />
        <p>
          Only essential emergency information is shared. Your full medical history remains private and secure.
        </p>
      </div>
    </div>
  );
};
