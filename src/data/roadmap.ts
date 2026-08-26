import { RoadmapMilestone } from '@/types';

export const ROADMAP_DATA: RoadmapMilestone[] = [
  {
    quarter: 'Q3',
    year: '2025',
    phase: 'Phase 1',
    title: 'Core Hardware & Edge CV Engine Optimization',
    description:
      'Finalization of custom Raspberry Pi 5 enclosure, thermal validation, and edge quantization of computer vision safety models.',
    status: 'Completed',
    deliverables: [
      'Raspberry Pi 5 custom hardware carrier carrier board testing',
      'YOLO/MobileNet quantized model validation (sub-100ms inference)',
      'Dual-sensing PIR and optical sensor integration',
    ],
  },
  {
    quarter: 'Q4',
    year: '2025',
    phase: 'Phase 2',
    title: 'Multimodal Alert Layer & GSM Integration',
    description:
      'Implementation of hardware strobe/siren drivers, physical relay triggers, and resilient store-and-forward GSM cellular dispatching.',
    status: 'Completed',
    deliverables: [
      'Dual-SIM GSM fallback modem drivers',
      'High-decibel acoustic siren and LED strobe driver board',
      'Store-and-forward local event telemetry log',
    ],
  },
  {
    quarter: 'Q1',
    year: '2026',
    phase: 'Phase 3',
    title: 'Pilot Deployment & Field Validation',
    description:
      'Field testing of SafeEdge™ across target institutional environments including women’s hostel perimeters and educational campuses.',
    status: 'In Development',
    deliverables: [
      'Field trial deployments across perimeter environments',
      'Environmental false-positive suppression tuning',
      'Security desk dashboard live synchronization',
    ],
  },
  {
    quarter: 'Q2',
    year: '2026',
    phase: 'Phase 4',
    title: 'Enterprise Fleet Management & Mesh Telemetry',
    description:
      'Introducing multi-node local mesh networking and centralized enterprise fleet monitoring for multi-building facilities.',
    status: 'Planned',
    deliverables: [
      'Multi-unit local mesh communications',
      'Enterprise fleet deployment management console',
      'Over-the-air (OTA) signed security firmware updates',
    ],
  },
  {
    quarter: 'Q3-Q4',
    year: '2026',
    phase: 'Phase 5',
    title: 'Custom Silicon & Ultra-Low-Power Edge Nodes',
    description:
      'Research and design into dedicated low-power NPU silicon accelerators for sub-watt perimeter sensor nodes.',
    status: 'Planned',
    deliverables: [
      'Low-power RISC-V + NPU architecture research',
      'Energy harvesting solar micro-panel pairing',
      'Expanded sensor modality integration (acoustic threat detection)',
    ],
  },
];
