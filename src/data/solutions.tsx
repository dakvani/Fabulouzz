import React from 'react';
import {
  ShieldCheck, Cpu, Lock, Video, Zap, Sun, Monitor,
  Camera, Wifi, ScanLine, Footprints, Flame, BellRing,
  DoorOpen, ArrowDownToLine, Slash, MoveHorizontal, Columns, Car,
  Network, LayoutGrid, KeyRound, ArrowUpDown, UserCheck, Clock,
  Mic2, Speaker, Users2, MonitorPlay, LayoutDashboard,
  Settings2, ArrowDown, Lightbulb, AlignJustify, Square,
  Factory, Lamp, BatteryCharging, Globe, PhoneCall, Server, Share2,
  Cable, Megaphone, Presentation, Tv, Phone, NetworkIcon, ServerCog,
  ShieldAlert, Cloud, ClipboardList
} from 'lucide-react';

export interface SolutionItem {
  name: string;
  icon: React.ReactNode;
  anim: string;
  description: string;
}

export interface Solution {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  renderHeroVisual: () => React.ReactNode;
  items: SolutionItem[];
}

export const SOLUTIONS: Solution[] = [
  {
    id: 'security',
    title: 'Security & Surveillance',
    icon: <ShieldCheck size={32} />,
    description: 'Advanced monitoring systems for complete peace of mind.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] border border-dashed border-primary/40 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
        <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-tr from-transparent via-transparent to-primary/20 animate-spin"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-primary/30 shadow-[0_0_50px_rgba(118,192,67,0.3)]">
          <ShieldCheck className="w-16 h-16 md:w-24 md:h-24 text-primary" strokeWidth={1} />
        </div>
        <div className="absolute top-10 right-10 md:right-20 animate-bounce">
          <Camera className="w-10 h-10 md:w-12 md:h-12 text-foreground bg-card p-2 rounded-lg border border-border" />
        </div>
        <div className="absolute bottom-10 md:bottom-20 left-10 animate-pulse">
          <ScanLine className="w-8 h-8 md:w-10 md:h-10 text-destructive" />
        </div>
      </div>
    ),
    items: [
      { name: 'AHD Surveillance', icon: <Camera size={20} />, anim: 'group-hover:animate-bounce', description: 'High-definition analog cameras delivering crystal-clear footage for 24/7 property monitoring.' },
      { name: 'IP Surveillance', icon: <Wifi size={20} />, anim: 'group-hover:animate-pulse', description: 'Network-based cameras with remote access, smart alerts, and seamless cloud storage integration.' },
      { name: 'Video Analytics', icon: <ScanLine size={20} />, anim: 'group-hover:animate-ping', description: 'AI-powered analysis for object detection, facial recognition, and behavioral pattern identification.' },
      { name: 'Intrusion Detection', icon: <Footprints size={20} />, anim: 'group-hover:animate-bounce', description: 'Perimeter protection systems using motion sensors, laser barriers, and thermal imaging technology.' },
      { name: 'Fire Detection', icon: <Flame size={20} />, anim: 'group-hover:animate-pulse text-destructive', description: 'Early warning fire alarm systems with smoke, heat, and gas detectors for rapid emergency response.' },
      { name: 'Burglar Alarm', icon: <BellRing size={20} />, anim: 'group-hover:animate-wiggle', description: 'Comprehensive alarm systems with door/window sensors, sirens, and instant mobile notifications.' }
    ]
  },
  {
    id: 'automation',
    title: 'Entry & Exit Automation',
    icon: <Cpu size={32} />,
    description: 'Seamless automated control for gates and barriers.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border-4 border-secondary/50 rounded-full"></div>
        <div className="absolute w-[250px] md:w-[350px] h-2 bg-primary/20 top-1/2 left-0 -translate-y-1/2 rotate-45"></div>
        <div className="absolute w-[250px] md:w-[350px] h-2 bg-primary/20 top-1/2 left-0 -translate-y-1/2 -rotate-45"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <Cpu className="w-16 h-16 md:w-24 md:h-24 text-blue-400" strokeWidth={1} />
        </div>
        <div className="absolute top-0 animate-[bounce_3s_infinite]">
          <DoorOpen className="w-10 h-10 md:w-14 md:h-14 text-foreground drop-shadow-lg" />
        </div>
        <div className="absolute bottom-10 right-10 animate-spin-slow">
          <Settings2 className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground" />
        </div>
      </div>
    ),
    items: [
      { name: 'Gate Opener', icon: <DoorOpen size={20} />, anim: 'group-hover:-translate-x-1 transition-transform', description: 'Automated swing and sliding gate systems with remote control and safety sensors for residential and commercial use.' },
      { name: 'Rolling Shutter', icon: <ArrowDownToLine size={20} />, anim: 'group-hover:translate-y-1 transition-transform', description: 'Motorized rolling shutters with tubular motors for storefronts, garages, and industrial facilities.' },
      { name: 'Barrier/Bollard', icon: <Slash size={20} className="rotate-90" />, anim: 'group-hover:rotate-180 transition-transform', description: 'Traffic control barriers and retractable bollards for parking lots, toll plazas, and restricted zones.' },
      { name: 'Sliding Glass Door', icon: <MoveHorizontal size={20} />, anim: 'group-hover:scale-x-125 transition-transform', description: 'Automatic sliding door systems for commercial entrances with motion detection and safety compliance.' },
      { name: 'Flap Barrier', icon: <Columns size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'High-throughput pedestrian access control gates for offices, metros, and public buildings.' },
      { name: 'Vehicle Entrance', icon: <Car size={20} />, anim: 'group-hover:translate-x-2 transition-transform', description: 'ANPR and UHF-based vehicle identification systems for seamless parking and access management.' }
    ]
  },
  {
    id: 'access',
    title: 'Access Control',
    icon: <Lock size={32} />,
    description: 'Secure entry management for modern facilities.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] border-2 border-emerald-500/20 rounded-xl rotate-45 animate-pulse"></div>
        <div className="absolute w-[220px] h-[220px] md:w-[300px] md:h-[300px] border-2 border-emerald-500/20 rounded-xl -rotate-12"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-full border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
          <Lock className="w-16 h-16 md:w-20 md:h-20 text-emerald-400" strokeWidth={1.5} />
        </div>
        <div className="absolute left-10 top-1/2 -translate-y-1/2 animate-wiggle">
          <KeyRound className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
        </div>
        <div className="absolute right-10 bottom-20">
          <UserCheck className="w-10 h-10 md:w-14 md:h-14 text-emerald-200 opacity-80" />
        </div>
      </div>
    ),
    items: [
      { name: 'Networked Access', icon: <Network size={20} />, anim: 'group-hover:animate-pulse', description: 'Centralized access control systems managing multiple locations from a single server with real-time monitoring.' },
      { name: 'Multi-Door Control', icon: <LayoutGrid size={20} />, anim: 'group-hover:rotate-90 transition-transform', description: 'Scalable controllers managing multiple entry points with card, biometric, and mobile credential support.' },
      { name: 'Standalone Access', icon: <KeyRound size={20} />, anim: 'group-hover:rotate-45 transition-transform', description: 'Independent door locks with keypad, fingerprint, or RFID access for small offices and server rooms.' },
      { name: 'Elevator Control', icon: <ArrowUpDown size={20} />, anim: 'group-hover:translate-y-1 transition-transform', description: 'Floor-level access restriction for elevators, allowing authorized users to reach designated floors only.' },
      { name: 'Visitor Management', icon: <UserCheck size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'Digital check-in systems with ID scanning, host notifications, and visitor badge printing.' },
      { name: 'Time & Attendance', icon: <Clock size={20} />, anim: 'group-hover:animate-spin-slow', description: 'Biometric and RFID-based attendance tracking integrated with payroll and HR management systems.' }
    ]
  },
  {
    id: 'av',
    title: 'Audio & Visual',
    icon: <Video size={32} />,
    description: 'Immersive communication and display technologies.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-32 h-32 md:w-40 md:h-40 border border-purple-500/30 rounded-full animate-[ping_2s_linear_infinite]"></div>
        <div className="absolute w-48 h-48 md:w-60 md:h-60 border border-purple-500/20 rounded-full animate-[ping_2s_linear_infinite_1s]"></div>
        <div className="relative z-10 p-6 bg-card/80 backdrop-blur-md rounded-2xl border border-purple-500/40 shadow-2xl">
          <MonitorPlay className="w-16 h-16 md:w-24 md:h-24 text-purple-400" strokeWidth={1} />
        </div>
        <div className="absolute top-10 left-10 md:left-20">
          <Speaker className="w-10 h-10 md:w-12 md:h-12 text-foreground animate-bounce" />
        </div>
        <div className="absolute bottom-10 right-10 md:right-20">
          <Mic2 className="w-8 h-8 md:w-10 md:h-10 text-purple-200" />
        </div>
      </div>
    ),
    items: [
      { name: 'Video Intercom', icon: <Video size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'HD video door stations with two-way communication, mobile app integration, and remote door release.' },
      { name: 'Audio Intercom', icon: <Mic2 size={20} />, anim: 'group-hover:animate-pulse', description: 'Crystal-clear audio communication systems for multi-story buildings and industrial environments.' },
      { name: 'PA Systems', icon: <Speaker size={20} />, anim: 'group-hover:animate-bounce', description: 'Zoned public address and voice evacuation systems for campuses, malls, and large facilities.' },
      { name: 'Video Conferencing', icon: <Users2 size={20} />, anim: 'group-hover:translate-y-1 transition-transform', description: 'Enterprise-grade conferencing solutions with 4K cameras, spatial audio, and wireless presentation.' },
      { name: 'Digital Signage', icon: <MonitorPlay size={20} />, anim: 'group-hover:text-primary transition-colors', description: 'Cloud-managed digital displays for advertising, wayfinding, and real-time information delivery.' },
      { name: 'Video Wall', icon: <LayoutDashboard size={20} />, anim: 'group-hover:scale-105 transition-transform', description: 'Multi-panel display walls with seamless bezels for control rooms, lobbies, and command centers.' }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical Solutions',
    icon: <Zap size={32} />,
    description: 'Comprehensive electrical contracting and lighting.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[300px] md:w-[400px] h-1 bg-yellow-500/20 rotate-45"></div>
          <div className="w-[300px] md:w-[400px] h-1 bg-yellow-500/20 -rotate-45 absolute"></div>
        </div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-full border border-yellow-500/40 shadow-[0_0_60px_rgba(234,179,8,0.2)]">
          <Zap className="w-16 h-16 md:w-20 md:h-20 text-yellow-400 fill-yellow-400 animate-[pulse_0.5s_infinite]" />
        </div>
        <div className="absolute top-0 right-1/3 animate-bounce">
          <Lightbulb className="w-10 h-10 md:w-12 md:h-12 text-foreground" />
        </div>
        <div className="absolute bottom-10 left-10">
          <AlignJustify className="w-10 h-10 md:w-12 md:h-12 text-yellow-200 rotate-90" />
        </div>
      </div>
    ),
    items: [
      { name: 'HT & LT Panels', icon: <Settings2 size={20} />, anim: 'group-hover:rotate-180 transition-transform', description: 'Custom-built high-tension and low-tension electrical panels with safety interlocks and monitoring.' },
      { name: 'Electrification', icon: <Zap size={20} />, anim: 'group-hover:text-yellow-500 transition-colors', description: 'End-to-end electrical wiring and distribution for commercial, industrial, and residential projects.' },
      { name: 'Earthing', icon: <ArrowDown size={20} />, anim: 'group-hover:translate-y-2 transition-transform', description: 'Professional earthing and lightning protection systems ensuring safety and regulatory compliance.' },
      { name: 'Lighting Automation', icon: <Lightbulb size={20} />, anim: 'group-hover:text-yellow-400 transition-all', description: 'Smart lighting control with occupancy sensors, daylight harvesting, and scheduled dimming profiles.' },
      { name: 'Profile Lighting', icon: <AlignJustify size={20} />, anim: 'group-hover:scale-x-110 transition-transform', description: 'Architectural LED profile lighting for facades, corridors, and interior design accents.' },
      { name: 'Panel Lighting', icon: <Square size={20} />, anim: 'group-hover:rotate-90 transition-transform', description: 'Energy-efficient LED panel lights for offices, hospitals, and commercial spaces with uniform illumination.' }
    ]
  },
  {
    id: 'solar',
    title: 'Solar Energy',
    icon: <Sun size={32} />,
    description: 'Sustainable power solutions for a greener future.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-t from-orange-500/10 to-transparent rounded-full animate-pulse"></div>
        <div className="relative z-10 p-0 rounded-full shadow-[0_0_80px_rgba(251,146,60,0.4)]">
          <Sun className="w-24 h-24 md:w-32 md:h-32 text-orange-400 animate-[spin_10s_linear_infinite]" strokeWidth={1} />
        </div>
        <div className="absolute bottom-20 right-20">
          <BatteryCharging className="w-12 h-12 md:w-16 md:h-16 text-primary animate-pulse" />
        </div>
        <div className="absolute top-20 left-10">
          <Factory className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" />
        </div>
      </div>
    ),
    items: [
      { name: 'Solar Power Plants', icon: <Factory size={20} />, anim: 'group-hover:-translate-y-1 transition-transform', description: 'Rooftop and ground-mounted solar installations with net metering for maximum energy savings.' },
      { name: 'Street Lighting', icon: <Lamp size={20} />, anim: 'group-hover:text-yellow-400 transition-colors', description: 'Solar-powered LED street lights with dusk-to-dawn automation and battery backup systems.' },
      { name: 'UPS & Battery', icon: <BatteryCharging size={20} />, anim: 'group-hover:animate-pulse', description: 'Uninterruptible power supply solutions with lithium-ion and tubular battery banks for critical loads.' }
    ]
  },
  {
    id: 'networking',
    title: 'Computer & Networking',
    icon: <Monitor size={32} />,
    description: 'Robust IT infrastructure for business connectivity.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-400"></div>
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-cyan-400"></div>
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-cyan-400"></div>
          <div className="absolute left-1/4 top-0 w-[1px] h-full bg-cyan-400"></div>
        </div>
        <div className="relative z-10 p-6 md:p-8 bg-card/90 backdrop-blur-xl rounded-2xl border border-cyan-500/40 shadow-lg">
          <Globe className="w-16 h-16 md:w-24 md:h-24 text-cyan-400 animate-spin-slow" strokeWidth={0.5} />
        </div>
        <div className="absolute top-10 right-10 animate-bounce">
          <Server className="w-10 h-10 md:w-14 md:h-14 text-foreground" />
        </div>
        <div className="absolute bottom-20 left-20">
          <Share2 className="w-8 h-8 md:w-12 md:h-12 text-cyan-200" />
        </div>
      </div>
    ),
    items: [
      { name: 'System Integration', icon: <Cpu size={20} />, anim: 'group-hover:animate-spin-slow', description: 'End-to-end IT system design, assembly, and deployment including servers, workstations, and peripherals.' },
      { name: 'LAN / WAN', icon: <Globe size={20} />, anim: 'group-hover:rotate-180 transition-transform duration-700', description: 'Structured cabling and network infrastructure with fiber optics, managed switches, and Wi-Fi solutions.' },
      { name: 'IPBX / EPBX', icon: <PhoneCall size={20} />, anim: 'group-hover:animate-wiggle', description: 'IP-based telephony systems with auto-attendant, call recording, and unified communications features.' }
    ]
  },
  {
    id: 'structured-cabling',
    title: 'Structured Cabling Systems',
    icon: <Cable size={32} />,
    description: 'High-performance physical network infrastructure for voice, data, and video.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-teal-500/20 rounded-full animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-teal-500/30 shadow-[0_0_50px_rgba(20,184,166,0.3)]">
          <Cable className="w-16 h-16 md:w-24 md:h-24 text-teal-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'Copper Cabling', icon: <Cable size={20} />, anim: 'group-hover:animate-pulse', description: 'Cat6/Cat6A structured copper cabling for high-speed data transmission across floors and buildings.' },
      { name: 'Fiber Optic Cabling', icon: <Network size={20} />, anim: 'group-hover:animate-bounce', description: 'Single-mode and multi-mode fiber optic backbone cabling for ultra-high bandwidth requirements.' },
      { name: 'Patch Panels & Racks', icon: <Server size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'Professional rack mounting, patch panel termination, and cable management solutions.' }
    ]
  },
  {
    id: 'pa-va',
    title: 'PA & Voice Alarm Systems',
    icon: <Megaphone size={32} />,
    description: 'Announcements, BGM, and emergency voice evacuation systems.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-32 h-32 md:w-40 md:h-40 border border-red-500/30 rounded-full animate-[ping_2s_linear_infinite]"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-red-500/30 shadow-[0_0_50px_rgba(239,68,68,0.3)]">
          <Megaphone className="w-16 h-16 md:w-24 md:h-24 text-red-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'Public Address', icon: <Speaker size={20} />, anim: 'group-hover:animate-bounce', description: 'Zoned PA systems for routine announcements and paging across large facilities.' },
      { name: 'Background Music', icon: <Mic2 size={20} />, anim: 'group-hover:animate-pulse', description: 'Ambient BGM distribution systems for hospitality, retail, and commercial spaces.' },
      { name: 'Voice Evacuation', icon: <BellRing size={20} />, anim: 'group-hover:animate-wiggle', description: 'EN 54-compliant voice alarm systems for automated emergency evacuation messaging.' }
    ]
  },
  {
    id: 'av-systems',
    title: 'Audio-Visual Systems',
    icon: <Presentation size={32} />,
    description: 'Conference, signage, video wall, and entertainment AV solutions.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[250px] h-[250px] md:w-[350px] md:h-[350px] border border-violet-500/20 rounded-xl rotate-12 animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
          <Presentation className="w-16 h-16 md:w-24 md:h-24 text-violet-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'Conference Rooms', icon: <Users2 size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'Integrated AV setups with 4K displays, wireless presentation, and spatial audio for meetings.' },
      { name: 'Digital Signage', icon: <MonitorPlay size={20} />, anim: 'group-hover:animate-pulse', description: 'Cloud-managed digital displays for advertising, wayfinding, and real-time information.' },
      { name: 'Video Walls', icon: <LayoutDashboard size={20} />, anim: 'group-hover:scale-105 transition-transform', description: 'Multi-panel seamless display walls for control rooms, lobbies, and command centers.' }
    ]
  },
  {
    id: 'iptv-smatv',
    title: 'IPTV & SMATV Systems',
    icon: <Tv size={32} />,
    description: 'Television signal reception and distribution for hospitality and commercial properties.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border border-indigo-500/20 rounded-full animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.3)]">
          <Tv className="w-16 h-16 md:w-24 md:h-24 text-indigo-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'IPTV Solutions', icon: <Tv size={20} />, anim: 'group-hover:animate-pulse', description: 'IP-based television distribution with interactive features, VOD, and channel management.' },
      { name: 'SMATV Systems', icon: <Wifi size={20} />, anim: 'group-hover:animate-bounce', description: 'Satellite master antenna TV systems for multi-dwelling units and hotel properties.' },
      { name: 'Content Management', icon: <MonitorPlay size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'Centralized content scheduling and management for hospitality entertainment systems.' }
    ]
  },
  {
    id: 'intercom-telephony',
    title: 'Intercom & Telephony',
    icon: <Phone size={32} />,
    description: 'Internal and external communication systems with IP telephony and video door entry.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[260px] h-[260px] md:w-[360px] md:h-[360px] border border-sky-500/20 rounded-full animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-sky-500/30 shadow-[0_0_50px_rgba(14,165,233,0.3)]">
          <Phone className="w-16 h-16 md:w-24 md:h-24 text-sky-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'IP Telephony', icon: <PhoneCall size={20} />, anim: 'group-hover:animate-wiggle', description: 'VoIP phone systems with auto-attendant, call recording, and unified communications.' },
      { name: 'Video Door Entry', icon: <Video size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'HD video intercom systems with mobile app integration and remote door release.' },
      { name: 'Nurse Call Systems', icon: <BellRing size={20} />, anim: 'group-hover:animate-pulse', description: 'Hospital-grade nurse call and emergency alert systems for healthcare facilities.' }
    ]
  },
  {
    id: 'network-architecture',
    title: 'Network Architecture Design',
    icon: <NetworkIcon size={32} />,
    description: 'LAN, WAN, and WLAN planning for high-bandwidth seamless connectivity.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-full h-full opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-emerald-400"></div>
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-emerald-400"></div>
        </div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-emerald-500/30 shadow-[0_0_50px_rgba(16,185,129,0.3)]">
          <NetworkIcon className="w-16 h-16 md:w-24 md:h-24 text-emerald-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'LAN Design', icon: <Network size={20} />, anim: 'group-hover:animate-pulse', description: 'High-performance local area network architecture with managed switches and segmentation.' },
      { name: 'WAN Design', icon: <Globe size={20} />, anim: 'group-hover:rotate-180 transition-transform duration-700', description: 'Wide area network planning with SD-WAN, MPLS, and redundant connectivity.' },
      { name: 'WLAN Solutions', icon: <Wifi size={20} />, anim: 'group-hover:animate-bounce', description: 'Enterprise wireless network design with heat mapping, roaming, and high-density coverage.' }
    ]
  },
  {
    id: 'it-infrastructure',
    title: 'IT Infrastructure',
    icon: <ServerCog size={32} />,
    description: 'Selection, configuration, and installation of routers, switches, firewalls, and servers.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] border border-blue-500/20 rounded-xl rotate-45 animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-blue-500/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
          <ServerCog className="w-16 h-16 md:w-24 md:h-24 text-blue-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'Server Solutions', icon: <Server size={20} />, anim: 'group-hover:animate-pulse', description: 'Enterprise server deployment, virtualization, and data center infrastructure setup.' },
      { name: 'Network Hardware', icon: <Cpu size={20} />, anim: 'group-hover:animate-spin-slow', description: 'Routers, managed switches, and firewall appliances for secure network operations.' },
      { name: 'Storage Solutions', icon: <ServerCog size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'NAS, SAN, and cloud storage integration for data backup and disaster recovery.' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Measures',
    icon: <ShieldAlert size={32} />,
    description: 'Network security design, policy enforcement, and threat protection.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border-2 border-rose-500/20 rounded-full animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-rose-500/30 shadow-[0_0_50px_rgba(244,63,94,0.3)]">
          <ShieldAlert className="w-16 h-16 md:w-24 md:h-24 text-rose-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'Firewall & IDS', icon: <ShieldCheck size={20} />, anim: 'group-hover:animate-pulse', description: 'Next-generation firewalls and intrusion detection systems for perimeter defense.' },
      { name: 'Access Policies', icon: <Lock size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'Role-based access control, network segmentation, and zero-trust policy enforcement.' },
      { name: 'Threat Monitoring', icon: <ScanLine size={20} />, anim: 'group-hover:animate-ping', description: 'Real-time threat monitoring, vulnerability assessment, and incident response planning.' }
    ]
  },
  {
    id: 'cloud-integration',
    title: 'Cloud Integration',
    icon: <Cloud size={32} />,
    description: 'On-premises, cloud, and hybrid environment integration for secure data flow.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-t from-sky-500/10 to-transparent rounded-full animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-sky-500/30 shadow-[0_0_50px_rgba(14,165,233,0.3)]">
          <Cloud className="w-16 h-16 md:w-24 md:h-24 text-sky-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'Hybrid Cloud', icon: <Cloud size={20} />, anim: 'group-hover:animate-bounce', description: 'Seamless integration of on-premises infrastructure with public and private cloud platforms.' },
      { name: 'Data Migration', icon: <ArrowUpDown size={20} />, anim: 'group-hover:translate-y-1 transition-transform', description: 'Secure data migration strategies with minimal downtime and data integrity verification.' },
      { name: 'Cloud Security', icon: <ShieldCheck size={20} />, anim: 'group-hover:animate-pulse', description: 'Cloud access security, encryption, and compliance management for multi-cloud environments.' }
    ]
  },
  {
    id: 'it-project-management',
    title: 'IT Project Management',
    icon: <ClipboardList size={32} />,
    description: 'End-to-end procurement, installation, and commissioning of IT equipment.',
    renderHeroVisual: () => (
      <div className="relative flex items-center justify-center w-full h-full">
        <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] border border-amber-500/20 rounded-xl animate-pulse"></div>
        <div className="relative z-10 p-6 md:p-8 bg-card/80 backdrop-blur-md rounded-2xl border border-amber-500/30 shadow-[0_0_50px_rgba(245,158,11,0.3)]">
          <ClipboardList className="w-16 h-16 md:w-24 md:h-24 text-amber-400" strokeWidth={1} />
        </div>
      </div>
    ),
    items: [
      { name: 'Procurement', icon: <ClipboardList size={20} />, anim: 'group-hover:scale-110 transition-transform', description: 'Strategic IT procurement with vendor evaluation, negotiation, and supply chain management.' },
      { name: 'Installation & Commissioning', icon: <Settings2 size={20} />, anim: 'group-hover:rotate-180 transition-transform', description: 'Professional installation, testing, and commissioning of all IT systems and equipment.' },
      { name: 'Vendor Coordination', icon: <Users2 size={20} />, anim: 'group-hover:animate-pulse', description: 'Multi-vendor project coordination ensuring timely delivery and seamless integration.' }
    ]
  }
];
