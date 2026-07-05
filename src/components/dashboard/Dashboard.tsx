import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { 
  Volume2, 
  TrendingUp, 
  Calendar, 
  Activity, 
  Wallet, 
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Plus,
  Pill
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip 
} from 'recharts';

const healthScoreData = [
  { name: 'Jan', score: 75 },
  { name: 'Feb', score: 78 },
  { name: 'Mar', score: 80 },
  { name: 'Apr', score: 79 },
  { name: 'May', score: 82 },
  { name: 'Jun', score: 85 },
];

export const Dashboard = () => {
  const { userProfile } = useApp();
  const [showAllInsights, setShowAllInsights] = useState(false);

  const aiSummary = `Good morning, ${userProfile?.name?.split(' ')[0] || 'there'} 👋

• No medications are due today.
• Your Health Safety Fund is 72% toward your ₦50,000 goal.
• Your last clinic visit was 45 days ago.
• Your blood pressure hasn't been updated in 3 months.
• Consider scheduling your annual wellness check.
• You're on a 16-day Health Savings streak.`;

  return (
    <div className="space-y-6">
      {/* AI Health Snapshot */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 shadow-lg border-none">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">AI Health Snapshot</h2>
          <Button variant="ghost" size="icon">
            <Volume2 className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </Button>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 whitespace-pre-line">
          {aiSummary}
        </p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Health Score */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Health Score</h3>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <p className="text-3xl font-bold mt-2">85 <span className="text-sm font-normal text-gray-500">/ 100</span></p>
          <ResponsiveContainer width="100%" height={100}>
            <LineChart data={healthScoreData}>
              <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={2} dot={false} />
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Health Safety Fund */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Health Safety Fund</h3>
            <Wallet className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold mt-2">₦36,000 <span className="text-sm font-normal text-gray-500">of ₦50,000</span></p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-4">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '72%' }}></div>
          </div>
        </Card>

        {/* Upcoming Medication */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Next Medication</h3>
            <Pill className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-lg font-bold mt-2">No medications due</p>
          <p className="text-sm text-gray-500">Today</p>
          <Button variant="link" className="p-0 mt-2">View all <ArrowRight className="w-4 h-4 ml-1" /></Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Next Appointment */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Next Appointment</h3>
            <Calendar className="w-5 h-5 text-purple-500" />
          </div>
          <p className="text-lg font-bold mt-2">Dr. Amina Bello</p>
          <p className="text-sm text-gray-500">Dental Checkup - Tomorrow, 10:00 AM</p>
          <Button variant="link" className="p-0 mt-2">Details <ArrowRight className="w-4 h-4 ml-1" /></Button>
        </Card>

        {/* Recent Activity */}
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Recent Activity</h3>
            <Activity className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="mt-2 space-y-2">
            <div className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-green-500 mr-2" />
              <p className="text-sm">Vaccination: Hepatitis B - Aug 15, 2023</p>
            </div>
            <div className="flex items-center">
              <Zap className="w-5 h-5 text-blue-500 mr-2" />
              <p className="text-sm">Saved ₦500 to Health Fund - Today</p>
            </div>
          </div>
        </Card>
      </div>

      {/* AI Insights */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg">AI Insights</h3>
        <Card className="p-4 bg-gray-50 dark:bg-gray-800/50">Insight 1: based on your recent activity...</Card>
        <Card className="p-4 bg-gray-50 dark:bg-gray-800/50">Insight 2: your health score trend is positive...</Card>
        {showAllInsights && (
          <>
            <Card className="p-4 bg-gray-50 dark:bg-gray-800/50">Insight 3: ...</Card>
            <Card className="p-4 bg-gray-50 dark:bg-gray-800/50">Insight 4: ...</Card>
          </>
        )}
        <Button variant="link" onClick={() => setShowAllInsights(!showAllInsights)}>
          {showAllInsights ? 'Show less' : 'Show all'}
        </Button>
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="flex-col h-24">
            <Clock className="w-8 h-8 mb-2" />
            Log Activity
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <Plus className="w-8 h-8 mb-2" />
            Add Record
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <Calendar className="w-8 h-8 mb-2" />
            New Appointment
          </Button>
          <Button variant="outline" className="flex-col h-24">
            <Wallet className="w-8 h-8 mb-2" />
            Add to Fund
          </Button>
        </div>
      </div>
    </div>
  );
};
