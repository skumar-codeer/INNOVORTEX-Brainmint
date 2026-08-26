'use client';

import React from 'react';
import { useDashboardMock } from '@/hooks/use-dashboard-mock';
import { StatusIndicator } from '@/components/ui/StatusIndicator';
import { EventLog } from './EventLog';
import { Button } from '@/components/ui/Button';
import { Camera, Cpu, Radio, ShieldCheck, Zap, Activity } from 'lucide-react';

export const DashboardMockup: React.FC = () => {
  const { telemetry, events, triggerSimulatedEvent } = useDashboardMock();

  return (
    <div className="w-full max-w-5xl mx-auto my-12 bg-brand-cardDark border border-brand-borderDark rounded-xl shadow-2xl overflow-hidden">
      {/* Header Bar */}
      <div className="bg-[#050D18] px-6 py-4 border-b border-brand-borderDark flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-brand-cyan shadow-sm shadow-brand-cyan" />
          <h3 className="font-heading font-bold text-lg text-white">SafeEdge™ Live Console</h3>
          <span className="text-xs font-mono text-brand-mutedDark border-l border-brand-borderDark pl-3">
            Node ID: SE-RPI5-0091
          </span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-brand-dark px-3 py-1.5 rounded border border-brand-borderDark">
            <span className="text-xs font-mono text-gray-400">SYSTEM STATUS:</span>
            <span className="text-xs font-mono font-bold text-brand-accent flex items-center">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" /> OK
            </span>
          </div>
          <Button variant="outline" size="sm" onClick={triggerSimulatedEvent}>
            <Zap className="w-3.5 h-3.5 mr-1" /> Trigger Test Alert
          </Button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sensor & Telemetry Status Cards (2 cols on desktop) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-mono tracking-widest text-brand-cyan uppercase">Live Hardware Status</h4>
            <span className="text-[11px] font-mono text-gray-500">Last Ping: {telemetry.lastPingTimestamp}</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {/* Camera */}
            <div className="p-4 rounded-lg bg-brand-dark/80 border border-brand-borderDark flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <Camera className="w-5 h-5 text-brand-cyan" />
                <StatusIndicator status={telemetry.cameraStatus} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400">Camera Feed</div>
                <div className="text-sm font-bold text-white font-heading">HDR Optics</div>
              </div>
            </div>

            {/* Edge AI */}
            <div className="p-4 rounded-lg bg-brand-dark/80 border border-brand-borderDark flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <Cpu className="w-5 h-5 text-brand-cyan" />
                <StatusIndicator status="active" label="Running" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400">Edge AI</div>
                <div className="text-sm font-bold text-white font-heading">RPi 5 Neural</div>
              </div>
            </div>

            {/* PIR */}
            <div className="p-4 rounded-lg bg-brand-dark/80 border border-brand-borderDark flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <Activity className="w-5 h-5 text-brand-cyan" />
                <StatusIndicator status={telemetry.pirStatus} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400">PIR Sensor</div>
                <div className="text-sm font-bold text-white font-heading">Active Heat</div>
              </div>
            </div>

            {/* GSM */}
            <div className="p-4 rounded-lg bg-brand-dark/80 border border-brand-borderDark flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 mb-2">
                <Radio className="w-5 h-5 text-brand-cyan" />
                <StatusIndicator status={telemetry.gsmStatus} />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400">GSM Modem</div>
                <div className="text-sm font-bold text-white font-heading">Dual SIM</div>
              </div>
            </div>
          </div>

          {/* Privacy & Hardware Metrics */}
          <div className="p-4 rounded-lg bg-brand-dark/40 border border-brand-borderDark/60 flex flex-wrap items-center justify-between text-xs font-mono text-gray-400 gap-4">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent"></span>
              <span>Zero-Cloud Retention: <strong className="text-white">Active (0 raw frames stored)</strong></span>
            </div>
            <div>Inference Frame Rate: <strong className="text-brand-cyan">30 FPS</strong></div>
            <div>Power Input: <strong className="text-white">12.4V DC (Battery Backup OK)</strong></div>
          </div>
        </div>

        {/* Live Event Stream Panel */}
        <div className="bg-brand-dark/90 border border-brand-borderDark rounded-lg p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-brand-borderDark">
              <h4 className="text-xs font-mono tracking-widest text-brand-cyan uppercase flex items-center">
                <Activity className="w-3.5 h-3.5 mr-1.5" /> Recent Events
              </h4>
              <span className="text-[10px] font-mono bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded">
                Live Feed
              </span>
            </div>
            <EventLog events={events} />
          </div>

          <div className="pt-4 mt-4 border-t border-brand-borderDark/60 text-[11px] font-mono text-brand-mutedDark text-center">
            Architected for future REST / WebSocket API integration.
          </div>
        </div>
      </div>
    </div>
  );
};
