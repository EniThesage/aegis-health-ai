import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Wallet, Plus, TrendingUp, Zap } from 'lucide-react';

const HealthFund = () => {
  const savings = {
    goal: 50000,
    balance: 36000,
    streak: 16,
  };

  const progress = (savings.balance / savings.goal) * 100;

  const transactions = [
    { id: 1, amount: 500, date: '2023-11-01' },
    { id: 2, amount: 500, date: '2023-10-31' },
    { id: 3, amount: 500, date: '2023-10-30' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Health Safety Fund</h2>
      <Card className="bg-gradient-to-br from-blue-500 to-green-500 text-white p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm opacity-80">Current Balance</p>
            <p className="text-4xl font-bold">₦{savings.balance.toLocaleString()}</p>
          </div>
          <Wallet className="w-12 h-12 opacity-50" />
        </div>
        <div className="mt-6">
          <div className="flex justify-between items-center">
            <p className="text-sm opacity-80">Goal: ₦{savings.goal.toLocaleString()}</p>
            <p className="text-sm font-semibold">{progress.toFixed(0)}%</p>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2.5 mt-2">
            <div className="bg-white h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-4 flex flex-col items-center justify-center">
          <div className="flex items-center text-yellow-500">
            <Zap className="w-6 h-6 mr-2" />
            <p className="text-3xl font-bold">{savings.streak}</p>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Day Savings Streak</p>
        </Card>
        <Card className="p-4 flex flex-col items-center justify-center">
          <Button className="w-full h-full text-lg">
            <Plus className="w-6 h-6 mr-2" />
            Add to Fund
          </Button>
        </Card>
      </div>

      <div>
        <h3 className="font-semibold text-lg">AI Savings Coach</h3>
        <Card className="p-4 mt-2 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-sm text-gray-600 dark:text-gray-300">You're on a great streak! Saving ₦500 daily will help you reach your goal in approximately 28 more days.</p>
        </Card>
      </div>

      <div>
        <h3 className="font-semibold text-lg">Contribution History</h3>
        <Card className="mt-2">
          <CardContent className="p-0">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {transactions.map((tx) => (
                <li key={tx.id} className="p-4 flex justify-between items-center">
                  <p>Contribution</p>
                  <div>
                    <p className="font-semibold">+ ₦{tx.amount}</p>
                    <p className="text-sm text-gray-500 text-right">{tx.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export { HealthFund };
