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
  Layers,
  CheckCircle,
  ShieldCheck,
  GraduationCap,
  Building2,
  Hospital,
  Landmark,
  WifiOff,
  Heart,
  Bot,
  Network,
  Award,
  FileCheck,
  Building,
  Users,
  Target,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* SECTION 1 — HERO (DARK) */}
      <Section theme="dark" className="pt-24 pb-16 sm:pt-32 sm:pb-24 border-b border-brand-borderDark/60 relative overflow-hidden">
        {/* Background subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E2D4215_1px,transparent_1px),linear-gradient(to_bottom,#1E2D4215_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Area (7 columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono tracking-wider uppercase">
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
                <Button href="/request-demo" variant="primary" size="lg">
                  Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/technology" variant="outline" size="lg">
                  Explore Our Technology
                </Button>
              </div>
            </div>

            {/* Right Visual System Diagram (5 columns) */}
            <div className="lg:col-span-5 w-full">
              <div className="p-6 rounded-2xl bg-brand-cardDark/90 border border-brand-borderDark shadow-2xl backdrop-blur-md space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-brand-borderDark/80">
                  <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase">System Architecture</span>
                  <Badge variant="cyan">Real-Time Flow</Badge>
                </div>

                {/* Node 1: CAMERA */}
                <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-brand-borderDark flex items-center justify-between transition-colors hover:border-brand-cyan/40">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
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
                <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-brand-cyan/40 flex items-center justify-between transition-colors shadow-lg shadow-brand-cyan/5">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-accent/10 border border-brand-accent/40 flex items-center justify-center text-brand-accent">
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
                <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-brand-borderDark flex items-center justify-between transition-colors hover:border-brand-cyan/40">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                      <Radio className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">DISPLAY / AUDIO / GSM</div>
                      <div className="text-[11px] font-mono text-brand-mutedDark">Multimodal Telemetry Relay</div>
                    </div>
                  </div>
                  <Badge variant="neutral">Relay</Badge>
                </div>

                {/* Arrow Down */}
                <div className="flex justify-center text-brand-cyan/60 py-0.5">
                  <ArrowDown className="w-4 h-4 animate-bounce" />
                </div>

                {/* Node 4: ALERT SYSTEM */}
                <div className="p-3.5 rounded-xl bg-brand-dark/90 border border-brand-alert/40 flex items-center justify-between transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-brand-alert/10 border border-brand-alert/40 flex items-center justify-center text-brand-alert">
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

      {/* SECTION 2 — PROBLEM (LIGHT) */}
      <Section theme="light" className="py-20 sm:py-28 border-b border-gray-200">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="The Security Challenge"
            title="When Surveillance Is Not Enough"
            subtitle="Legacy monitoring models leave severe gaps in perimeter safety, vulnerability response, and individual privacy."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 01 */}
            <Card variant="light" className="flex flex-col justify-between space-y-6 p-8 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-brand-cyan">01</span>
                  <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-dark">Human Limitations</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Security teams cannot continuously monitor every restricted area.
                </p>
              </div>
            </Card>

            {/* Card 02 */}
            <Card variant="light" className="flex flex-col justify-between space-y-6 p-8 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-brand-cyan">02</span>
                  <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-alert flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-dark">Delayed Response</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Conventional CCTV often becomes useful only after an incident occurs.
                </p>
              </div>
            </Card>

            {/* Card 03 */}
            <Card variant="light" className="flex flex-col justify-between space-y-6 p-8 hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-brand-cyan">03</span>
                  <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                    <Lock className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-brand-dark">Connectivity &amp; Privacy</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Cloud-dependent systems can introduce latency, connectivity challenges and privacy concerns.
                </p>
              </div>
            </Card>
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block p-6 sm:p-8 rounded-2xl bg-brand-dark text-white border border-brand-borderDark max-w-3xl mx-auto shadow-xl">
              <p className="text-lg sm:text-xl font-bold font-heading text-brand-cyan">
                INNOVORTEX is building the next layer of intelligent safety infrastructure.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 3 — SAFEEDGE PRODUCT (DARK) */}
      <Section theme="dark" className="py-20 sm:py-28 border-b border-brand-borderDark/60">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
            <span className="text-xs font-mono tracking-widest text-brand-cyan uppercase bg-brand-cyan/10 px-3.5 py-1.5 rounded-full border border-brand-cyan/30">
              OUR FIRST PRODUCT
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Meet SafeEdge™
            </h2>

            <p className="text-xl font-mono text-brand-cyan font-semibold">
              Edge AI Safety &amp; Alert Platform
            </p>

            <p className="text-base sm:text-lg text-brand-mutedDark font-body leading-relaxed max-w-2xl mx-auto pt-2">
              SafeEdge™ is an Edge AI safety platform designed to detect activity, analyze visual information locally, evaluate configured safety conditions, and trigger multimodal alerts.
            </p>
          </div>

          {/* Technical Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Highlight 1: Edge AI */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Edge AI</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Autonomous neural model execution deployed on high-throughput micro-hardware.
              </p>
            </Card>

            {/* Highlight 2: Computer Vision */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Computer Vision</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                High-resolution frame analysis evaluating spatial motion and perimeter boundaries.
              </p>
            </Card>

            {/* Highlight 3: Local Processing */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Local Processing</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Zero-cloud video transmission ensuring raw footage never leaves physical local memory.
              </p>
            </Card>

            {/* Highlight 4: Real-time Inference */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Real-time Inference</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Sub-second decision engine evaluating security conditions instantly.
              </p>
            </Card>

            {/* Highlight 5: Multimodal Alerts */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-alert/10 border border-brand-alert/30 flex items-center justify-center text-brand-alert">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Multimodal Alerts</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Integrated strobes, acoustic sirens, and tactile relay outputs for immediate deterrence.
              </p>
            </Card>

            {/* Highlight 6: GSM Communication */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">GSM Communication</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Cellular modem dispatch ensuring emergency alerts reach security desks over off-grid networks.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <Button href="/request-demo" variant="primary" size="lg">
              Request a Demo <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* SECTION 4 — HOW IT WORKS (LIGHT) */}
      <Section theme="light" className="py-20 sm:py-28 border-b border-gray-200">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="5-Step Visual Process"
            title="From Detection to Response"
            subtitle="Explore how SafeEdge™ processes perimeter activity autonomously from physical trigger down to security personnel intervention."
          />

          {/* 5-Step Process Timeline Container */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
              {/* Step 01 */}
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all relative">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-cyan">01</span>
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
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all relative">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-cyan">02</span>
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
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all relative">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-cyan">03</span>
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
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all relative">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-cyan">04</span>
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
              <Card variant="light" className="p-6 flex flex-col justify-between space-y-4 hover:shadow-md transition-all relative">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold font-mono text-brand-cyan">05</span>
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

      {/* SECTION 5 — WHY EDGE AI (DARK) */}
      <Section theme="dark" className="py-20 sm:py-28 border-b border-brand-borderDark/60">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="WHY EDGE AI"
            title="Intelligence at the Edge. Process Locally. Respond Faster."
            subtitle="Processing computer vision at the local hardware boundary removes latency bottlenecks and guarantees data privacy."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Feature 01 */}
            <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">01</span>
                <Badge variant="cyan">LOW LATENCY</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">LOW LATENCY</h3>
              <p className="text-sm text-brand-mutedDark leading-relaxed">
                Real-time processing without depending on continuous cloud communication.
              </p>
            </Card>

            {/* Feature 02 */}
            <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-accent">02</span>
                <Badge variant="accent">PRIVACY FIRST</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">PRIVACY FIRST</h3>
              <p className="text-sm text-brand-mutedDark leading-relaxed">
                Sensitive visual data can be processed locally rather than continuously transmitted.
              </p>
            </Card>

            {/* Feature 03 */}
            <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-alert">03</span>
                <Badge variant="alert">RESILIENT OPERATION</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">RESILIENT OPERATION</h3>
              <p className="text-sm text-brand-mutedDark leading-relaxed">
                The system can continue core processing even when internet connectivity is unreliable.
              </p>
            </Card>

            {/* Feature 04 */}
            <Card variant="dark" className="p-8 space-y-4 hover:border-brand-cyan/50 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">04</span>
                <Badge variant="cyan">LOWER CLOUD DEPENDENCY</Badge>
              </div>
              <h3 className="text-xl font-bold font-heading text-white">LOWER CLOUD DEPENDENCY</h3>
              <p className="text-sm text-brand-mutedDark leading-relaxed">
                Reduces the need for continuous cloud inference infrastructure.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 6 — MULTIMODAL ALERTS (LIGHT) */}
      <Section theme="light" className="py-20 sm:py-28 border-b border-gray-200">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="ALERT LAYER"
            title="One Detection. Multiple Ways to Respond."
            subtitle="Extending safety beyond a single point of alert failure with redundant output channels."
          />

          {/* Central Visual Diagram */}
          <div className="max-w-4xl mx-auto my-12 p-6 rounded-2xl bg-white border border-gray-200 shadow-lg text-center space-y-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-mono text-xs">
              <div className="px-4 py-2 rounded-lg bg-brand-dark text-brand-cyan font-bold">
                DETECTION
              </div>
              <ArrowRight className="w-4 h-4 text-brand-dark hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-dark md:hidden" />
              <div className="px-4 py-2 rounded-lg bg-brand-dark text-brand-accent font-bold">
                ALERT ENGINE
              </div>
              <ArrowRight className="w-4 h-4 text-brand-dark hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-dark md:hidden" />
              <div className="px-4 py-2 rounded-lg bg-brand-dark text-brand-alert font-bold">
                VISUAL | AUDIO | VIBRATION | GSM
              </div>
            </div>
          </div>

          {/* 4 Alert Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Visual */}
            <Card variant="light" className="p-6 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">VISUAL</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Display-based warning</p>
            </Card>

            {/* Audio */}
            <Card variant="light" className="p-6 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-alert flex items-center justify-center">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">AUDIO</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Voice / speaker alert</p>
            </Card>

            {/* Vibration */}
            <Card variant="light" className="p-6 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                <Vibrate className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">VIBRATION</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Accessible tactile notification</p>
            </Card>

            {/* GSM */}
            <Card variant="light" className="p-6 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">GSM</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Remote emergency communication</p>
            </Card>
          </div>

          {/* Statement */}
          <div className="mt-12 text-center">
            <p className="text-sm font-mono text-gray-600 bg-white border border-gray-200 px-6 py-3 rounded-full inline-block">
              Designed so that a critical alert doesn&apos;t depend on a single communication channel.
            </p>
          </div>
        </Container>
      </Section>

      {/* SECTION 7 — TECHNOLOGY (DARK) */}
      <Section theme="dark" className="py-20 sm:py-28 border-b border-brand-borderDark/60">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="TECHNOLOGY STACK"
            title="Built at the Edge"
            subtitle="Deep-tech hardware and software components powering SafeEdge™ platform."
          />

          {/* Architecture Flow Diagram */}
          <div className="max-w-4xl mx-auto mb-16 p-6 rounded-2xl bg-brand-cardDark border border-brand-borderDark text-center space-y-4">
            <div className="text-xs font-mono text-brand-cyan tracking-widest uppercase">System Flow Architecture</div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 font-mono text-xs">
              <span className="px-3 py-1.5 rounded bg-brand-dark border border-brand-borderDark text-white">CAMERA + PIR</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-3 py-1.5 rounded bg-brand-dark border border-brand-cyan/40 text-brand-cyan">RASPBERRY PI 5</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-3 py-1.5 rounded bg-brand-dark border border-brand-accent/40 text-brand-accent">EDGE AI</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-3 py-1.5 rounded bg-brand-dark border border-brand-borderDark text-white">SAFETY DECISION</span>
              <ArrowRight className="w-4 h-4 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-4 h-4 text-brand-cyan md:hidden" />
              <span className="px-3 py-1.5 rounded bg-brand-dark border border-brand-alert/40 text-brand-alert">MULTIMODAL ALERTS</span>
            </div>
          </div>

          {/* 5 Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {/* Tech 1 */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-white">EDGE COMPUTING</h3>
              <ul className="space-y-1.5 pt-2 border-t border-brand-borderDark text-xs font-mono text-brand-mutedDark">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Raspberry Pi 5</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> On-device inference</li>
              </ul>
            </Card>

            {/* Tech 2 */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-white">COMPUTER VISION</h3>
              <ul className="space-y-1.5 pt-2 border-t border-brand-borderDark text-xs font-mono text-brand-mutedDark">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Camera module</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Real-time visual analysis</li>
              </ul>
            </Card>

            {/* Tech 3 */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-white">SENSING</h3>
              <ul className="space-y-1.5 pt-2 border-t border-brand-borderDark text-xs font-mono text-brand-mutedDark">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-accent mr-1.5" /> PIR motion sensing</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-accent mr-1.5" /> Tamper / event detection</li>
              </ul>
            </Card>

            {/* Tech 4 */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-alert/10 border border-brand-alert/30 flex items-center justify-center text-brand-alert">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-white">ALERT LAYER</h3>
              <ul className="space-y-1.5 pt-2 border-t border-brand-borderDark text-xs font-mono text-brand-mutedDark">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> Display</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> Speaker</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> Vibration</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-alert mr-1.5" /> GSM communication</li>
              </ul>
            </Card>

            {/* Tech 5 */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold font-heading text-white">AI LAYER</h3>
              <ul className="space-y-1.5 pt-2 border-t border-brand-borderDark text-xs font-mono text-brand-mutedDark">
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> CV model</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Model optimization</li>
                <li className="flex items-center"><CheckCircle className="w-3 h-3 text-brand-cyan mr-1.5" /> Real-time pipeline</li>
              </ul>
            </Card>
          </div>
        </Container>
      </Section>

      {/* SECTION 8 — SOLUTIONS (LIGHT) */}
      <Section theme="light" className="py-20 sm:py-28 border-b border-gray-200">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="WHERE IT CAN DEPLOY"
            title="Built for Real-World Spaces"
            subtitle="Configurable edge AI safety architecture suitable for diverse physical environments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Solution 01 */}
            <Card variant="light" className="p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">01</span>
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">WOMEN&apos;S HOSTELS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Intelligent monitoring for controlled-access environments.
              </p>
            </Card>

            {/* Solution 02 */}
            <Card variant="light" className="p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">02</span>
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">EDUCATIONAL INSTITUTIONS</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Additional safety intelligence for educational environments.
              </p>
            </Card>

            {/* Solution 03 */}
            <Card variant="light" className="p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">03</span>
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-alert flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">WORKPLACES</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Restricted-area monitoring for organizations.
              </p>
            </Card>

            {/* Solution 04 */}
            <Card variant="light" className="p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">04</span>
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center">
                  <Hospital className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">HEALTHCARE FACILITIES</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Configurable monitoring for sensitive zones.
              </p>
            </Card>

            {/* Solution 05 */}
            <Card variant="light" className="p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">05</span>
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-dark">PUBLIC INFRASTRUCTURE</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Potential deployment across selected public facilities.
              </p>
            </Card>

            {/* Solution 06 */}
            <Card variant="light" className="p-8 space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">06</span>
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-alert flex items-center justify-center">
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

      {/* SECTION 9 — IMPACT (DARK) */}
      <Section theme="dark" className="py-20 sm:py-28 border-b border-brand-borderDark/60">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="TECHNOLOGY WITH A HUMAN PURPOSE"
            title="Technology With a Human Purpose"
            subtitle="Pioneering intelligent safety technology engineered to serve human vulnerability and protect dignity."
          />

          {/* 5 Impact Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto mb-16">
            {/* Impact Item 1 */}
            <Card variant="dark" className="p-6 space-y-3 hover:border-brand-cyan/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Women&apos;s Safety</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Perimeter vigilance engineered to protect vulnerable spaces.
              </p>
            </Card>

            {/* Impact Item 2 */}
            <Card variant="dark" className="p-6 space-y-3 hover:border-brand-cyan/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-alert/10 border border-brand-alert/30 flex items-center justify-center text-brand-alert">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Accessible Alerts</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Multimodal visual, audio, tactile, and remote GSM dispatch.
              </p>
            </Card>

            {/* Impact Item 3 */}
            <Card variant="dark" className="p-6 space-y-3 hover:border-brand-cyan/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Privacy-Conscious AI</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Zero-cloud video transmission protecting personal privacy.
              </p>
            </Card>

            {/* Impact Item 4 */}
            <Card variant="dark" className="p-6 space-y-3 hover:border-brand-cyan/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Affordable Edge Computing</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Micro-hardware optimization democratizing intelligent protection.
              </p>
            </Card>

            {/* Impact Item 5 */}
            <Card variant="dark" className="p-6 space-y-3 hover:border-brand-cyan/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                <WifiOff className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold font-heading text-white">Low-Connectivity Deployment</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Autonomous operation in off-grid and low-bandwidth environments.
              </p>
            </Card>
          </div>

          {/* Statement Banner */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-cardDark border border-brand-cyan/30 shadow-2xl">
              <p className="text-lg sm:text-xl font-bold font-heading text-brand-cyan">
                &quot;We believe advanced technology should not be limited to high-cost infrastructure.&quot;
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 10 — ABOUT (LIGHT) */}
      <Section theme="light" className="py-20 sm:py-28 border-b border-gray-200">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="ABOUT INNOVORTEX"
            title="Who We Are"
            subtitle="INNOVORTEX is a product-driven deep-tech startup developing practical AI, Edge Computing and intelligent sensing solutions for real-world challenges."
          />

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-xs font-mono tracking-widest text-brand-dark uppercase font-semibold text-center">
              What We Build
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* AI */}
              <Card variant="light" className="p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center mx-auto">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-brand-dark">AI</h3>
              </Card>

              {/* Edge Computing */}
              <Card variant="light" className="p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-accent flex items-center justify-center mx-auto">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-brand-dark">Edge Computing</h3>
              </Card>

              {/* Computer Vision */}
              <Card variant="light" className="p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center mx-auto">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-brand-dark">Computer Vision</h3>
              </Card>

              {/* IoT */}
              <Card variant="light" className="p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-alert flex items-center justify-center mx-auto">
                  <Network className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-brand-dark">IoT</h3>
              </Card>

              {/* Intelligent Safety Systems */}
              <Card variant="light" className="p-6 text-center space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-brand-dark text-brand-cyan flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-brand-dark">Intelligent Safety Systems</h3>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 11 — VISION (DARK) */}
      <Section theme="dark" className="py-20 sm:py-28 border-b border-brand-borderDark/60">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="OUR VISION"
            title="Building Intelligent Products for the Real World"
            subtitle="To build intelligent physical products that sense, understand and respond to real-world situations — making technology more accessible, resilient and human-centered."
          />

          {/* Simple Visual Flow */}
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-brand-cardDark border border-brand-borderDark text-center space-y-6">
            <div className="text-xs font-mono text-brand-cyan tracking-widest uppercase">Strategic Product Vision</div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
              <div className="p-4 rounded-xl bg-brand-dark border border-brand-cyan/40 w-full md:w-1/3">
                <div className="text-[10px] text-brand-cyan uppercase tracking-wider mb-1">TODAY</div>
                <div className="font-bold text-white text-sm">AI Safety Platform</div>
              </div>

              <ArrowRight className="w-5 h-5 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-5 h-5 text-brand-cyan md:hidden" />

              <div className="p-4 rounded-xl bg-brand-dark border border-brand-accent/40 w-full md:w-1/3">
                <div className="text-[10px] text-brand-accent uppercase tracking-wider mb-1">TOMORROW</div>
                <div className="font-bold text-white text-sm">Intelligent Infrastructure</div>
              </div>

              <ArrowRight className="w-5 h-5 text-brand-cyan hidden md:block" />
              <ArrowDown className="w-5 h-5 text-brand-cyan md:hidden" />

              <div className="p-4 rounded-xl bg-brand-dark border border-brand-alert/40 w-full md:w-1/3">
                <div className="text-[10px] text-brand-alert uppercase tracking-wider mb-1">INNOVORTEX</div>
                <div className="font-bold text-white text-sm">AI PRODUCT ECOSYSTEM</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* SECTION 12 — ROADMAP (LIGHT) */}
      <Section theme="light" className="py-20 sm:py-28 border-b border-gray-200">
        <Container>
          <SectionHeading
            theme="light"
            eyebrow="ROADMAP"
            title="Product &amp; Technical Evolution"
            subtitle="Strategic milestones guiding our prototype validation, pilot trials, and commercial deployment."
          />

          {/* Timeline: Horizontal on Desktop, Vertical on Mobile */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* 2026 */}
            <Card variant="light" className="p-6 space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">2026</span>
                <Badge variant="cyan">Validation</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">Prototype Validation</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-mono">
                Hardware carrier board validation and sub-100ms model quantization testing.
              </p>
            </Card>

            {/* 2027 */}
            <Card variant="light" className="p-6 space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">2027</span>
                <Badge variant="accent">Pilots</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">Pilot Deployments</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-mono">
                Field trial deployments and product refinement across institutional perimeters.
              </p>
            </Card>

            {/* 2028 */}
            <Card variant="light" className="p-6 space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">2028</span>
                <Badge variant="alert">Scale</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">Institutional Deployment</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-mono">
                Commercialization and enterprise fleet management rollout.
              </p>
            </Card>

            {/* FUTURE */}
            <Card variant="light" className="p-6 space-y-3 relative hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold font-mono text-brand-cyan">FUTURE</span>
                <Badge variant="neutral">Ecosystem</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-brand-dark">Multi-product AI + IoT Platform</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-mono">
                Expanded sensor modalities and custom low-power edge NPU silicon.
              </p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <span className="text-xs font-mono text-gray-500 italic">
              * Roadmap dates are subject to alignment with the actual business plan.
            </span>
          </div>
        </Container>
      </Section>

      {/* SECTION 13 — TRUST / VALIDATION (DARK) */}
      <Section theme="dark" className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            theme="dark"
            eyebrow="VALIDATION"
            title="Validation &amp; Development Journey"
            subtitle="Transparent development benchmarks tracking technical, legal, and operational milestones."
          />

          {/* Current Status Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono">
              Prototype Development
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-mono">
              Pitch / Incubation Journey
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-brand-alert/10 border border-brand-alert/30 text-brand-alert text-xs font-mono">
              Technical Validation
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-brand-dark border border-brand-borderDark text-white text-xs font-mono">
              IP Development
            </span>
          </div>

          {/* 6 Category Placeholders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* 1. Pitch Competitions */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Award className="w-5 h-5" />
                </div>
                <Badge variant="cyan">Placeholder</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Pitch Competitions</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Development category tracking startup pitch events and technical showcases.
              </p>
            </Card>

            {/* 2. Research / Prototype */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <FileCheck className="w-5 h-5" />
                </div>
                <Badge variant="accent">In Progress</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Research / Prototype</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                R&amp;D benchmarks validating local edge neural model quantization.
              </p>
            </Card>

            {/* 3. Patent / IP */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <Badge variant="cyan">Placeholder</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Patent / IP</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Intellectual property pipeline covering edge decision safety algorithms.
              </p>
            </Card>

            {/* 4. Incubation */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Building className="w-5 h-5" />
                </div>
                <Badge variant="cyan">Placeholder</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Incubation</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Deep-tech incubator and acceleration program engagement track.
              </p>
            </Card>

            {/* 5. Pilot Partners */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Users className="w-5 h-5" />
                </div>
                <Badge variant="cyan">Placeholder</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Pilot Partners</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Institutional pilot partners evaluating SafeEdge™ perimeter hardware trials.
              </p>
            </Card>

            {/* 6. Institutional Recognition */}
            <Card variant="dark" className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <Target className="w-5 h-5" />
                </div>
                <Badge variant="cyan">Placeholder</Badge>
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Institutional Recognition</h3>
              <p className="text-xs text-brand-mutedDark leading-relaxed">
                Industry standards and institutional safety governance recognitions.
              </p>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  );
}
