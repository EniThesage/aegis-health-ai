import React from 'react';

export type Language = 'English' | 'Nigerian Pidgin' | 'Yoruba' | 'Hausa' | 'Igbo';

export interface UserProfile {
  id: string;
  name: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  genotype: string;
  height: number;
  weight: number;
  conditions: string[];
  allergies: string[];
  medications: string[];
  emergencyContacts: {
    name: string;
    relationship: string;
    phone: string;
  }[];
  type: 'Self' | 'Family';
}

export interface Settings {
  language: Language;
  voice: string;
  textSize: 'small' | 'medium' | 'large';
  theme: 'light' | 'dark';
  contrast: 'normal' | 'high';
  dyslexiaFont: boolean;
}

export interface HealthSavings {
  goal: number;
  balance: number;
  frequency: 'daily' | 'weekly' | 'monthly';
  amount: number;
  streak: number;
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'visit' | 'prescription' | 'test' | 'other' | 'vaccination';
  title: string;
  hospital?: string;
  doctor?: string;
  description: string;
  summary?: string;
  attachments?: string[];
}

export interface Medication {
  id: string;
  name:string;
  dosage: string;
  frequency: string;
  time: string[];
  startDate: string;
  endDate?: string;
  instructions?: string;
  takenToday: boolean;
  status: 'active' | 'completed' | 'paused';
  reminders: boolean;
}

export interface Appointment {
  id: string;
  provider: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
}

export interface Provider {
  id: string;
  name: string;
  type: 'Hospital' | 'Clinic' | 'Pharmacy' | 'Laboratory';
  location: string;
  rating: number;
  specialty?: string;
  phone?: string;
}

export interface HealthEducation {
  id: string;
  title: string;
  content: string;
  category: string;
  image: string;
  readTime: string;
}
