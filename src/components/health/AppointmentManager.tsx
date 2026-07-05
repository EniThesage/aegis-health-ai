import React, { useState } from 'react';
import { Appointment } from '../../types';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Plus, Calendar, Clock, MapPin } from 'lucide-react';

const appointments: Appointment[] = [
  {
    id: '1',
    provider: 'Dr. Amina Bello',
    specialty: 'Dentist',
    date: '2023-11-15',
    time: '10:00',
    location: 'Lagos General Hospital',
    status: 'upcoming',
  },
  {
    id: '2',
    provider: 'Dr. Johnathan',
    specialty: 'Cardiologist',
    date: '2023-10-20',
    time: '14:30',
    location: 'Nairobi Hospital',
    status: 'completed',
  },
  {
    id: '3',
    provider: 'Dr. Funmi Williams',
    specialty: 'General Physician',
    date: '2023-09-01',
    time: '11:00',
    location: 'General Hospital Ikeja',
    status: 'cancelled',
  },
];

export const AppointmentManager = () => {
  const [filter, setFilter] = useState<'upcoming' | 'completed'>('upcoming');

  const filteredAppointments = appointments.filter(a => a.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Appointments</h2>
        <Button>
          <Plus className="w-5 h-5 mr-2" />
          Book Appointment
        </Button>
      </div>

      <div className="flex space-x-2">
        <Button variant={filter === 'upcoming' ? 'default' : 'outline'} onClick={() => setFilter('upcoming')}>Upcoming</Button>
        <Button variant={filter === 'completed' ? 'default' : 'outline'} onClick={() => setFilter('completed')}>History</Button>
      </div>

      <div className="space-y-4">
        {filteredAppointments.map((appt) => (
          <Card key={appt.id} className="p-4">
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">{appt.provider}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{appt.specialty}</p>
              </div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${appt.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : appt.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {appt.status}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {new Date(appt.date).toLocaleDateString()}</div>
              <div className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {appt.time}</div>
              <div className="flex items-center col-span-2"><MapPin className="w-4 h-4 mr-2" /> {appt.location}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
