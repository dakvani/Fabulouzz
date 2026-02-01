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

// Major clients with brand icons (top tier)
export interface Project {
  name: string;
  icon?: React.ReactNode;
  isMajor?: boolean;
}

export const PROJECTS: Project[] = [
  // Tier 1 - Major Government/Institutional
  { name: "State Election Commission", icon: <Landmark className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  { name: "Education Department Kerala", icon: <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  { name: "Industries Department Kerala", icon: <Building className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  { name: "Municipality Palakkad", icon: <Landmark className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  
  // Tier 2 - Major Healthcare & Media
  { name: "V Care Medicals", icon: <HeartPulse className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  { name: "PKM Hospital", icon: <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  { name: "MediaOne TV", icon: <Tv className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  { name: "Grand Hyper", icon: <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  
  // Tier 3 - Major Industrial & Education
  { name: "Cooperative Spinning Mills", icon: <Factory className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  { name: "Minar TMT", icon: <Hammer className="w-3 h-3 sm:w-4 sm:h-4" />, isMajor: true },
  
  // Education Institutions
  { name: "Govt. Polytechnic College Palakkad" },
  { name: "IPT&GPT Shornur" },
  { name: "Mount Seena Group Of Institutions" },
  { name: "Technical Highschools Kerala" },
  { name: "Springs International School" },
  
  // Healthcare
  { name: "Palakkad Surgical PVT LTD" },
  { name: "Nanma Medical Centre" },
  
  // Retail & Business
  { name: "Pinnacle Nissan" },
  { name: "Alankar Metals" },
  { name: "Negros Tirupur" },
  { name: "JR Backers Coimbatore" },
  { name: "Yashoram Jewelers" },
  
  // Events & Community
  { name: "State School Kalolsavam" },
  { name: "Craft Mela" },
  { name: "Peoples Foundation" },
  { name: "Pirayiri Grama Panchayath" }
];

export const STATS = [
  { label: 'Years Experience', value: 12, suffix: '+' },
  { label: 'Satisfied Customers', value: 3000, suffix: '+' },
  { label: 'Mega Projects', value: 150, suffix: '+' },
  { label: 'Support 24/7', value: 'Yes', isText: true }
];
