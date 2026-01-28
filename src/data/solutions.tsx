import React from 'react';
import {
  ShieldCheck, Cpu, Lock, Video, Zap, Sun, Monitor,
  Camera, Wifi, ScanLine, Footprints, Flame, BellRing,
  DoorOpen, ArrowDownToLine, Slash, MoveHorizontal, Columns, Car,
  Network, LayoutGrid, KeyRound, ArrowUpDown, UserCheck, Clock,
  Mic2, Speaker, Users2, MonitorPlay, LayoutDashboard,
  Settings2, ArrowDown, Lightbulb, AlignJustify, Square,
  Factory, Lamp, BatteryCharging, Globe, PhoneCall, Server, Share2
} from 'lucide-react';

export interface SolutionItem {
  name: string;
  icon: React.ReactNode;
  anim: string;
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
      { name: 'AHD Surveillance', icon: <Camera size={20} />, anim: 'group-hover:animate-bounce' },
      { name: 'IP Surveillance', icon: <Wifi size={20} />, anim: 'group-hover:animate-pulse' },
      { name: 'Video Analytics', icon: <ScanLine size={20} />, anim: 'group-hover:animate-ping' },
      { name: 'Intrusion Detection', icon: <Footprints size={20} />, anim: 'group-hover:animate-bounce' },
      { name: 'Fire Detection', icon: <Flame size={20} />, anim: 'group-hover:animate-pulse text-destructive' },
      { name: 'Burglar Alarm', icon: <BellRing size={20} />, anim: 'group-hover:animate-wiggle' }
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
      { name: 'Gate Opener', icon: <DoorOpen size={20} />, anim: 'group-hover:-translate-x-1 transition-transform' },
      { name: 'Rolling Shutter', icon: <ArrowDownToLine size={20} />, anim: 'group-hover:translate-y-1 transition-transform' },
      { name: 'Barrier/Bollard', icon: <Slash size={20} className="rotate-90" />, anim: 'group-hover:rotate-180 transition-transform' },
      { name: 'Sliding Glass Door', icon: <MoveHorizontal size={20} />, anim: 'group-hover:scale-x-125 transition-transform' },
      { name: 'Flap Barrier', icon: <Columns size={20} />, anim: 'group-hover:scale-110 transition-transform' },
      { name: 'Vehicle Entrance', icon: <Car size={20} />, anim: 'group-hover:translate-x-2 transition-transform' }
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
      { name: 'Networked Access', icon: <Network size={20} />, anim: 'group-hover:animate-pulse' },
      { name: 'Multi-Door Control', icon: <LayoutGrid size={20} />, anim: 'group-hover:rotate-90 transition-transform' },
      { name: 'Standalone Access', icon: <KeyRound size={20} />, anim: 'group-hover:rotate-45 transition-transform' },
      { name: 'Elevator Control', icon: <ArrowUpDown size={20} />, anim: 'group-hover:translate-y-1 transition-transform' },
      { name: 'Visitor Management', icon: <UserCheck size={20} />, anim: 'group-hover:scale-110 transition-transform' },
      { name: 'Time & Attendance', icon: <Clock size={20} />, anim: 'group-hover:animate-spin-slow' }
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
      { name: 'Video Intercom', icon: <Video size={20} />, anim: 'group-hover:scale-110 transition-transform' },
      { name: 'Audio Intercom', icon: <Mic2 size={20} />, anim: 'group-hover:animate-pulse' },
      { name: 'PA Systems', icon: <Speaker size={20} />, anim: 'group-hover:animate-bounce' },
      { name: 'Video Conferencing', icon: <Users2 size={20} />, anim: 'group-hover:translate-y-1 transition-transform' },
      { name: 'Digital Signage', icon: <MonitorPlay size={20} />, anim: 'group-hover:text-primary transition-colors' },
      { name: 'Video Wall', icon: <LayoutDashboard size={20} />, anim: 'group-hover:scale-105 transition-transform' }
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
      { name: 'HT & LT Panels', icon: <Settings2 size={20} />, anim: 'group-hover:rotate-180 transition-transform' },
      { name: 'Electrification', icon: <Zap size={20} />, anim: 'group-hover:text-yellow-500 transition-colors' },
      { name: 'Earthing', icon: <ArrowDown size={20} />, anim: 'group-hover:translate-y-2 transition-transform' },
      { name: 'Lighting Automation', icon: <Lightbulb size={20} />, anim: 'group-hover:text-yellow-400 transition-all' },
      { name: 'Profile Lighting', icon: <AlignJustify size={20} />, anim: 'group-hover:scale-x-110 transition-transform' },
      { name: 'Panel Lighting', icon: <Square size={20} />, anim: 'group-hover:rotate-90 transition-transform' }
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
      { name: 'Solar Power Plants', icon: <Factory size={20} />, anim: 'group-hover:-translate-y-1 transition-transform' },
      { name: 'Street Lighting', icon: <Lamp size={20} />, anim: 'group-hover:text-yellow-400 transition-colors' },
      { name: 'UPS & Battery', icon: <BatteryCharging size={20} />, anim: 'group-hover:animate-pulse' }
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
      { name: 'System Integration', icon: <Cpu size={20} />, anim: 'group-hover:animate-spin-slow' },
      { name: 'LAN / WAN', icon: <Globe size={20} />, anim: 'group-hover:rotate-180 transition-transform duration-700' },
      { name: 'IPBX / EPBX', icon: <PhoneCall size={20} />, anim: 'group-hover:animate-wiggle' }
    ]
  }
];
