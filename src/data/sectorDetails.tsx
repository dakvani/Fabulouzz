import React from 'react';
import {
  GraduationCap, Home, Landmark, Utensils, Building,
  ShoppingBag, Bus, Stethoscope,
  Monitor, Camera, Bell, Fingerprint, Wifi,
  Smartphone, DoorOpen, Car,
  ScanFace, Lock, TicketCheck,
  BedDouble, Tv, Globe,
  Lightbulb, ParkingCircle, Gauge,
  ShieldAlert, Users, MonitorPlay,
  Plane, Clock, CreditCard,
  Phone, MapPin, CalendarClock
} from 'lucide-react';

import educationImg from '@/assets/sectors/education.jpg';
import residenceImg from '@/assets/sectors/residence.jpg';
import bankingImg from '@/assets/sectors/banking.jpg';
import hospitalityImg from '@/assets/sectors/hospitality.jpg';
import intelligentBuildingsImg from '@/assets/sectors/intelligent-buildings.jpg';
import shoppingImg from '@/assets/sectors/shopping.jpg';
import transportationImg from '@/assets/sectors/transportation.jpg';
import healthcareImg from '@/assets/sectors/healthcare.jpg';

export interface SectorProject {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface SectorTech {
  category: string;
  items: string[];
}

export interface SectorDetail {
  slug: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  projects: SectorProject[];
  technologies: SectorTech[];
}

export const SECTOR_DETAILS: SectorDetail[] = [
  {
    slug: 'education',
    name: 'Education',
    description: 'Educational institutions (schools, universities, training centers) require robust infrastructure to support digital learning, ensure student safety, and manage sprawling campuses. The focus is on creating "Smart Campuses" that are secure and interactive.',
    icon: <GraduationCap className="w-8 h-8" />,
    image: educationImg,
    projects: [
      { title: 'Smart Classrooms', description: 'Installation of interactive whiteboards, projectors, and lecture capture systems.', icon: <Monitor className="w-6 h-6" /> },
      { title: 'Campus Security', description: 'CCTV surveillance for playgrounds and corridors; Access Control for labs and staff rooms.', icon: <Camera className="w-6 h-6" /> },
      { title: 'PA & Bell Systems', description: 'Automated zoned announcements and emergency evacuation alerts.', icon: <Bell className="w-6 h-6" /> },
      { title: 'Time & Attendance', description: 'RFID or biometric systems for student and staff attendance tracking.', icon: <Fingerprint className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'Audiovisual', items: ['Interactive Flat Panels (IFP)', 'Sound reinforcement systems'] },
      { category: 'Security', items: ['IP Cameras with perimeter protection', 'Turnstiles'] },
      { category: 'Networking', items: ['High-density Wi-Fi 6 solutions for thousands of concurrent users'] },
    ],
  },
  {
    slug: 'residence',
    name: 'Residence',
    description: 'This sector covers private villas, apartment complexes, and gated communities. The demand here is for "Smart Home" automation and perimeter security to ensure comfort and peace of mind for residents.',
    icon: <Home className="w-8 h-8" />,
    image: residenceImg,
    projects: [
      { title: 'Home Automation', description: 'Control of lighting, curtains, and AC via mobile apps or voice.', icon: <Smartphone className="w-6 h-6" /> },
      { title: 'Video Door Phone', description: 'Intercom systems allowing residents to see and speak to visitors before unlocking doors.', icon: <DoorOpen className="w-6 h-6" /> },
      { title: 'Gate Barrier Systems', description: 'Automatic entry for residents using UHF tags or License Plate Recognition.', icon: <Car className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'Automation', items: ['KNX', 'Zigbee', 'Z-Wave protocols'] },
      { category: 'Access', items: ['Video Intercoms', 'Smart Locks', 'UHF Long-range readers'] },
    ],
  },
  {
    slug: 'banking-finance',
    name: 'Banking & Finance',
    description: 'Banks require the highest level of physical and digital security. Compliance with regulations is strict, necessitating advanced surveillance and access restrictions to vaults and server rooms.',
    icon: <Landmark className="w-8 h-8" />,
    image: bankingImg,
    projects: [
      { title: 'High-Security Surveillance', description: 'Cameras with facial recognition and long-term storage retention for audits.', icon: <ScanFace className="w-6 h-6" /> },
      { title: 'Vault & Datacenter Access', description: 'Multi-factor authentication (Card + Fingerprint + PIN) for sensitive areas.', icon: <Lock className="w-6 h-6" /> },
      { title: 'Queue Management Systems', description: 'Ticketing kiosks and digital displays to manage customer flow.', icon: <TicketCheck className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'Security', items: ['Biometric Access Control', 'Fisheye Cameras', 'Alarm Systems with vibration sensors for ATMs/Vaults'] },
      { category: 'Customer Experience', items: ['Digital Signage', 'Kiosk software'] },
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    description: 'Hotels and resorts prioritize "Guest Experience." Technology must be seamless, invisible, and focused on comfort. Reliability is key, as downtime directly affects guest satisfaction ratings.',
    icon: <Utensils className="w-8 h-8" />,
    image: hospitalityImg,
    projects: [
      { title: 'Guest Room Management', description: 'Intelligent bedside panels to control room temperature, lights, and "Do Not Disturb" signs.', icon: <BedDouble className="w-6 h-6" /> },
      { title: 'IPTV Systems', description: 'Interactive TV systems for room service ordering, bill viewing, and HD content.', icon: <Tv className="w-6 h-6" /> },
      { title: 'Wi-Fi Portals', description: 'Tiered internet access (Free vs. Premium) with social media login.', icon: <Globe className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'ELV', items: ['GRMS Controllers (Modbus/BACnet)', 'Electronic Door Locks'] },
      { category: 'AV', items: ['IPTV Headends', 'Background Music Systems (BGM) for lobbies'] },
    ],
  },
  {
    slug: 'intelligent-buildings',
    name: 'Intelligent Buildings',
    description: 'This refers to commercial towers or mixed-use facilities where efficiency is paramount. The goal is to integrate disparate systems (lighting, HVAC, security) into a single dashboard to reduce energy costs.',
    icon: <Building className="w-8 h-8" />,
    image: intelligentBuildingsImg,
    projects: [
      { title: 'Building Management System', description: 'Centralized monitoring of mechanical and electrical equipment (Chillers, Pumps, Generators).', icon: <Gauge className="w-6 h-6" /> },
      { title: 'Lighting Control', description: 'Motion sensors in corridors and daylight harvesting sensors to dim lights automatically.', icon: <Lightbulb className="w-6 h-6" /> },
      { title: 'Parking Management', description: 'Parking guidance systems showing available slots and directing cars via LED indicators.', icon: <ParkingCircle className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'Integration', items: ['BACnet', 'Modbus', 'DALI (for lighting)'] },
      { category: 'Sensors', items: ['Ultrasonic/PIR occupancy sensors', 'CO2 sensors'] },
    ],
  },
  {
    slug: 'shopping-retail',
    name: 'Shopping & Retail',
    description: 'Malls and retail stores focus on "Loss Prevention" and "Customer Analytics." They need technology that helps them sell more while protecting their inventory.',
    icon: <ShoppingBag className="w-8 h-8" />,
    image: shoppingImg,
    projects: [
      { title: 'Electronic Article Surveillance', description: 'Anti-theft pedestals at store exits (security tags).', icon: <ShieldAlert className="w-6 h-6" /> },
      { title: 'People Counting', description: 'Analytics to track footfall, peak hours, and customer heatmaps.', icon: <Users className="w-6 h-6" /> },
      { title: 'Digital Signage / Video Walls', description: 'Large displays for advertising and promotions.', icon: <MonitorPlay className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'Retail Tech', items: ['EAS (AM/RF technology)', 'People Counting Cameras'] },
      { category: 'AV', items: ['Video Wall Processors', 'Cloud-managed Digital Signage players'] },
    ],
  },
  {
    slug: 'transportation',
    name: 'Transportation',
    description: 'Airports, metro stations, and bus terminals require rugged, industrial-grade systems capable of handling massive crowds and harsh environments. Public safety and information dissemination are critical.',
    icon: <Bus className="w-8 h-8" />,
    image: transportationImg,
    projects: [
      { title: 'Public Information Displays', description: 'Flight/Train schedule screens (PIDS).', icon: <Plane className="w-6 h-6" /> },
      { title: 'Master Clock Systems', description: 'Ensuring all clocks in the facility are synchronized to the exact second.', icon: <Clock className="w-6 h-6" /> },
      { title: 'ANPR', description: 'Automatic Number Plate Recognition for tracking vehicles in drop-off/pick-up zones.', icon: <CreditCard className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'Hardware', items: ['Industrial-grade IP65/IP67 cameras', 'LED Matrix displays'] },
      { category: 'Comms', items: ['Tetra Radio Systems', 'Fiber Optic backbones'] },
    ],
  },
  {
    slug: 'medical-healthcare',
    name: 'Medical & Healthcare',
    description: 'Hospitals require specialized ELV systems that directly impact patient life and safety. Systems must be hygienic, reliable, and integrated with hospital workflows.',
    icon: <Stethoscope className="w-8 h-8" />,
    image: healthcareImg,
    projects: [
      { title: 'Nurse Call Systems', description: 'Emergency buttons in patient rooms and toilets that alert the nurses\' station immediately.', icon: <Phone className="w-6 h-6" /> },
      { title: 'Infant Protection Systems', description: 'RFID tags to prevent unauthorized removal of infants from the maternity ward.', icon: <MapPin className="w-6 h-6" /> },
      { title: 'Queuing & Waiting Area', description: 'Systems to manage patient appointments and waiting times.', icon: <CalendarClock className="w-6 h-6" /> },
    ],
    technologies: [
      { category: 'Healthcare ELV', items: ['IP Nurse Call Systems (integrating with mobile phones)', 'RTLS (Real-Time Location Systems) for tracking expensive medical equipment'] },
    ],
  },
];