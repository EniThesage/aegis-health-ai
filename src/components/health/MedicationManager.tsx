import React, { useState } from 'react';
import { Medication } from '../../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, Pill, Clock, Bell } from 'lucide-react';

const medications: Medication[] = [
  {
    id: '1',
    name: 'Paracetamol',
    dosage: '500mg',
    frequency: 'Twice daily',
    time: ['08:00', '20:00'],
    startDate: '2023-10-01',
    takenToday: true,
    reminders: true,
    status: 'active'
  },
  {
    id: '2',
    name: 'Lisinopril',
    dosage: '5mg',
    frequency: 'Once daily',
    time: ['09:00'],
    startDate: '2023-10-10',
    takenToday: false,
    reminders: true,
    status: 'active'
  },
  {
    id: '3',
    name: 'Ibuprofen',
    dosage: '250mg',
    frequency: 'As needed',
    time: [],
    startDate: '2023-09-15',
    takenToday: false,
    reminders: false,
    status: 'paused'
  }
];

export const MedicationManager = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Medication Manager</h2>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Add Medication
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medications.map((med) => (
          <Card key={med.id} className={`shadow-md ${med.status === 'paused' ? 'bg-gray-50 dark:bg-gray-800/50 opacity-60' : ''}`}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg font-bold">{med.name}</CardTitle>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${med.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {med.status}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{med.dosage} - {med.frequency}</p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>{med.time.join(', ')}</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex items-center">
                <Bell className={`w-5 h-5 mr-2 ${med.reminders ? 'text-green-500' : 'text-gray-400'}`} />
                <span className="text-sm">{med.reminders ? 'Reminders On' : 'Reminders Off'}</span>
              </div>
              <Button variant="outline" size="sm" disabled={med.status !== 'active'}>Mark as Taken</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
