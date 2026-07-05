import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Upload, FileText, BrainCircuit, Eye } from 'lucide-react';

const documents = [
  { id: 1, name: 'Lab Result - Blood Test', type: 'pdf', date: '2023-10-15', thumbnail: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Prescription - Dr. Funmi', type: 'image', date: '2023-10-26', thumbnail: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Discharge Summary', type: 'pdf', date: '2023-09-01', thumbnail: 'https://via.placeholder.com/150' },
  { id: 4, name: 'X-Ray Scan', type: 'image', date: '2023-08-10', thumbnail: 'https://via.placeholder.com/150' },
];

export const DocumentVault = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Medical Document Vault</h2>
        <Button>
          <Upload className="w-5 h-5 mr-2" />
          Upload Document
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {documents.map((doc) => (
          <Card key={doc.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <img src={doc.thumbnail} alt={doc.name} className="w-full h-32 object-cover" />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-base font-semibold truncate">{doc.name}</CardTitle>
              <p className="text-sm text-gray-500 dark:text-gray-400">{doc.date}</p>
            </CardContent>
            <CardFooter className="p-2 flex justify-end space-x-2 bg-gray-50 dark:bg-gray-800/50">
              <Button variant="ghost" size="icon"><Eye className="w-5 h-5" /></Button>
              <Button variant="ghost" size="icon"><BrainCircuit className="w-5 h-5" /></Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
