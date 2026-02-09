import React from 'react';
import {
  GraduationCap, BookOpen, Library,
  Home, CloudSun, Trees,
  Landmark, Coins, CreditCard,
  Utensils, BedDouble, Coffee,
  Building, Wifi, Bot,
  ShoppingBag, ShoppingCart, Tag,
  Bus, Plane,
  Stethoscope, HeartPulse, Activity,
  Tv, Factory, Hammer
} from 'lucide-react';

// Import client logos
import keralaEducationLogo from '@/assets/clients/kerala-education.jfif';
import keralaIndustriesLogo from '@/assets/clients/kerala-industries.jpg';
import kalolsavamLogo from '@/assets/clients/kalolsavam.png';
import mediaoneLogo from '@/assets/clients/mediaone.png';
import minarTmtLogo from '@/assets/clients/minar-tmt.jpg';
import palakkadMunicipalityLogo from '@/assets/clients/palakkad-municipality.jpg';
import palakkadSurgicalLogo from '@/assets/clients/palakkad-surgical.jpg';
import pkmHospitalLogo from '@/assets/clients/pkm-hospital.png';
import stateElectionLogo from '@/assets/clients/state-election.avif';
import vcareLogo from '@/assets/clients/vcare.jfif';

export interface Sector {
  name: string;
  renderScene: () => React.ReactNode;
}

export const SECTORS: Sector[] = [
  {
    name: 'Education',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
        <BookOpen className="text-blue-400/80 absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12" strokeWidth={1.5} />
        <GraduationCap className="text-primary absolute top-2 left-1/2 -translate-x-1/2 w-14 h-14 z-10 group-hover:-translate-y-2 group-hover:rotate-6 transition-all duration-500 ease-in-out" strokeWidth={1.5} />
        <Library className="text-muted-foreground absolute top-6 right-0 w-8 h-8 opacity-30 group-hover:opacity-60 transition-opacity" />
      </div>
    )
  },
  {
    name: 'Residence',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto flex items-center justify-center overflow-hidden rounded-full bg-secondary/40 border border-border backdrop-blur-sm">
        <CloudSun className="text-yellow-400 absolute top-2 right-2 w-8 h-8 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
        <Home className="text-primary absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 group-hover:scale-105 transition-transform" strokeWidth={1.5} />
        <Trees className="text-green-500 absolute bottom-2 right-4 w-6 h-6 opacity-60" />
      </div>
    )
  },
  {
    name: 'Banking & Finance',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto">
        <Landmark className="text-muted-foreground absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
        <Coins className="text-yellow-400 absolute top-2 right-2 w-8 h-8 group-hover:animate-bounce" />
        <CreditCard className="text-primary absolute bottom-2 left-0 w-8 h-8 -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
      </div>
    )
  },
  {
    name: 'Hospitality',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
        <BedDouble className="text-blue-400/80 w-12 h-12 absolute bottom-2" strokeWidth={1.5} />
        <Coffee className="text-amber-500 w-8 h-8 absolute top-0 right-2 group-hover:-translate-y-2 transition-transform duration-500" />
        <Utensils className="text-muted-foreground w-6 h-6 absolute top-2 left-2 opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    )
  },
  {
    name: 'Intelligent Buildings',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto">
        <Building className="text-muted-foreground w-12 h-12 absolute bottom-0 left-1/2 -translate-x-1/2" strokeWidth={1.5} />
        <Wifi className="text-primary w-10 h-10 absolute top-0 left-1/2 -translate-x-1/2 animate-pulse" />
        <Bot className="text-blue-400 w-6 h-6 absolute bottom-0 right-2 group-hover:translate-x-1 transition-transform" />
      </div>
    )
  },
  {
    name: 'Shopping & Retail',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto">
        <ShoppingBag className="text-pink-400 w-10 h-10 absolute bottom-2 left-2 group-hover:-rotate-6 transition-transform" strokeWidth={1.5} />
        <ShoppingCart className="text-primary w-10 h-10 absolute bottom-2 right-2 group-hover:translate-x-2 transition-transform" strokeWidth={1.5} />
        <Tag className="text-yellow-400 w-6 h-6 absolute top-2 right-1/2 group-hover:rotate-12 transition-transform" />
      </div>
    )
  },
  {
    name: 'Transportation',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto overflow-hidden">
        <Bus className="text-yellow-500 w-10 h-10 absolute bottom-1 left-0 group-hover:translate-x-8 transition-transform duration-1000" strokeWidth={1.5} />
        <Plane className="text-muted-foreground w-8 h-8 absolute top-2 right-2 group-hover:-translate-x-12 group-hover:-translate-y-2 transition-transform duration-1000" />
        <div className="absolute bottom-0 w-full h-0.5 bg-muted"></div>
      </div>
    )
  },
  {
    name: 'Medical & Healthcare',
    renderScene: () => (
      <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
        <Activity className="text-primary w-24 h-12 absolute opacity-20" />
        <Stethoscope className="text-muted-foreground w-12 h-12 absolute z-10" strokeWidth={1.5} />
        <HeartPulse className="text-destructive w-8 h-8 absolute top-0 right-2 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
      </div>
    )
  }
];

// Major clients with brand logos
export interface Project {
  name: string;
  icon?: React.ReactNode;
  logo?: string;
  isMajor?: boolean;
  region: 'india' | 'middle-east';
  description?: string;
}

// Shuffles array using Fisher-Yates algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const PROJECTS_DATA_INTERNAL: Project[] = [
  // India - Major clients with logos
  { name: "State Election Commission", logo: stateElectionLogo, isMajor: true, region: 'india' },
  { name: "Education Department Kerala", logo: keralaEducationLogo, isMajor: true, region: 'india' },
  { name: "Industries Department Kerala", logo: keralaIndustriesLogo, isMajor: true, region: 'india' },
  { name: "Municipality Palakkad", logo: palakkadMunicipalityLogo, isMajor: true, region: 'india' },
  { name: "V Care Medicals", logo: vcareLogo, isMajor: true, region: 'india' },
  { name: "PKM Hospital", logo: pkmHospitalLogo, isMajor: true, region: 'india' },
  { name: "MediaOne TV", logo: mediaoneLogo, isMajor: true, region: 'india' },
  { name: "Minar TMT", logo: minarTmtLogo, isMajor: true, region: 'india' },
  { name: "Palakkad Surgical PVT LTD", logo: palakkadSurgicalLogo, isMajor: true, region: 'india' },
  { name: "State School Kalolsavam", logo: kalolsavamLogo, isMajor: true, region: 'india' },
  
  // India - Other projects
  { name: "Grand Hyper", icon: <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />, region: 'india' },
  { name: "Cooperative Spinning Mills", icon: <Factory className="w-3 h-3 sm:w-4 sm:h-4" />, region: 'india' },
  { name: "Govt. Polytechnic College Palakkad", region: 'india' },
  { name: "IPT&GPT Shornur", region: 'india' },
  { name: "Mount Seena Group Of Institutions", region: 'india' },
  { name: "Technical Highschools Kerala", region: 'india' },
  { name: "Springs International School", region: 'india' },
  { name: "Nanma Medical Centre", region: 'india' },
  { name: "Pinnacle Nissan", region: 'india' },
  { name: "Alankar Metals", region: 'india' },
  { name: "Negros Tirupur", region: 'india' },
  { name: "JR Backers Coimbatore", region: 'india' },
  { name: "Yashoram Jewelers", region: 'india' },
  { name: "Craft Mela", region: 'india' },
  { name: "Peoples Foundation", region: 'india' },
  { name: "Pirayiri Grama Panchayath", region: 'india' },

  // Middle East projects
  { name: "King Abdullah Economic City (KAEC)", isMajor: true, region: 'middle-east', description: "CCTV, ACS, ANPR, Biometric Systems, Face Recognition, Radar Speed Monitoring, Gate Automations" },
  { name: "The World Academy (TWA)", isMajor: true, region: 'middle-east', description: "CCTV, Biometric Access Systems, IT Infrastructure" },
  { name: "Ncomforts", isMajor: true, region: 'middle-east', description: "CCTV Surveillance, Network Infrastructure" },
  { name: "CITISCAPE", isMajor: true, region: 'middle-east', description: "Network Infrastructure, CCTV, VoIP/IPPBX, Network Security" },
];

// Export shuffled array
export const PROJECTS: Project[] = shuffleArray(PROJECTS_DATA_INTERNAL);

export const INDIA_PROJECTS: Project[] = shuffleArray(PROJECTS_DATA_INTERNAL.filter(p => p.region === 'india'));
export const MIDDLE_EAST_PROJECTS: Project[] = PROJECTS_DATA_INTERNAL.filter(p => p.region === 'middle-east');

export const STATS = [
  { label: 'Years Experience', value: 16, suffix: '+' },
  { label: 'Satisfied Customers', value: 3000, suffix: '+' },
  { label: 'Mega Projects', value: 150, suffix: '+' },
  { label: 'Support 24/7', value: 'Yes', isText: true }
];
