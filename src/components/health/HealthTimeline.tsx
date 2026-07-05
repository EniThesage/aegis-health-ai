import React from 'react';
import { TimelineEvent } from '../../types';
import { Card } from '../ui/card';
import { Activity, Pill, Stethoscope, TestTube } from 'lucide-react';

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '2023-10-26',
    type: 'visit',
    title: 'Annual Check-up',
    hospital: 'Lagos General Hospital',
    doctor: 'Dr. Funmi Williams',
    description: 'Routine annual health examination.',
    summary: 'Everything looks normal. Recommended to continue a healthy lifestyle.'
  },
  {
    id: '2',
    date: '2023-10-15',
    type: 'test',
    title: 'Malaria Test',
    hospital: 'Nairobi Hospital Lab',
    description: 'Blood test for malaria parasites.',
    summary: 'Test results were negative for malaria.'
  },
  {
    id: '3',
    date: '2023-09-20',
    type: 'prescription',
    title: 'Amoxicillin',
    doctor: 'Dr. David Chen',
    description: 'Prescription for a bacterial infection.',
    summary: 'Course of antibiotics completed on 2023-09-27.'
  },
  {
    id: '4',
    date: '2023-08-15',
    type: 'vaccination',
    title: 'Hepatitis B Booster',
    hospital: 'General Hospital Ikeja',
    doctor: 'Nurse Grace',
    description: 'Final dose of Hepatitis B vaccine series.',
    summary: 'You are now fully vaccinated against Hepatitis B.'
  }
];

const getIcon = (type: TimelineEvent['type']) => {
  switch (type) {
    case 'visit':
      return <Stethoscope className="w-6 h-6 text-blue-500" />;
    case 'prescription':
      return <Pill className="w-6 h-6 text-red-500" />;
    case 'test':
      return <TestTube className="w-6 h-6 text-purple-500" />;
    case 'vaccination':
      return <Activity className="w-6 h-6 text-green-500" />;
    default:
      return <Activity className="w-6 h-6 text-gray-500" />;
  }
};

export const HealthTimeline = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Health Timeline</h2>
      <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3">
        {timelineEvents.map((event, index) => (
          <div key={event.id} className="mb-8 flex items-center w-full">
            <div className="absolute -left-4 bg-white dark:bg-gray-800 p-1 rounded-full">
              {getIcon(event.type)}
            </div>
            <div className="ml-10 w-full">
              <Card className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    {event.hospital && <p className="text-sm text-gray-600 dark:text-gray-300">{event.hospital}</p>}
                    {event.doctor && <p className="text-sm text-gray-600 dark:text-gray-300">{event.doctor}</p>}
                    <p className="mt-2 text-gray-700 dark:text-gray-200">{event.description}</p>
                  </div>
                </div>
                {event.summary && (
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">AI Summary: {event.summary}</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
