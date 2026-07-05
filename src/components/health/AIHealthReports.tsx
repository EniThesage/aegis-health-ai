import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { FileDown, BrainCircuit } from 'lucide-react';

const reportSections = [
  { id: 'profile', label: 'Personal Profile' },
  { id: 'timeline', label: 'Health Timeline' },
  { id: 'medications', label: 'Medication History' },
  { id: 'appointments', label: 'Appointment History' },
  { id: 'allergies', label: 'Allergies & Conditions' },
  { id: 'contacts', label: 'Emergency Contacts' },
];

export const AIHealthReports = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">AI Health Reports</h2>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Generate New Report</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Select the sections to include in your downloadable PDF report.</p>
          
          <div className="grid grid-cols-2 gap-4 my-6">
            {reportSections.map(section => (
              <div key={section.id} className="flex items-center space-x-2">
                <Checkbox id={section.id} defaultChecked />
                <label htmlFor={section.id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  {section.label}
                </label>
              </div>
            ))}
          </div>

          <Card className="p-4 bg-gray-50 dark:bg-gray-800/50 mb-6">
            <div className="flex items-start space-x-3">
              <BrainCircuit className="w-5 h-5 mt-1 text-blue-500" />
              <div>
                <h4 className="font-semibold">AI-Generated Summary</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">A concise, AI-powered summary will be automatically included at the top of your report.</p>
              </div>
            </div>
          </Card>

          <Button size="lg" className="w-full">
            <FileDown className="w-5 h-5 mr-2" />
            Generate & Download PDF
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
