import { TechStackArea } from '@/types';

export const TECHNOLOGY_STACK_DATA: TechStackArea[] = [
  {
    id: 'rpi5-compute',
    title: 'Raspberry Pi 5 Compute Architecture',
    category: 'Hardware',
    description:
      'Leveraging the quad-core ARM Cortex-A76 architecture of Raspberry Pi 5 to achieve high computational throughput with minimal thermal and power footprint.',
    features: [
      '2.4GHz Quad-Core ARM Processors',
      'Dedicated PCIe 2.0 Interface for Neural Accelerators',
      'Low-power draw suitable for solar/battery backup systems',
      'Industrial hardware endurance for continuous 24/7 uptime',
    ],
  },
  {
    id: 'edge-cv',
    title: 'Computer Vision & On-Device Inference',
    category: 'AI Inference',
    description:
      'Quantized deep neural networks optimized for real-time edge processing, executing human motion and threat detection completely on-device without cloud dependence.',
    features: [
      'Real-time frame evaluation at 30+ FPS',
      'Quantized INT8 CNN architecture for low memory footprint',
      'Zero video feed transmission — only lightweight alert metadata',
      'Robust performance across low-light and high-contrast environments',
    ],
  },
  {
    id: 'multimodal-sensing',
    title: 'PIR & Optical Fusion Sensing',
    category: 'Sensors & Alert',
    description:
      'Combining Passive Infrared (PIR) heat signature detection with high-resolution optics to create a low-power, dual-verification sensor barrier.',
    features: [
      'Sub-millisecond PIR hardware wake-up interrupt',
      'Elimination of environmental false triggers (swaying foliage, small animals)',
      'Integrated tamper detection micro-switches',
      'Optical obstruction and lens defocus sensing',
    ],
  },
  {
    id: 'resilient-gsm',
    title: 'GSM & Multimodal Emergency Dispatch',
    category: 'Connectivity',
    description:
      'A resilient alert transmission engine equipped with GSM emergency cellular dialing, acoustic sirens, visual strobes, and physical relays.',
    features: [
      'Direct GSM SMS & Voice Emergency Dispatch',
      '105dB Piezo Siren & Strobe Array',
      'Physical relay interface for automated door/gate locking integration',
      'Fallback store-and-forward telemetry queue',
    ],
  },
];
