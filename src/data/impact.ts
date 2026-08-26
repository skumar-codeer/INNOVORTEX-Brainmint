import { MetricCardItem } from '@/types';

export const METRIC_CARDS_DATA: MetricCardItem[] = [
  {
    id: 'metric-inference',
    label: 'On-Device Inference Speed',
    value: '< 100',
    unit: 'ms',
    description: 'Sub-second neural evaluation on local Raspberry Pi 5 compute hardware.',
    isPlaceholder: false,
  },
  {
    id: 'metric-bandwidth',
    label: 'Network Bandwidth Reduction',
    value: '95%+',
    unit: '',
    description: 'Reduction in cellular network bandwidth compared to continuous 24/7 cloud video streaming.',
    isPlaceholder: false,
  },
  {
    id: 'metric-privacy',
    label: 'Raw Video Privacy Retention',
    value: '0',
    unit: 'bytes',
    description: 'Zero raw video frames saved or streamed to external cloud servers.',
    isPlaceholder: false,
  },
  {
    id: 'metric-response',
    label: 'Target Alert Dispatch Speed',
    value: '< 2',
    unit: 'sec',
    description: 'From physical intrusion event to local strobe activation and GSM dispatch.',
    isPlaceholder: true,
  },
];

export const IMPACT_SCENARIOS = [
  {
    title: 'Transforming Passive CCTV into Active Safety Infrastructure',
    description:
      'Legacy CCTV cameras record crimes without stopping them. SafeEdge™ actively deters boundary threats at the perimeter with strobes, sirens, and immediate GSM dispatch before an escalation occurs.',
    metric: 'Instant Deterrence',
  },
  {
    title: 'Democratizing Intelligent Protection for Off-Grid Environments',
    description:
      'Safety should not depend on gigabit fiber or uninterrupted power grids. SafeEdge™ brings autonomous computer vision protection to rural campuses and low-connectivity facilities.',
    metric: '100% Off-Grid Ready',
  },
  {
    title: 'Pioneering Privacy-First Security Standards',
    description:
      'Demonstrating that high-vigilance perimeter security does not require mass surveillance or personal privacy infringement.',
    metric: 'Zero-Cloud Video',
  },
];
