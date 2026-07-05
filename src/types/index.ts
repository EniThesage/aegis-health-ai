export type Gender = 'Male' | 'Female' | 'Other';
export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type Genotype = 'AA' | 'AS' | 'AC' | 'SS' | 'SC';
export type Language = 'English' | 'Nigerian Pidgin' | 'Yoruba' | 'Hausa' | 'Igbo';
export type ProfileType = 'Self' | 'Child' | 'Parent' | 'Spouse';

export interface EmergencyContact {
  name: string;
  relationship: string;
  phone: string;
}

export interface UserProfile {
  id: string;
  name: string;
  dob: string;
  gender: Gender;
  bloodGroup: BloodGroup;
  genotype: Genotype;
  height: number;
  weight: number;
  conditions: string[];
  allergies: string[];
  medications: string[];
  emergencyContacts: EmergencyContact[];
  type: ProfileType;
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

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: string;
  endDate?: string;
  reminders: string[];
  status: 'active' | 'completed' | 'paused';
}

export interface TimelineEvent {
  id: string;
  date: string;
  type: 'visit' | 'prescription' | 'test' | 'vaccination' | 'note' | 'admission';
  title: string;
  hospital: string;
  doctor: string;
  description: string;
  summary?: string;
  attachments?: string[];
}

export interface Document {
  id: string;
  name: string;
  type: string;
  date: string;
  url: string;
  extractedData?: {
    hospital?: string;
    doctor?: string;
    date?: string;
    medications?: string[];
    diagnosis?: string;
  };
}

export interface Appointment {
  id: string;
  provider: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  location: string;
}

export interface Provider {
  id: string;
  name: string;
  type: 'Hospital' | 'Clinic' | 'Pharmacy' | 'Laboratory';
  location: string;
  rating: number;
  specialty?: string;
}
