import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { BookOpen, Mic, Search } from 'lucide-react';

const educationTopics = [
  { id: 1, title: 'Understanding Malaria', category: 'Infections', readTime: '5 min', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Managing High Blood Pressure', category: 'Chronic Conditions', readTime: '8 min', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Healthy Nutrition for Families', category: 'Wellness', readTime: '10 min', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'The Importance of Vaccinations', category: 'Preventive Care', readTime: '7 min', image: 'https://via.placeholder.com/150' },
];

export const HealthEducation = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Health Education</h2>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input placeholder="Search topics..." className="pl-10" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationTopics.map((topic) => (
          <Card key={topic.id} className="overflow-hidden">
            <img src={topic.image} alt={topic.title} className="w-full h-32 object-cover" />
            <CardContent className="p-4">
              <p className="text-sm font-semibold text-blue-500">{topic.category}</p>
              <h3 className="text-lg font-bold mt-1">{topic.title}</h3>
              <div className="flex justify-between items-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{topic.readTime} read</span>
                <button className="flex items-center space-x-1">
                  <Mic className="w-4 h-4" />
                  <span>Listen</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
