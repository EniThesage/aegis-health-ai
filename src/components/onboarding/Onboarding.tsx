import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useApp } from '../../context/AppContext';
import { Button } from '../../components/ui/button';
import { Input } from '../ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const steps = [
  { id: 'personal', title: 'Personal Information' },
  { id: 'health', title: 'Health Details' },
  { id: 'settings', title: 'Accessibility & Savings' },
];

const personalSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  dob: z.string().min(1, 'Date of birth is required'),
  gender: z.string().min(1, 'Gender is required'),
});

const healthSchema = z.object({
  bloodGroup: z.string().min(1, 'Blood group is required'),
  genotype: z.string().min(1, 'Genotype is required'),
  height: z.string().min(1, 'Height is required'),
  weight: z.string().min(1, 'Weight is required'),
  conditions: z.string(),
  allergies: z.string(),
  medications: z.string(),
  emergencyContacts: z.string(),
});

const settingsSchema = z.object({
  language: z.string(),
});

const PersonalInfoStep = ({ onNext }: { onNext: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(personalSchema) });
  const { updateUserProfile } = useApp();

  const onSubmit = (data: any) => {
    // @ts-ignore
    updateUserProfile(data);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('fullName')} placeholder="Full Name" />
      {errors.fullName && <p className="text-red-500">{`${errors.fullName.message}`}</p>}
      <Input {...register('dob')} placeholder="Date of Birth" type="date" />
      {errors.dob && <p className="text-red-500">{`${errors.dob.message}`}</p>}
      <Input {...register('gender')} placeholder="Gender" />
      {errors.gender && <p className="text-red-500">{`${errors.gender.message}`}</p>}
      <Button type="submit">Next</Button>
    </form>
  );
};

const HealthDetailsStep = ({ onNext, onBack }: { onNext: () => void, onBack: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(healthSchema) });
  const { updateUserProfile } = useApp();

  const onSubmit = (data: any) => {
    const formattedData = {
      ...data,
      height: Number(data.height),
      weight: Number(data.weight),
      conditions: data.conditions ? data.conditions.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
      allergies: data.allergies ? data.allergies.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
      medications: data.medications ? data.medications.split(',').map((s: string) => s.trim()).filter(Boolean) : [],
      emergencyContacts: data.emergencyContacts ? data.emergencyContacts.split(';').map((s: string) => {
        const parts = s.split(',').map(part => part.trim());
        return { 
          name: parts[0] || '', 
          relationship: parts[1] || '', 
          phone: parts[2] || '' 
        };
      }).filter(c => c.name || c.phone) : []
    };
    updateUserProfile(formattedData);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('bloodGroup')} placeholder="Blood Group" />
      <Input {...register('genotype')} placeholder="Genotype" />
      <Input {...register('height')} placeholder="Height (cm)" type="number" />
      <Input {...register('weight')} placeholder="Weight (kg)" type="number" />
      <Input {...register('conditions')} placeholder="Existing Medical Conditions (comma-separated)" />
      <Input {...register('allergies')} placeholder="Allergies (comma-separated)" />
      <Input {...register('medications')} placeholder="Current Medications (comma-separated)" />
      <Input {...register('emergencyContacts')} placeholder="Emergency Contacts (name,relationship,phone)" />
      <div className="flex justify-between">
        <Button type="button" onClick={onBack} variant="outline">Back</Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

const SettingsStep = ({ onBack }: { onBack: () => void }) => {
  const {
    register,
    handleSubmit,
  } = useForm({ resolver: zodResolver(settingsSchema) });
  const { updateSettings, completeOnboarding } = useApp();

  const onSubmit = (data: any) => {
    // @ts-ignore
    updateSettings(data);
    completeOnboarding();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input {...register('language')} placeholder="Preferred Language" />
      <div className="flex justify-between">
        <Button type="button" onClick={onBack} variant="outline">Back</Button>
        <Button type="submit">Finish Onboarding</Button>
      </div>
    </form>
  );
};

export const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { completeOnboarding } = useApp();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeOnboarding();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (steps[currentStep].id) {
      case 'personal':
        return <PersonalInfoStep onNext={handleNext} />;
      case 'health':
        return <HealthDetailsStep onNext={handleNext} onBack={handleBack} />;
      case 'settings':
        return <SettingsStep onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>{steps[currentStep].title}</CardTitle>
        </CardHeader>
        <CardContent>
          {renderStep()}
        </CardContent>
      </Card>
    </div>
  );
};
