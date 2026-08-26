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
  Radio,
  Bell,
  ArrowDown,
  ArrowRight,
  ShieldAlert,
  Clock,
  Lock,
  Eye,
  Zap,
  Volume2,
  Vibrate,
  Monitor,
  Activity,
  CheckCircle,
  ShieldCheck,
  GraduationCap,
  Building2,
  Hospital,
  Landmark,
  WifiOff,
  Heart,
  Award,
  FileCheck,
  Building,
  Users,
  Target,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO (DARK NAVY #07111F) */}
      <Section theme="dark" className="pt-28 pb-20 sm:pt-36 sm:pb-28 border-b border-brand-borderDark/60 relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E2D4215_1px,transparent_1px),linear-gradient(to_bottom,#1E2D4215_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Area (7 columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase">
                <span>SafeEdge™ Platform</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-[1.1]">
                Intelligence That Doesn’t Just Watch.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-[#52E2FF] to-brand-accent">
                  It Responds.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-brand-mutedDark font-body leading-relaxed max-w-2xl">
                INNOVORTEX builds privacy-conscious Edge AI systems that transform conventional surveillance into intelligent, real-time safety infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href="/technology" variant="primary" size="lg">
                  Explore Our Technology <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/request-demo" variant="outline" size="lg" className="border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/10">
                  Request a Demo
                </Button>
              </div>
            </div>

            {/* Right Official System Diagram (5 columns) */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 sm:p-7 rounded-3xl bg-[#0D1B2E] border border-brand-borderDark shadow-2xl space-y-3.5">
                <div className="flex items-center justify-between pb-3 border-b border-brand-borderDark/80">
                  <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">System Architecture</span>
                  <Badge variant="cyan">Real-Time Flow</Badge>
                </div>

                {/* Node 1: CAMERA */}
                <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-borderDark flex items-center justify-between transition-colors hover:border-brand-cyan/40">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                      <Camera className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">CAMERA</div>
                      <div className="text-[11px] font-mono text-brand-mutedDark">Optical Input &amp; PIR Sensing</div>
                    </div>
                  </div>
                  <Badge variant="neutral">Input</Badge>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-brand-cyan/60 py-0.5">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Node 2: EDGE AI (Raspberry Pi 5) */}
                <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-cyan/40 flex items-center justify-between transition-colors shadow-lg shadow-brand-cyan/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-accent/10 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-brand-accent uppercase tracking-wider">EDGE AI</div>
                      <div className="text-[11px] font-mono text-white">Raspberry Pi 5 Compute</div>
                    </div>
                  </div>
                  <Badge variant="accent">Inference</Badge>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-brand-cyan/60 py-0.5">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Node 3: DISPLAY / AUDIO / GSM */}
                <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-borderDark flex items-center justify-between transition-colors hover:border-brand-cyan/40">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">DISPLAY / AUDIO / GSM</div>
                      <div className="text-[11px] font-mono text-brand-mutedDark">Multimodal Relay Channels</div>
                    </div>
                  </div>
                  <Badge variant="neutral">Relay</Badge>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-brand-cyan/60 py-0.5">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Node 4: ALERT SYSTEM */}
                <div className="p-4 rounded-2xl bg-brand-dark/90 border border-brand-alert/40 flex items-center justify-between transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-alert/10 border border-brand-alert/40 flex items-center justify-center text-brand-alert">
                      <Bell className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-brand-alert uppercase tracking-wider">ALERT SYSTEM</div>
                      <div className="text-[11px] font-mono text-white">Instant Siren &amp; Strobe Dispatch</div>
                    </div>
                  </div>
                  <Badge variant="alert">Output</Badge>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 2. TRUST / PRODUCT INTRO (LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-brand-dark uppercase bg-brand-dark/5 px-3.5 py-1.5 rounded-full border border-brand-dark/10">
              OUR FIRST PRODUCT
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-brand-dark tracking-tight">
              Meet SafeEdge™
            </h2>

            <p className="text-xl font-mono text-brand-cyan font-semibold">
              Edge AI Safety &amp; Alert Platform
            </p>

            <p className="text-base sm:text-lg text-gray-600 font-body leading-relaxed max-w-2xl mx-auto pt-2">
              SafeEdge™ is an Edge AI safety platform designed to detect activity, analyze visual information locally, evaluate configured safety conditions, and trigger multimodal alerts.
            </p>
          </div>

          {/* Large Product Feature Presentation Block */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gray-200/90 shadow-xl space-y-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Edge AI */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Edge AI</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Autonomous neural model execution deployed on high-throughput micro-hardware.
                </p>
              </div>

              {/* Computer Vision */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Computer Vision</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  High-resolution frame analysis evaluating spatial motion and perimeter boundaries.
                </p>
              </div>

              {/* Local Processing */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Local Processing</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Zero-cloud video transmission ensuring raw footage never leaves physical local memory.
                </p>
              </div>

              {/* Real-time Inference */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Real-time Inference</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Sub-second decision engine evaluating security conditions instantly.
                </p>
              </div>

              {/* Multimodal Alerts */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                  <Volume2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Multimodal Alerts</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Integrated strobes, acoustic sirens, and tactile relay outputs for immediate deterrence.
                </p>
              </div>

              {/* GSM Communication */}
              <div className="p-6 rounded-2xl bg-brand-surface border border-gray-200/80 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">GSM Communication</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Cellular modem dispatch ensuring emergency alerts reach security desks over off-grid networks.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <Button href="/request-demo" variant="primary" size="lg">
                Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. THE PROBLEM (EDITORIAL CARDS ON LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="THE SECURITY CHALLENGE"
            title="When Surveillance Is Not Enough"
            subtitle="Legacy monitoring models leave severe gaps in perimeter safety, vulnerability response, and individual privacy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01 */}
            <Card variant="light" className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold font-mono text-brand-dark">01</span>
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading text-brand-dark">Human Limitations</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Security teams cannot continuously monitor every restricted area.
                </p>
              </div>
            </Card>

            {/* Card 02 */}
            <Card variant="light" className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold font-mono text-brand-dark">02</span>
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading text-brand-dark">Delayed Response</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conventional CCTV often becomes useful only after an incident occurs.
                </p>
              </div>
            </Card>

            {/* Card 03 */}
            <Card variant="light" className="p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-extrabold font-mono text-brand-dark">03</span>
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-heading text-brand-dark">Connectivity &amp; Privacy</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cloud-dependent systems can introduce latency, connectivity challenges and privacy concerns.
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block p-6 sm:p-8 rounded-3xl bg-brand-dark text-white shadow-xl max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl font-bold font-heading text-brand-cyan">
                INNOVORTEX is building the next layer of intelligent safety infrastructure.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. HOW IT WORKS (SOFT SURFACE `#EEF4F8`) */}
      <Section theme="surface" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="surface"
            eyebrow="5-STEP VISUAL PROCESS"
            title="From Detection to Response"
            subtitle="Explore how SafeEdge™ processes perimeter activity autonomously from physical trigger down to security personnel intervention."
          />

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
              {/* Step 01 */}
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-dark">01</span>
                    <Badge variant="neutral">Detect</Badge>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-dark mb-1">DETECT</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Motion activates the monitoring pipeline.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 font-mono text-[11px] text-gray-500">
                  <strong className="text-brand-dark block">Technology:</strong> Camera + PIR
                </div>
              </Card>

              {/* Step 02 */}
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-dark">02</span>
                    <Badge variant="neutral">Analyze</Badge>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-dark mb-1">ANALYZE</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The Edge AI system processes visual input locally.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 font-mono text-[11px] text-gray-500">
                  <strong className="text-brand-dark block">Technology:</strong> Edge AI on RPi 5
                </div>
              </Card>

              {/* Step 03 */}
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-dark">03</span>
                    <Badge variant="neutral">Decide</Badge>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-dark mb-1">DECIDE</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    The system evaluates the configured safety condition.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 font-mono text-[11px] text-gray-500">
                  <strong className="text-brand-dark block">Evaluation:</strong> Logic Engine
                </div>
              </Card>

              {/* Step 04 */}
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-dark">04</span>
                    <Badge variant="neutral">Alert</Badge>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-dark mb-1">ALERT</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Warnings can be delivered through multiple channels.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 font-mono text-[11px] text-gray-500">
                  <strong className="text-brand-dark block">Channels:</strong> Visual / Audio / GSM / Vibration
                </div>
              </Card>

              {/* Step 05 */}
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-dark">05</span>
                    <Badge variant="neutral">Respond</Badge>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-brand-dark mb-1">RESPOND</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Security personnel can take appropriate action.
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 font-mono text-[11px] text-gray-500">
                  <strong className="text-brand-dark block">Action:</strong> Human Dispatch
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. WHY EDGE AI (LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="WHY EDGE AI"
            title="Intelligence at the Edge — Process Locally. Respond Faster."
            subtitle="Processing computer vision at the local hardware boundary removes latency bottlenecks and guarantees data privacy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card variant="feature" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">01</span>
                <Badge variant="cyan">LOW LATENCY</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Low Latency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Real-time processing without depending on continuous cloud communication.
              </p>
            </Card>

            <Card variant="feature" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">02</span>
                <Badge variant="accent">PRIVACY FIRST</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Privacy First</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sensitive visual data can be processed locally rather than continuously transmitted.
              </p>
            </Card>

            <Card variant="feature" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">03</span>
                <Badge variant="alert">RESILIENT OPERATION</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Resilient Operation</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The system can continue core processing even when internet connectivity is unreliable.
              </p>
            </Card>

            <Card variant="feature" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">04</span>
                <Badge variant="neutral">LOWER CLOUD DEPENDENCY</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">Lower Cloud Dependency</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Reduces the need for continuous cloud inference infrastructure.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 6. MULTIMODAL ALERTS (LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="ALERT LAYER"
            title="One Detection. Multiple Ways to Respond."
            subtitle="Extending safety beyond a single point of alert failure with redundant output channels."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">VISUAL</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Display-based warning</p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">AUDIO</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Voice / speaker alert</p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                <Vibrate className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">VIBRATION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Accessible tactile notification</p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">GSM</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Remote emergency communication</p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 7. SAFEEDGE PRODUCT SHOWCASE (DARK NAVY SECTION #07111F) */}
      <Section theme="dark" className="py-20 sm:py-32 border-b border-brand-borderDark/60">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="FLAGSHIP SYSTEM"
            title="Meet Our First Product: SafeEdge™ — Edge AI Safety & Alert Platform"
            subtitle="SafeEdge™ is designed to detect activity, analyze visual information locally, evaluate configured safety conditions, and trigger multimodal alerts."
          />

          <div className="p-8 sm:p-12 rounded-3xl bg-[#0D1B2E] border border-brand-borderDark shadow-2xl max-w-5xl mx-auto space-y-8">
            <div className="text-xs font-mono text-brand-cyan tracking-widest uppercase text-center font-bold">
              PRODUCT ARCHITECTURE FLOW
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3 font-mono text-xs text-center">
              <span className="px-4 py-2 rounded-full bg-brand-dark border border-brand-borderDark text-white">CAMERA + PIR</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-4 py-2 rounded-full bg-brand-dark border border-brand-cyan/40 text-brand-cyan font-bold">RASPBERRY PI 5</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-4 py-2 rounded-full bg-brand-dark border border-brand-accent/40 text-brand-accent font-bold">EDGE AI</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-4 py-2 rounded-full bg-brand-dark border border-brand-borderDark text-white">SAFETY DECISION</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-4 py-2 rounded-full bg-brand-dark border border-brand-alert/40 text-brand-alert font-bold">MULTIMODAL ALERT</span>
            </div>

            <div className="text-center pt-4">
              <Button href="/request-demo" variant="primary" size="lg">
                Request Hardware Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 8. TECHNOLOGY (LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="TECHNOLOGY STACK"
            title="Technology Built for Real-World Safety"
            subtitle="Deep-tech hardware and software stack powering the SafeEdge™ platform."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* Tech 1 */}
            <Card variant="technical" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-brand-dark">EDGE COMPUTING</h3>
              <ul className="space-y-1.5 pt-2 border-t border-gray-100 text-xs font-mono text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Raspberry Pi 5 — 4 GB</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> On-device inference</li>
              </ul>
            </Card>

            {/* Tech 2 */}
            <Card variant="technical" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-brand-dark">COMPUTER VISION</h3>
              <ul className="space-y-1.5 pt-2 border-t border-gray-100 text-xs font-mono text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Camera module</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Real-time visual analysis</li>
              </ul>
            </Card>

            {/* Tech 3 */}
            <Card variant="technical" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-brand-dark">SENSING</h3>
              <ul className="space-y-1.5 pt-2 border-t border-gray-100 text-xs font-mono text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-accent mr-1.5" /> PIR motion sensing</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-accent mr-1.5" /> Tamper / event detection</li>
              </ul>
            </Card>

            {/* Tech 4 */}
            <Card variant="technical" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-brand-dark">ALERT LAYER</h3>
              <ul className="space-y-1.5 pt-2 border-t border-gray-100 text-xs font-mono text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> Display</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> Speaker</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> Vibration</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> GSM communication</li>
              </ul>
            </Card>

            {/* Tech 5 */}
            <Card variant="technical" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-brand-dark">AI LAYER</h3>
              <ul className="space-y-1.5 pt-2 border-t border-gray-100 text-xs font-mono text-gray-600">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> CV model</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Model optimization</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Real-time pipeline</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 9. SOLUTIONS (LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="WHERE IT CAN DEPLOY"
            title="Built for Real-World Spaces"
            subtitle="Configurable edge AI safety architecture suitable for diverse physical environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card variant="light" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">01</span>
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">WOMEN&apos;S HOSTELS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Intelligent monitoring for controlled-access environments.
              </p>
            </Card>

            <Card variant="light" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">02</span>
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">CAMPUSES / EDUCATIONAL INSTITUTIONS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Additional safety intelligence for educational environments.
              </p>
            </Card>

            <Card variant="light" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">03</span>
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">WORKPLACES</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Restricted-area monitoring for organizations.
              </p>
            </Card>

            <Card variant="light" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">04</span>
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <Hospital className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">HEALTHCARE FACILITIES</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Configurable monitoring for sensitive zones.
              </p>
            </Card>

            <Card variant="light" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">05</span>
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">PUBLIC INFRASTRUCTURE</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Potential deployment across selected public facilities.
              </p>
            </Card>

            <Card variant="light" className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-3xl font-extrabold font-mono text-brand-dark">06</span>
                <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                  <WifiOff className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">RURAL &amp; LOW-CONNECTIVITY AREAS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Edge-first architecture for environments where reliable connectivity cannot always be assumed.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 10. DASHBOARD PREVIEW (DARK NAVY SECTION #07111F) */}
      <Section theme="dark" className="py-20 sm:py-32 border-b border-brand-borderDark/60">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="CONTROL INTERFACE"
            title="SafeEdge™ Sentinel Control Dashboard"
            subtitle="Explore our interactive frontend-only SafeEdge™ Sentinel dashboard demo."
          />

          <div className="max-w-5xl mx-auto p-8 rounded-3xl bg-[#0D1B2E] border border-brand-borderDark shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-brand-borderDark/80 pb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">INNOVORTEX SENTINEL</h3>
                  <p className="text-xs font-mono text-brand-mutedDark">DEMO / MOCK INTERFACE ONLY</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge variant="cyan">SAFEEDGE™ DEMO</Badge>
                <div className="flex items-center space-x-2 bg-brand-dark px-3 py-1.5 rounded-full border border-brand-borderDark">
                  <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                  <span className="text-xs font-mono text-brand-accent font-bold">SYSTEM OK</span>
                </div>
              </div>
            </div>

            {/* 4 Status Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-borderDark space-y-1">
                <div className="text-[11px] font-mono text-brand-mutedDark uppercase">CAMERA</div>
                <div className="text-sm font-bold font-heading text-brand-accent">● Active</div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-borderDark space-y-1">
                <div className="text-[11px] font-mono text-brand-mutedDark uppercase">EDGE AI</div>
                <div className="text-sm font-bold font-heading text-brand-accent">● Running</div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-borderDark space-y-1">
                <div className="text-[11px] font-mono text-brand-mutedDark uppercase">PIR</div>
                <div className="text-sm font-bold font-heading text-brand-cyan">● Monitoring</div>
              </div>

              <div className="p-4 rounded-2xl bg-brand-dark border border-brand-borderDark space-y-1">
                <div className="text-[11px] font-mono text-brand-mutedDark uppercase">GSM</div>
                <div className="text-sm font-bold font-heading text-brand-alert">● Connected</div>
              </div>
            </div>

            {/* Mock Events Timeline */}
            <div className="p-4 rounded-2xl bg-brand-dark border border-brand-borderDark space-y-2 font-mono text-xs text-brand-mutedDark">
              <div className="text-[11px] uppercase text-white font-bold pb-1 border-b border-brand-borderDark">Recent Mock Log Events</div>
              <div className="flex justify-between"><span>20:41 — Motion Detected</span> <span className="text-brand-accent">LOG OK</span></div>
              <div className="flex justify-between"><span>20:41 — Analysis Completed</span> <span className="text-brand-cyan">SUB-100MS</span></div>
              <div className="flex justify-between"><span>20:41 — Safety Alert Triggered</span> <span className="text-brand-alert">MULTIMODAL</span></div>
            </div>

            <div className="text-center pt-2">
              <Button href="/dashboard" variant="primary" size="md">
                Launch Full Dashboard Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 11. PRIVACY (LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="PRIVACY BY DESIGN"
            title="Designed With Privacy in Mind"
            subtitle="INNOVORTEX is committed to privacy-conscious engineering. Safety technology should protect people without unnecessarily exposing them."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">Local Processing</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Core AI inference is performed on the edge device. Raw video streams are evaluated entirely inside local compute memory.
              </p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">Minimal Data Exposure</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Avoid unnecessary transmission or storage of visual information. Transient optical frames are discarded immediately after evaluation.
              </p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                <WifiOff className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">No Cloud Dependency</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Core detection does not require continuous cloud inference. System perimeters maintain autonomous vigilance even without internet connectivity.
              </p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">Responsible Deployment</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                SafeEdge™ systems are decision-assist tools. Emergency alert dispatches assist human security personnel without replacing ethical accountability.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* 12. ABOUT & VISION & ROADMAP (SOFT SURFACE `#EEF4F8`) */}
      <Section theme="surface" className="py-20 sm:py-32">
        <Container>
          <div className="max-w-4xl mx-auto space-y-16">
            {/* About & Vision Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
                <span className="text-xs font-mono tracking-widest text-brand-dark uppercase bg-brand-dark/5 px-3 py-1 rounded-full">ABOUT US</span>
                <h3 className="text-2xl font-bold font-heading text-brand-dark">Who We Are</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  INNOVORTEX is a product-driven deep-tech startup developing practical AI, Edge Computing and intelligent sensing solutions for real-world challenges.
                </p>
              </div>

              <div className="space-y-3 p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm">
                <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3 py-1 rounded-full">OUR VISION</span>
                <h3 className="text-2xl font-bold font-heading text-brand-dark">Building Intelligent Products</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  To build intelligent physical products that sense, understand and respond to real-world situations — making technology more accessible, resilient and human-centered.
                </p>
              </div>
            </div>

            {/* Roadmap */}
            <div>
              <SectionHeading
                theme="surface"
                eyebrow="ROADMAP"
                title="Product &amp; Technical Evolution"
                subtitle="Strategic milestones guiding prototype validation, pilot trials, and commercial deployment."
              />

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <Card variant="light" className="p-6 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-brand-dark">2026</span>
                    <Badge variant="cyan">Validation</Badge>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-brand-dark">Prototype Validation</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    Hardware carrier board validation and model quantization testing.
                  </p>
                </Card>

                <Card variant="light" className="p-6 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-brand-dark">2027</span>
                    <Badge variant="accent">Pilots</Badge>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-brand-dark">Pilot Deployments</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    Field trial deployments and product refinement across perimeters.
                  </p>
                </Card>

                <Card variant="light" className="p-6 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-brand-dark">2028</span>
                    <Badge variant="alert">Scale</Badge>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-brand-dark">Institutional Deployment</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    Commercialization and enterprise fleet management rollout.
                  </p>
                </Card>

                <Card variant="light" className="p-6 space-y-3 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold font-mono text-brand-dark">FUTURE</span>
                    <Badge variant="neutral">Ecosystem</Badge>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-brand-dark">Multi-product Platform</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-mono">
                    Expanded sensor modalities and custom low-power edge NPU silicon.
                  </p>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <span className="text-xs font-mono text-gray-500 italic">
                  * Dates to be aligned with actual business plan.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 13. IMPACT / VALIDATION (LIGHT BACKGROUND #F6F8FA) */}
      <Section theme="light" className="py-20 sm:py-32">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="HUMAN PURPOSE &amp; BENCHMARKS"
            title="Technology With a Human Purpose"
            subtitle="Pioneering intelligent safety technology engineered to serve human vulnerability."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16">
            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-dark">Women&apos;s Safety</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Perimeter vigilance engineered to protect vulnerable spaces.</p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-alert flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-dark">Accessible Alerts</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Multimodal visual, audio, tactile, and remote GSM dispatch.</p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-dark">Privacy-Conscious AI</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Zero-cloud video transmission protecting privacy.</p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-dark">Affordable Edge</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Micro-hardware optimization democratizing protection.</p>
            </Card>

            <Card variant="light" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                <WifiOff className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-brand-dark">Low-Connectivity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Autonomous operation in off-grid environments.</p>
            </Card>
          </div>

          {/* Validation Placeholders Grid */}
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="text-xs font-mono text-brand-dark uppercase font-semibold text-center tracking-widest">
              VALIDATION &amp; DEVELOPMENT JOURNEY (PLACEHOLDERS ONLY)
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card variant="light" className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <Badge variant="cyan">Placeholder</Badge>
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Pitch Competitions</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Development category tracking pitch events and technical showcases.</p>
              </Card>

              <Card variant="light" className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-accent flex items-center justify-center">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <Badge variant="accent">In Progress</Badge>
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Research / Prototype</h3>
                <p className="text-xs text-gray-600 leading-relaxed">R&amp;D benchmarks validating local edge neural model quantization.</p>
              </Card>

              <Card variant="light" className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <Badge variant="cyan">Placeholder</Badge>
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Patent / IP</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Intellectual property pipeline covering edge decision algorithms.</p>
              </Card>

              <Card variant="light" className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <Building className="w-5 h-5" />
                  </div>
                  <Badge variant="cyan">Placeholder</Badge>
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Incubation</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Deep-tech incubator and acceleration program engagement track.</p>
              </Card>

              <Card variant="light" className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <Badge variant="cyan">Placeholder</Badge>
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Pilot Partners</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Institutional pilot partners evaluating SafeEdge™ hardware trials.</p>
              </Card>

              <Card variant="light" className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <Badge variant="cyan">Placeholder</Badge>
                </div>
                <h3 className="text-lg font-bold font-heading text-brand-dark">Institutional Recognition</h3>
                <p className="text-xs text-gray-600 leading-relaxed">Industry standards and safety governance recognitions.</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* 14. FINAL CTA (DARK NAVY SECTION #07111F) */}
      <Section theme="dark" className="py-20 sm:py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/30">
              BUILD WITH US
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Let&apos;s Build Safer, Smarter Spaces.
            </h2>

            <p className="text-base sm:text-lg text-brand-mutedDark font-body leading-relaxed max-w-2xl mx-auto">
              Partner with INNOVORTEX to bring intelligent safety technology into real-world environments.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href="/request-demo" variant="primary" size="lg">
                Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/10">
                Partner With Us
              </Button>

              <Button href="/contact" variant="ghost" size="lg" className="text-gray-300 hover:text-white">
                Contact INNOVORTEX
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
