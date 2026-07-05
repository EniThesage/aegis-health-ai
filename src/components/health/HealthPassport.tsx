import React, { useState } from 'react';
import QRCode from "react-qr-code";
import { useApp } from '../../context/AppContext';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Shield, QrCode, Mail, Phone, User } from 'lucide-react';

const HealthPassport = () => {
  const { userProfile } = useApp();
  const [showQR, setShowQR] = useState(false);

  const emergencyData = {
    name: userProfile?.name,
    bloodGroup: userProfile?.bloodGroup,
    allergies: userProfile?.allergies,
    emergencyContacts: userProfile?.emergencyContacts,
  };

  const qrValue = JSON.stringify(emergencyData);

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 shadow-lg border-none">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Digital Health Passport</h2>
          <Shield className="w-8 h-8 text-blue-500" />
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Personal Information</h3>
            <p><strong>Name:</strong> {userProfile?.name}</p>
            <p><strong>Date of Birth:</strong> {userProfile?.dob}</p>
            <p><strong>Gender:</strong> {userProfile?.gender}</p>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Medical Information</h3>
            <p><strong>Blood Group:</strong> {userProfile?.bloodGroup}</p>
            <p><strong>Genotype:</strong> {userProfile?.genotype}</p>
            <p><strong>Allergies:</strong> {Array.isArray(userProfile?.allergies) ? userProfile.allergies.join(', ') : userProfile?.allergies || 'None'}</p>
            <p><strong>Conditions:</strong> {Array.isArray(userProfile?.conditions) ? userProfile.conditions.join(', ') : userProfile?.conditions || 'None'}</p>
            <p><strong>Medications:</strong> {Array.isArray(userProfile?.medications) ? userProfile.medications.join(', ') : userProfile?.medications || 'None'}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Emergency Contacts</h3>
          {Array.isArray(userProfile?.emergencyContacts) && userProfile.emergencyContacts.map((contact, index) => (
            <div key={index} className="flex items-center space-x-4 mt-2">
              <User className="w-5 h-5" />
              <div>
                <p>{contact.name} ({contact.relationship})</p>
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <p>{contact.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <Button onClick={() => setShowQR(!showQR)}>
            <QrCode className="w-5 h-5 mr-2" />
            {showQR ? 'Hide' : 'Show'} Emergency QR
          </Button>
        </div>
        {showQR && (
          <div className="mt-6 flex flex-col items-center">
            <div style={{ background: 'white', padding: '16px' }}>
              <QRCode value={qrValue} size={256} />
            </div>
            <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-300">Scan this QR code in case of an emergency to view vital health information.</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export { HealthPassport };
