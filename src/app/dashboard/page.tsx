import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { EventLog } from '@/components/dashboard/EventLog';
import {
  Camera,
  Cpu,
  Radio,
  Bell,
  Activity,
  ShieldCheck,
  ArrowRight,
  ArrowDown,
  Monitor,
  Volume2,
  Vibrate,
  Info,
} from 'lucide-react';
import { SecurityEventLog } from '@/types';

export const metadata = {
  title: 'SafeEdge™ Sentinel Dashboard Demo | INNOVORTEX',
  description: 'Frontend-only console demo for SafeEdge™ Edge AI Safety & Alert Platform.',
};

const DEMO_EVENTS: SecurityEventLog[] = [
  {
    id: 'evt-2041-3',
    timestamp: '20:41',
    eventType: 'Safety Alert Triggered',
    severity: 'warning',
    locationTag: 'Zone 1 - Perimeter Node SE-RP5-01',
    details: 'Strobe activated & emergency GSM message dispatched.',
  },
  {
    id: 'evt-2041-2',
    timestamp: '20:41',
    eventType: 'Analysis Completed',
    severity: 'info',
    locationTag: 'Zone 1 - Local Neural Engine',
    details: 'On-device CV evaluated frame. Verified human intrusion condition.',
  },
  {
    id: 'evt-2041-1',
    timestamp: '20:41',
    eventType: 'Motion Detected',
    severity: 'info',
    locationTag: 'Zone 1 - Optical & PIR Sensor',
    details: 'PIR sensor triggered thermal signature above threshold.',
  },
  {
    id: 'evt-2038',
    timestamp: '20:38',
    eventType: 'System Check',
    severity: 'info',
    locationTag: 'System Health Self-Diagnostic',
    details: 'Autonomous hardware test completed. All micro-relays operational.',
  },
  {
    id: 'evt-2035',
    timestamp: '20:35',
    eventType: 'Analysis Completed',
    severity: 'info',
    locationTag: 'Zone 1 - Optical Module',
    details: 'Camera active. Local optical frame processing initialized.',
  },
];

export default function DashboardDemoPage() {
  return (
    <div className="pt-20 bg-brand-dark min-h-screen text-white">
      {/* Demo Environment Disclaimer Banner */}
      <div className="bg-brand-cyan/10 border-b border-brand-cyan/30 py-2.5 px-4">
        <Container>
          <div className="flex items-center justify-center space-x-2 text-center text-xs font-mono text-brand-cyan">
            <Info className="w-4 h-4 shrink-0" />
            <span>
              <strong>Demo Environment:</strong> Frontend-only simulation using static mock data. Not connected to live hardware or cloud servers.
            </span>
          </div>
        </Container>
      </div>

      <Section theme="dark" className="py-8 sm:py-12">
        <Container>
          {/* Dashboard Header Bar */}
          <div className="p-6 rounded-2xl bg-brand-cardDark border border-brand-borderDark shadow-2xl mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/40 flex items-center justify-center text-brand-cyan">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold font-heading text-white">INNOVORTEX SENTINEL</h1>
                  <Badge variant="cyan">SAFEEDGE™ DEMO</Badge>
                </div>
                <p className="text-xs font-mono text-brand-mutedDark mt-0.5">
                  Node Identifier: SE-RPI5-0091 • Hardware Revision 1.2
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-brand-dark/90 px-4 py-2 rounded-xl border border-brand-borderDark">
              <span className="text-xs font-mono text-gray-400">STATUS:</span>
              <span className="text-xs font-mono font-bold text-brand-accent flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse mr-2" />
                SYSTEM OK
              </span>
            </div>
          </div>

          {/* Main Dashboard Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column (8 cols on desktop): Live Status Cards & System Pipeline */}
            <div className="lg:col-span-8 space-y-8">
              {/* LIVE STATUS SECTION */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xs font-mono tracking-widest text-brand-cyan uppercase font-semibold">
                    LIVE HARDWARE STATUS
                  </h2>
                  <span className="text-[11px] font-mono text-gray-500">Static Telemetry Benchmark</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {/* Card 1: CAMERA */}
                  <Card variant="dark" className="p-5 space-y-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <Camera className="w-5 h-5 text-brand-cyan" />
                      <StatusIndicator status="active" label="Active" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase">CAMERA</div>
                      <div className="text-sm font-bold font-heading text-white mt-0.5">HDR Optics</div>
                    </div>
                  </Card>

                  {/* Card 2: EDGE AI */}
                  <Card variant="dark" className="p-5 space-y-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <Cpu className="w-5 h-5 text-brand-accent" />
                      <StatusIndicator status="active" label="Running" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase">EDGE AI</div>
                      <div className="text-sm font-bold font-heading text-white mt-0.5">Raspberry Pi 5</div>
                    </div>
                  </Card>

                  {/* Card 3: PIR */}
                  <Card variant="dark" className="p-5 space-y-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <Activity className="w-5 h-5 text-brand-cyan" />
                      <StatusIndicator status="monitoring" label="Monitoring" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase">PIR</div>
                      <div className="text-sm font-bold font-heading text-white mt-0.5">Thermal Sensing</div>
                    </div>
                  </Card>

                  {/* Card 4: GSM */}
                  <Card variant="dark" className="p-5 space-y-3 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <Radio className="w-5 h-5 text-brand-alert" />
                      <StatusIndicator status="connected" label="Connected" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-gray-400 uppercase">GSM</div>
                      <div className="text-sm font-bold font-heading text-white mt-0.5">Cellular Modem</div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* SYSTEM PIPELINE & ALERT CHANNELS SECTION */}
              <Card variant="dark" className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-brand-borderDark pb-4">
                  <div>
                    <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">PROCESS PIPELINE</span>
                    <h3 className="text-lg font-bold font-heading text-white mt-0.5">
                      SafeEdge™ Hardware Flow &amp; Output Channels
                    </h3>
                  </div>
                  <Badge variant="cyan">5-Node Pipeline</Badge>
                </div>

                {/* Pipeline Flow Visualization */}
                <div className="p-5 rounded-xl bg-brand-dark/90 border border-brand-borderDark space-y-4">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-xs text-center">
                    <div className="px-3.5 py-2 rounded-lg bg-brand-cardDark border border-brand-borderDark w-full md:w-auto">
                      <span className="text-brand-cyan font-bold block">CAMERA</span>
                      <span className="text-[10px] text-gray-400">Optical Sensor</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
                    <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />

                    <div className="px-3.5 py-2 rounded-lg bg-brand-cardDark border border-brand-borderDark w-full md:w-auto">
                      <span className="text-brand-cyan font-bold block">PIR</span>
                      <span className="text-[10px] text-gray-400">Motion Trigger</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
                    <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />

                    <div className="px-3.5 py-2 rounded-lg bg-brand-cardDark border border-brand-accent/40 w-full md:w-auto">
                      <span className="text-brand-accent font-bold block">EDGE AI</span>
                      <span className="text-[10px] text-gray-400">RPi 5 Neural Core</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
                    <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />

                    <div className="px-3.5 py-2 rounded-lg bg-brand-cardDark border border-brand-borderDark w-full md:w-auto">
                      <span className="text-white font-bold block">SAFETY DECISION</span>
                      <span className="text-[10px] text-gray-400">Logic Matrix</span>
                    </div>

                    <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
                    <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />

                    <div className="px-3.5 py-2 rounded-lg bg-brand-cardDark border border-brand-alert/40 w-full md:w-auto">
                      <span className="text-brand-alert font-bold block">ALERT</span>
                      <span className="text-[10px] text-gray-400">Multimodal Output</span>
                    </div>
                  </div>
                </div>

                {/* Multimodal Alert Output Channels Grid */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400 block">
                    Active Multimodal Alert Output Channels:
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {/* VISUAL */}
                    <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-brand-borderDark flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
                        <Monitor className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-white uppercase">VISUAL</div>
                        <div className="text-[10px] font-mono text-brand-mutedDark">Strobe Light</div>
                      </div>
                    </div>

                    {/* AUDIO */}
                    <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-brand-borderDark flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-alert/10 text-brand-alert flex items-center justify-center shrink-0">
                        <Volume2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-white uppercase">AUDIO</div>
                        <div className="text-[10px] font-mono text-brand-mutedDark">105dB Siren</div>
                      </div>
                    </div>

                    {/* VIBRATION */}
                    <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-brand-borderDark flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-accent/10 text-brand-accent flex items-center justify-center shrink-0">
                        <Vibrate className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-white uppercase">VIBRATION</div>
                        <div className="text-[10px] font-mono text-brand-mutedDark">Tactile Relay</div>
                      </div>
                    </div>

                    {/* GSM */}
                    <div className="p-3.5 rounded-xl bg-brand-dark/80 border border-brand-borderDark flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 text-brand-cyan flex items-center justify-center shrink-0">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-mono font-bold text-white uppercase">GSM</div>
                        <div className="text-[10px] font-mono text-brand-mutedDark">SMS Dispatch</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column (4 cols on desktop): Recent Events Stream */}
            <div className="lg:col-span-4">
              <Card variant="dark" className="p-6 space-y-6 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-brand-borderDark pb-3">
                    <div className="flex items-center space-x-2">
                      <Bell className="w-4 h-4 text-brand-cyan" />
                      <h3 className="text-sm font-bold font-heading text-white">RECENT EVENTS</h3>
                    </div>
                    <Badge variant="cyan">Mock Stream</Badge>
                  </div>

                  {/* Event Log component displaying realistic static events */}
                  <EventLog events={DEMO_EVENTS} />
                </div>

                <div className="pt-4 border-t border-brand-borderDark/80 text-[11px] font-mono text-brand-mutedDark text-center">
                  Static mock events timeline. Built for frontend presentation.
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
