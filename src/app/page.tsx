import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import {
  Camera,
  Cpu,
  Bell,
  ArrowDown,
  ArrowRight,
  Zap,
  Volume2,
  Vibrate,
  Monitor,
  Activity,
  ShieldCheck,
  GraduationCap,
  Building2,
  Hospital,
  Landmark,
  WifiOff,
  Mic,
  Play,
  FileText,
  Smartphone,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-[#05070D] text-[#F5F7FF] overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <Section theme="dark" className="pt-28 pb-20 sm:pt-36 sm:pb-28 relative overflow-hidden">
        {/* Ambient Radial Glow & Tech Grid */}
        <div className="absolute inset-0 radial-glow-blue pointer-events-none" />
        <div className="absolute inset-0 radial-glow-purple pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Headline Area (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#35C8FF]/10 border border-[#35C8FF]/30 text-[#35C8FF] text-xs font-mono tracking-widest uppercase shadow-sm">
                <span>EDGE AI · REAL-TIME · PRIVACY-FIRST</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-[#F5F7FF] tracking-tight leading-[1.1]">
                Multimodal AI for{' '}
                <span className="bg-gradient-to-r from-[#35C8FF] via-[#8B5CF6] to-[#22D3EE] bg-clip-text text-transparent">
                  Women&apos;s Safety
                </span>
                , running entirely on the edge.
              </h1>

              <p className="text-base sm:text-lg text-[#9DA7BC] font-body leading-relaxed max-w-2xl">
                INNOVORTEX fuses voice, visual and motion signals on a single low-power edge device — detecting distress in real time without sending raw audio or video to the cloud.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/technology" variant="primary" size="lg">
                  Explore Project <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/resources" variant="secondary" size="lg">
                  Download Proposal
                </Button>
                <Button href="/dashboard" variant="outline" size="lg">
                  Watch Prototype
                </Button>
              </div>
            </div>

            {/* Right Multimodal AI Core Visual Architecture (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0B1020] border border-[#182238] shadow-2xl shadow-black/80 space-y-4 relative">
                <div className="flex items-center justify-between pb-3 border-b border-[#182238]">
                  <span className="text-xs font-mono tracking-widest text-[#35C8FF] uppercase">Node Architecture</span>
                  <Badge variant="cyan">Multimodal Core</Badge>
                </div>

                {/* 3 Sensing Input Nodes */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-2xl bg-[#05070D] border border-[#182238] text-center space-y-1">
                    <Mic className="w-4 h-4 text-[#35C8FF] mx-auto" />
                    <span className="text-[10px] font-mono font-bold text-[#F5F7FF] block">VOICE</span>
                    <span className="text-[9px] font-mono text-[#9DA7BC] block">Acoustic</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#05070D] border border-[#182238] text-center space-y-1">
                    <Camera className="w-4 h-4 text-[#8B5CF6] mx-auto" />
                    <span className="text-[10px] font-mono font-bold text-[#F5F7FF] block">VISUAL</span>
                    <span className="text-[9px] font-mono text-[#9DA7BC] block">Optics</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#05070D] border border-[#182238] text-center space-y-1">
                    <Activity className="w-4 h-4 text-[#22D3EE] mx-auto" />
                    <span className="text-[10px] font-mono font-bold text-[#F5F7FF] block">MOTION</span>
                    <span className="text-[9px] font-mono text-[#9DA7BC] block">IMU/PIR</span>
                  </div>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-[#35C8FF]/70 py-0.5">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Central AI Core */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#05070D] via-[#080B14] to-[#05070D] border border-[#35C8FF]/40 shadow-lg shadow-[#35C8FF]/10 text-center space-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#35C8FF]/10 border border-[#35C8FF]/40 flex items-center justify-center text-[#35C8FF] mx-auto mb-1 animate-pulse">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#35C8FF] uppercase tracking-wider block">MULTIMODAL AI CORE</span>
                  <span className="text-[10px] font-mono text-[#9DA7BC] block">On-Chip Signal Quantization &amp; Fusion</span>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-[#8B5CF6]/70 py-0.5">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Distress Analysis */}
                <div className="p-3.5 rounded-2xl bg-[#05070D] border border-[#182238] flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Zap className="w-4 h-4 text-[#8B5CF6]" />
                    <span className="text-xs font-mono font-bold text-[#F5F7FF]">THREAT / DISTRESS ANALYSIS</span>
                  </div>
                  <Badge variant="accent">Sub-100ms</Badge>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-[#39E58C]/70 py-0.5">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Alert Output */}
                <div className="p-3.5 rounded-2xl bg-[#05070D] border border-[#39E58C]/40 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <Bell className="w-4 h-4 text-[#39E58C]" />
                    <span className="text-xs font-mono font-bold text-[#39E58C]">MULTIMODAL ALERT DISPATCH</span>
                  </div>
                  <Badge variant="alert">Output</Badge>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. SECTION 2 — OUR PROJECT */}
      <Section theme="dark" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="// OUR PROJECT"
            title="One edge device. Three senses. One decision."
            subtitle="Most safety apps depend on a phone, a network connection, and a person remembering to open them. INNOVORTEX is a self-contained edge device that watches, listens, and feels — and only speaks up when it matters."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 01 */}
            <Card variant="dark" className="p-8 space-y-4">
              <span className="text-3xl font-extrabold font-mono text-[#35C8FF]">01</span>
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">MULTIMODAL SIGNAL FUSION</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Voice tone, gesture and body-motion streams are fused in real time so a single ambiguous signal never triggers a false alarm.
              </p>
            </Card>

            {/* Card 02 */}
            <Card variant="dark" className="p-8 space-y-4">
              <span className="text-3xl font-extrabold font-mono text-[#8B5CF6]">02</span>
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">ON-DEVICE THREAT DETECTION</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                A compact deep learning model runs entirely on the edge chip, recognising distress patterns without streaming audio or video anywhere.
              </p>
            </Card>

            {/* Card 03 */}
            <Card variant="dark" className="p-8 space-y-4">
              <span className="text-3xl font-extrabold font-mono text-[#39E58C]">03</span>
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">ACCESSIBILITY ALERTS</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Haptic, visual and silent-SMS alert paths make the device usable by people with hearing or speech impairments, in any environment.
              </p>
            </Card>

            {/* Card 04 */}
            <Card variant="dark" className="p-8 space-y-4">
              <span className="text-3xl font-extrabold font-mono text-[#22D3EE]">04</span>
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">PRIVACY BY ARCHITECTURE</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                No raw audio or video ever leaves the device — only an anonymised alert event is transmitted.
              </p>
            </Card>

            {/* Card 05 */}
            <Card variant="dark" className="p-8 space-y-4">
              <span className="text-3xl font-extrabold font-mono text-[#FFB547]">05</span>
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">OFFLINE-FIRST</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Inference and alert triggering work without network connectivity; escalation happens when connectivity returns.
              </p>
            </Card>

            {/* Card 06 */}
            <Card variant="dark" className="p-8 space-y-4">
              <span className="text-3xl font-extrabold font-mono text-[#35C8FF]">06</span>
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">LOW-POWER EDGE HARDWARE</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Optimised for constrained edge processors and designed for continuous operation.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 3. SECTION 3 — HOW IT WORKS */}
      <Section theme="surface" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="// FROM SENSE TO RESPONSE"
            title="Four stages. One intelligent decision."
            subtitle="Autonomous real-time decision pipeline operating continuously at physical edge boundaries."
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Stage 01 */}
            <Card variant="feature" className="p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#35C8FF]">01</span>
                <Badge variant="cyan">SENSE</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Capture</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">
                Mic, camera and IMU sample audio, visual and motion data continuously on-device.
              </p>
            </Card>

            {/* Stage 02 */}
            <Card variant="feature" className="p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#8B5CF6]">02</span>
                <Badge variant="accent">FUSE</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Multimodal Fusion</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">
                Signals are aligned and merged into a single situational representation.
              </p>
            </Card>

            {/* Stage 03 */}
            <Card variant="feature" className="p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#39E58C]">03</span>
                <Badge variant="alert">INFER</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Edge Inference</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">
                A lightweight deep learning model classifies the fused signal in real time.
              </p>
            </Card>

            {/* Stage 04 */}
            <Card variant="feature" className="p-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#FFB547]">04</span>
                <Badge variant="neutral">ALERT</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Respond</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">
                Confirmed distress events trigger haptic, local and remote alerts instantly.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 4. SECTION 4 — PROTOTYPE PREVIEW */}
      <Section theme="dark" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="// PROTOTYPE PREVIEW"
            title="Prototype Demonstration"
            subtitle="Watch our AI-powered edge device prototype demonstrating real-time multimodal analysis for women's safety — intelligent threat detection, accessibility alerts, and privacy-preserving edge AI processing."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left Video / Demo Player Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl bg-[#0B1020] border border-[#182238] shadow-2xl p-8 sm:p-12 text-center overflow-hidden group">
                <div className="w-16 h-16 rounded-full bg-[#35C8FF]/20 border border-[#35C8FF]/40 text-[#35C8FF] flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="text-xl font-bold font-heading text-[#F5F7FF] mb-2">Watch SafeEdge™ Interactive Console Demo</h4>
                <p className="text-xs font-mono text-[#9DA7BC]">Click to open full frontend hardware console dashboard</p>
                <div className="pt-6">
                  <Button href="/dashboard" variant="primary" size="md">
                    Launch Interactive Demo Console
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Walkthrough Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-[#F5F7FF]">
                End-to-End Multimodal Briefing
              </h3>

              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                An end-to-end walkthrough of signal fusion, on-device inference and alert dispatch across physical perimeters.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-[#0B1020] border border-[#182238] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9DA7BC]">LATENCY BENCHMARK:</span>
                  <span className="text-[#35C8FF] font-bold">REAL-TIME INFERENCE</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0B1020] border border-[#182238] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9DA7BC]">PROCESSING ISOLATION:</span>
                  <span className="text-[#39E58C] font-bold">ON-DEVICE ONLY</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#0B1020] border border-[#182238] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#9DA7BC]">OFF-GRID RESILIENCE:</span>
                  <span className="text-[#FFB547] font-bold">OFFLINE-FIRST</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. SECTION 5 — TECHNOLOGY */}
      <Section theme="surface" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="// TECHNOLOGY"
            title="Built to think at the edge."
            subtitle="Deep-tech hardware and neural model pipeline powering SafeEdge™ platform."
          />

          {/* Complete 5-Node Visual Flow Architecture */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1020] border border-[#182238] shadow-2xl max-w-5xl mx-auto space-y-8">
            <div className="text-xs font-mono text-[#35C8FF] tracking-widest uppercase text-center font-bold">
              END-TO-END SYSTEM PIPELINE
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 font-mono text-xs text-center">
              <div className="px-4 py-2.5 rounded-2xl bg-[#05070D] border border-[#182238] text-[#F5F7FF] w-full md:w-auto">
                <span className="text-[#35C8FF] font-bold block">INPUT</span>
                <span className="text-[10px] text-[#9DA7BC]">Mic / Camera / IMU</span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#35C8FF] hidden md:block" />
              <ArrowDown className="w-4 h-4 text-[#35C8FF] md:hidden" />

              <div className="px-4 py-2.5 rounded-2xl bg-[#05070D] border border-[#182238] text-[#F5F7FF] w-full md:w-auto">
                <span className="text-[#8B5CF6] font-bold block">EDGE DEVICE</span>
                <span className="text-[10px] text-[#9DA7BC]">Low-Power Compute</span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#35C8FF] hidden md:block" />
              <ArrowDown className="w-4 h-4 text-[#35C8FF] md:hidden" />

              <div className="px-4 py-2.5 rounded-2xl bg-[#05070D] border border-[#182238] text-[#F5F7FF] w-full md:w-auto">
                <span className="text-[#35C8FF] font-bold block">AI PIPELINE</span>
                <span className="text-[10px] text-[#9DA7BC]">Fusion &amp; Model</span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#35C8FF] hidden md:block" />
              <ArrowDown className="w-4 h-4 text-[#35C8FF] md:hidden" />

              <div className="px-4 py-2.5 rounded-2xl bg-[#05070D] border border-[#182238] text-[#F5F7FF] w-full md:w-auto">
                <span className="text-[#39E58C] font-bold block">DECISION</span>
                <span className="text-[10px] text-[#9DA7BC]">Safety Event</span>
              </div>

              <ArrowRight className="w-4 h-4 text-[#35C8FF] hidden md:block" />
              <ArrowDown className="w-4 h-4 text-[#35C8FF] md:hidden" />

              <div className="px-4 py-2.5 rounded-2xl bg-[#05070D] border border-[#182238] text-[#F5F7FF] w-full md:w-auto">
                <span className="text-[#FFB547] font-bold block">ALERT LAYER</span>
                <span className="text-[10px] text-[#9DA7BC]">Haptic/Visual/Audio/GSM</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. SECTION 6 — WHY EDGE */}
      <Section theme="dark" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            title="Why intelligence belongs on the edge."
            subtitle="Processing neural networks at the hardware boundary eliminates cloud bottlenecks and protects privacy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* LOW LATENCY */}
            <Card variant="feature" className="p-8 sm:p-10 space-y-4">
              <Badge variant="cyan">LOW LATENCY</Badge>
              <h3 className="text-2xl font-bold font-heading text-[#F5F7FF]">Process locally and respond immediately.</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Zero network queue delays — neural inference evaluates distress signals directly inside micro-processor memory.
              </p>
            </Card>

            {/* PRIVACY */}
            <Card variant="feature" className="p-8 sm:p-10 space-y-4">
              <Badge variant="accent">PRIVACY</Badge>
              <h3 className="text-2xl font-bold font-heading text-[#F5F7FF]">Sensitive audio and visual information stays on-device.</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Raw audio and visual frames never leave physical volatile RAM, eliminating continuous surveillance risks.
              </p>
            </Card>

            {/* OFFLINE-FIRST */}
            <Card variant="feature" className="p-8 sm:p-10 space-y-4">
              <Badge variant="alert">OFFLINE-FIRST</Badge>
              <h3 className="text-2xl font-bold font-heading text-[#F5F7FF]">Core inference and alerts do not depend on continuous connectivity.</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Perimeter vigilance operates autonomously during power grid failures or remote internet outages.
              </p>
            </Card>

            {/* LOW POWER */}
            <Card variant="feature" className="p-8 sm:p-10 space-y-4">
              <Badge variant="neutral">LOW POWER</Badge>
              <h3 className="text-2xl font-bold font-heading text-[#F5F7FF]">Designed for constrained edge hardware and continuous operation.</h3>
              <p className="text-sm text-[#9DA7BC] leading-relaxed">
                Quantized models optimized for low wattage micro-silicon ensuring extended battery backup operation.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 7. SECTION 7 — MULTIMODAL ALERTS */}
      <Section theme="surface" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="// ALERT SYSTEM"
            title="One event. Multiple ways to respond."
            subtitle="Redundant output channels preventing single points of alert failure."
          />

          {/* Central Alert Flow Diagram */}
          <div className="max-w-4xl mx-auto mb-12 p-8 rounded-3xl bg-[#0B1020] border border-[#182238] text-center space-y-6 shadow-2xl">
            <div className="inline-block px-5 py-2 rounded-full bg-[#39E58C]/10 border border-[#39E58C]/30 text-[#39E58C] font-mono text-xs font-bold">
              DISTRESS DETECTED
            </div>
            <div className="flex justify-center text-[#35C8FF]/70">
              <ArrowDown className="w-5 h-5 animate-bounce" />
            </div>
            <div className="inline-block px-5 py-2 rounded-full bg-[#35C8FF]/10 border border-[#35C8FF]/30 text-[#35C8FF] font-mono text-xs font-bold">
              ALERT ENGINE
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#05070D] border border-[#35C8FF]/30 text-center space-y-1">
                <Vibrate className="w-5 h-5 text-[#35C8FF] mx-auto" />
                <span className="text-xs font-mono font-bold text-[#F5F7FF] block">HAPTIC</span>
                <span className="text-[10px] text-[#9DA7BC] block">Tactile Pulse</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#05070D] border border-[#8B5CF6]/30 text-center space-y-1">
                <Monitor className="w-5 h-5 text-[#8B5CF6] mx-auto" />
                <span className="text-xs font-mono font-bold text-[#F5F7FF] block">VISUAL</span>
                <span className="text-[10px] text-[#9DA7BC] block">Strobe Light</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#05070D] border border-[#FFB547]/30 text-center space-y-1">
                <Volume2 className="w-5 h-5 text-[#FFB547] mx-auto" />
                <span className="text-xs font-mono font-bold text-[#F5F7FF] block">AUDIO</span>
                <span className="text-[10px] text-[#9DA7BC] block">Acoustic Siren</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#05070D] border border-[#39E58C]/30 text-center space-y-1">
                <Smartphone className="w-5 h-5 text-[#39E58C] mx-auto" />
                <span className="text-xs font-mono font-bold text-[#F5F7FF] block">GSM / SMS</span>
                <span className="text-[10px] text-[#9DA7BC] block">Silent Dispatch</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. SECTION 8 — PRIVACY */}
      <Section theme="dark" className="py-20 sm:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-[#F5F7FF]">
              Privacy isn&apos;t a policy. It&apos;s an architecture.
            </h2>
            <p className="text-base sm:text-lg text-[#9DA7BC] font-body leading-relaxed max-w-2xl mx-auto">
              Raw audio and video remain on the device. Only the minimum event information required for escalation is transmitted.
            </p>

            {/* Privacy Data Isolation Visual */}
            <div className="p-8 rounded-3xl bg-[#0B1020] border border-[#182238] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center mt-8">
              <div className="p-4 rounded-2xl bg-[#05070D] border border-[#39E58C]/40 text-[#39E58C] font-bold w-full md:w-auto">
                RAW DATA (Stays Local)
              </div>
              <ArrowRight className="w-4 h-4 text-[#35C8FF] hidden md:block" />
              <ArrowDown className="w-4 h-4 text-[#35C8FF] md:hidden" />
              <div className="p-4 rounded-2xl bg-[#05070D] border border-[#35C8FF]/40 text-[#35C8FF] font-bold w-full md:w-auto">
                ANONYMISED EVENT
              </div>
              <ArrowRight className="w-4 h-4 text-[#35C8FF] hidden md:block" />
              <ArrowDown className="w-4 h-4 text-[#35C8FF] md:hidden" />
              <div className="p-4 rounded-2xl bg-[#05070D] border border-[#8B5CF6]/40 text-[#8B5CF6] font-bold w-full md:w-auto">
                REMOTE ALERT
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 9. SECTION 9 — USE CASES */}
      <Section theme="surface" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="// DESIGNED FOR REAL-WORLD ENVIRONMENTS"
            title="Safety infrastructure that adapts to the environment."
            subtitle="Configurable edge AI safety architecture suitable for diverse physical environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card variant="dark" className="p-8 space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#35C8FF]" />
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">Women&apos;s Hostels</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">Configurable monitoring for controlled-access residential perimeters.</p>
            </Card>

            <Card variant="dark" className="p-8 space-y-3">
              <GraduationCap className="w-6 h-6 text-[#8B5CF6]" />
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">Educational Institutions</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">Additional safety intelligence for school and university campus zones.</p>
            </Card>

            <Card variant="dark" className="p-8 space-y-3">
              <Building2 className="w-6 h-6 text-[#39E58C]" />
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">Workplaces</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">Restricted-area monitoring for commercial corporate facilities.</p>
            </Card>

            <Card variant="dark" className="p-8 space-y-3">
              <Hospital className="w-6 h-6 text-[#22D3EE]" />
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">Healthcare Facilities</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">Configurable non-intrusive monitoring for sensitive medical zones.</p>
            </Card>

            <Card variant="dark" className="p-8 space-y-3">
              <Landmark className="w-6 h-6 text-[#FFB547]" />
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">Public Infrastructure</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">Potential deployment across selected public utility facilities.</p>
            </Card>

            <Card variant="dark" className="p-8 space-y-3">
              <WifiOff className="w-6 h-6 text-[#35C8FF]" />
              <h3 className="text-xl font-bold font-heading text-[#F5F7FF]">Low-Connectivity Areas</h3>
              <p className="text-xs text-[#9DA7BC] leading-relaxed">Edge-first architecture for environments where reliable broadband is unavailable.</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 10. SECTION 10 — SAFEEDGE PRODUCT */}
      <Section theme="dark" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            eyebrow="// SAFEEDGE™"
            title="From prototype to product."
            subtitle="SafeEdge™ Edge AI Safety &amp; Alert Platform."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left Product Panel (6 cols) */}
            <div className="lg:col-span-6">
              <Card variant="product" className="p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[#182238]">
                  <span className="font-heading font-bold text-xl text-[#F5F7FF]">SafeEdge™ Node</span>
                  <Badge variant="cyan">Hardware Platform</Badge>
                </div>
                <div className="space-y-2 text-xs font-mono text-[#9DA7BC]">
                  <div className="flex justify-between py-1 border-b border-[#182238]/60"><span>Compute Silicon:</span> <span className="text-[#F5F7FF]">Raspberry Pi 5 Core</span></div>
                  <div className="flex justify-between py-1 border-b border-[#182238]/60"><span>Sensing Inputs:</span> <span className="text-[#F5F7FF]">Camera + PIR + Mic</span></div>
                  <div className="flex justify-between py-1 border-b border-[#182238]/60"><span>Alert Dispatch:</span> <span className="text-[#39E58C]">Multimodal Siren / GSM</span></div>
                </div>
              </Card>
            </div>

            {/* Right Product Features & Link (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl font-bold font-heading text-[#F5F7FF]">SafeEdge™ Platform Capabilities</h3>
              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-2xl bg-[#0B1020] border border-[#182238] text-[#35C8FF]">Edge AI</div>
                <div className="p-3 rounded-2xl bg-[#0B1020] border border-[#182238] text-[#35C8FF]">Computer Vision</div>
                <div className="p-3 rounded-2xl bg-[#0B1020] border border-[#182238] text-[#39E58C]">Local Processing</div>
                <div className="p-3 rounded-2xl bg-[#0B1020] border border-[#182238] text-[#35C8FF]">Real-Time Inference</div>
                <div className="p-3 rounded-2xl bg-[#0B1020] border border-[#182238] text-[#FFB547]">Multimodal Alerts</div>
                <div className="p-3 rounded-2xl bg-[#0B1020] border border-[#182238] text-[#35C8FF]">GSM Communication</div>
              </div>
              <Button href="/products/safeedge" variant="primary" size="md">
                Explore SafeEdge Specs <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. SECTION 11 — TECHNICAL PROPOSAL */}
      <Section theme="surface" className="py-20 sm:py-32">
        <Container>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1020] via-[#080B14] to-[#0B1020] border border-[#35C8FF]/30 shadow-2xl max-w-4xl mx-auto space-y-6 text-center">
            <span className="text-xs font-mono tracking-widest text-[#35C8FF] uppercase bg-[#35C8FF]/10 px-3.5 py-1.5 rounded-full border border-[#35C8FF]/30">
              {`// PROJECT DOWNLOAD`}
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-[#F5F7FF]">
              Read the full technical proposal.
            </h2>

            <p className="text-sm sm:text-base text-[#9DA7BC] leading-relaxed max-w-2xl mx-auto">
              Explore the complete technical proposal covering the problem statement, objectives, system architecture, hardware, software stack, implementation methodology, innovation, accessibility, budget, roadmap and future scope.
            </p>

            <div className="flex items-center justify-center space-x-3 text-xs font-mono text-[#35C8FF]">
              <Badge variant="cyan">PDF FORMAT</Badge>
              <Badge variant="accent">FULL ARCHITECTURE</Badge>
              <Badge variant="neutral">BUDGET &amp; ROADMAP</Badge>
            </div>

            <div className="pt-4">
              <Button href="/resources" variant="primary" size="lg">
                Download Proposal PDF <FileText className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 12. SECTION 12 — VISION & ROADMAP */}
      <Section theme="dark" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            title="Engineering intelligence for a safer tomorrow."
            subtitle="Strategic milestones guiding our prototype validation, pilot trials, and commercial deployment."
          />

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#35C8FF]">2026</span>
                <Badge variant="cyan">Validation</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Prototype Validation</h3>
              <p className="text-xs text-[#9DA7BC] font-mono leading-relaxed">Hardware carrier board validation and model quantization testing.</p>
            </Card>

            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#8B5CF6]">2027</span>
                <Badge variant="accent">Pilots</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Pilot Deployments</h3>
              <p className="text-xs text-[#9DA7BC] font-mono leading-relaxed">Field trial deployments and product refinement across institutional perimeters.</p>
            </Card>

            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#FFB547]">2028</span>
                <Badge variant="alert">Scale</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Institutional Deployment</h3>
              <p className="text-xs text-[#9DA7BC] font-mono leading-relaxed">Commercialization and enterprise fleet management rollout.</p>
            </Card>

            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-[#39E58C]">FUTURE</span>
                <Badge variant="neutral">Ecosystem</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-[#F5F7FF]">Multi-product AI + IoT Platform</h3>
              <p className="text-xs text-[#9DA7BC] font-mono leading-relaxed">Expanded sensor modalities and custom low-power edge NPU silicon.</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 13. SECTION 13 — FINAL CTA */}
      <Section theme="dark" className="py-20 sm:py-28 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B1020] via-[#8B5CF6]/10 to-[#0B1020] border border-[#8B5CF6]/30 shadow-2xl text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-[#F5F7FF] tracking-tight">
              Let&apos;s build safer, smarter spaces.
            </h2>
            <p className="text-base sm:text-lg text-[#9DA7BC] font-body max-w-2xl mx-auto leading-relaxed">
              Partner with INNOVORTEX to bring intelligent safety technology into real-world environments.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href="/request-demo" variant="primary" size="lg">
                Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
