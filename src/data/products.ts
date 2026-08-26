import { SafeEdgeProduct, SystemPipelineNode } from '@/types';

export const SAFEEDGE_PRODUCT_DATA: SafeEdgeProduct = {
  id: 'safeedge-v1',
  name: 'SafeEdge™',
  tagline: 'Edge AI Safety & Alert Platform',
  positioning: 'Intelligent Technology. Safer Spaces.',
  description:
    'SafeEdge™ combines low-power thermal/PIR motion sensing, real-time computer vision inference on Raspberry Pi 5 hardware, and local multimodal alerts to protect sensitive perimeter environments without transmitting raw video feeds.',
  keyFeatures: [
    {
      id: 'on-device-cv',
      title: 'Zero-Cloud On-Device CV Inference',
      description:
        'Neural models execute locally inside hardware boundaries, preserving strict individual privacy while processing high-frame-rate computer vision streams.',
      badge: 'Privacy Core',
    },
    {
      id: 'multimodal-alerts',
      title: 'Multimodal Instant Dispatch',
      description:
        'Combines direct visual strobes, acoustic alarms, GSM SMS/voice triggers, and physical vibration feedback to ensure critical alerts penetrate low-signal zones.',
      badge: 'Resilient Dispatch',
    },
    {
      id: 'low-connectivity',
      title: 'Low-Connectivity Operating Resilience',
      description:
        'Operates independently of continuous broadband connection, queuing telemetry locally and dispatching emergency state triggers over cellular GSM channels.',
      badge: 'Autonomous',
    },
    {
      id: 'tamper-detection',
      title: 'Active Hardware & Event Tamper Guard',
      description:
        'Continuous self-testing monitors enclosure physical state, optical lens occlusion, and sensor line continuity to alert instantly on physical disruption.',
      badge: 'Hardware Hardened',
    },
  ],
  specifications: [
    {
      category: 'Processing Core',
      specifications: [
        { label: 'Compute Hardware', value: 'Raspberry Pi 5 (Quad-core ARM Cortex-A76 @ 2.4GHz)' },
        { label: 'AI Accelerator Engine', value: 'Optimized MobileNet / YOLO Edge Model Weights' },
        { label: 'System Memory', value: '8GB LPDDR4X SDRAM' },
        { label: 'Local Security Storage', value: 'Encrypted MicroSD / NVMe Storage Buffer' },
      ],
    },
    {
      category: 'Sensing & Optics',
      specifications: [
        { label: 'Primary Optical Sensor', value: 'Wide-angle High Dynamic Range Camera Module' },
        { label: 'Auxiliary Motion Sensor', value: 'Multi-zone PIR Sensing Array' },
        { label: 'Tamper Protection', value: 'Accelerometer & Enclosure Tamper Micro-switch' },
      ],
    },
    {
      category: 'Alert & Output Layers',
      specifications: [
        { label: 'Visual Alert', value: 'High-intensity Strobing LED Module' },
        { label: 'Acoustic Alert', value: 'Piezo Siren Speaker System (Up to 105dB)' },
        { label: 'Cellular Dispatch', value: 'Dual-SIM GSM / LTE Emergency Dialing Modem' },
        { label: 'Tactile Signal', value: 'Vibration Haptic Output Relay' },
      ],
    },
    {
      category: 'Power & Physical',
      specifications: [
        { label: 'Power Supply', value: '12V DC input with Integrated LiFePO4 Battery Backup' },
        { label: 'Enclosure Rating', value: 'IP65 Weather-resistant Vandal-resistant Shell' },
        { label: 'Operating Temp', value: '-10°C to 55°C Industrial Range' },
      ],
    },
  ],
};

export const HOW_IT_WORKS_PIPELINE: SystemPipelineNode[] = [
  {
    stepNumber: 1,
    title: 'DETECT',
    description: 'Dual-stage perimeter scanning combining wide-angle optics with PIR motion sensing.',
    iconName: 'Camera',
    techDetails: ['High Dynamic Range Optics', 'Multi-zone PIR Motion Trigger', 'Hardware Event Filtering'],
  },
  {
    stepNumber: 2,
    title: 'ANALYZE',
    description: 'On-device neural inference powered by Raspberry Pi 5 compute node.',
    iconName: 'Cpu',
    techDetails: ['Sub-100ms Inference Latency', 'Zero-Cloud Video Processing', 'Model Quantization'],
  },
  {
    stepNumber: 3,
    title: 'DECIDE',
    description: 'Rule-based Safety Decision Engine verifies threat threshold and rule context.',
    iconName: 'ShieldAlert',
    techDetails: ['Custom Risk Matrix', 'Contextual Threat Scoring', 'False-Positive Suppression'],
  },
  {
    stepNumber: 4,
    title: 'ALERT',
    description: 'Instant local and remote activation across redundant multimodal channels.',
    iconName: 'Bell',
    techDetails: ['High-Decibel Siren & Strobe', 'Direct GSM Emergency SMS', 'Haptic Relay Trigger'],
  },
  {
    stepNumber: 5,
    title: 'RESPOND',
    description: 'Rapid physical security dispatch informed by precise situational telemetry.',
    iconName: 'UserCheck',
    techDetails: ['Security Desk Dashboard Sync', 'Audit Log Creation', 'Verification Loop'],
  },
];
