import { SolutionVertical } from '@/types';

export const SOLUTIONS_DATA: SolutionVertical[] = [
  {
    slug: 'womens-hostels',
    title: "Women's Hostels & Residential Spaces",
    subtitle: 'Uncompromising perimeter safety with total personal privacy protection.',
    description:
      'Residential facilities require vigilance around entryways and perimeters without compromising resident privacy. SafeEdge™ detects unauthorized perimeter breach attempts at night without storing or streaming invasive camera feeds.',
    icon: 'ShieldCheck',
    challenges: [
      'Need for perimeter vigilance without invasive internal monitoring',
      'Vulnerability during night hours and power outages',
      'Slow response time of conventional delayed guards',
    ],
    innovortexApproach: [
      'On-device CV detects boundary breach without streaming raw video',
      'Instant local audio/visual deterrence deters intruders before escalation',
      'Direct GSM notification alerts security personnel instantly',
    ],
    keyBenefits: [
      '100% Privacy Compliant (Zero-cloud video processing)',
      'Autonomous battery-backed night operation',
      'Sub-second local deterrence activation',
    ],
    pilotStatusBadge: 'Specialized Deployment Architecture',
  },
  {
    slug: 'educational-campuses',
    title: 'Educational Institutions & Campuses',
    subtitle: 'Comprehensive campus perimeter protection for sprawling educational environments.',
    description:
      'Large university and school campuses present extensive boundaries that are difficult to monitor with static CCTV. SafeEdge™ provides intelligent, automated intrusion detection across wide outdoor spaces.',
    icon: 'GraduationCap',
    challenges: [
      'Vast land area with multiple unattended access points',
      'High bandwidth costs of continuous multi-camera cloud streaming',
      'Frequent false alarms from campus wildlife or foliage movement',
    ],
    innovortexApproach: [
      'Edge filtering distinguishes human intrusion from environmental noise',
      'Low-bandwidth architecture functions over local mesh or GSM',
      'Centralized command dashboard sync for rapid campus guard response',
    ],
    keyBenefits: [
      'Scalable node deployment across campus perimeters',
      'Reduced network bandwidth overhead by 95%+',
      'Verifiable event logging for campus safety audits',
    ],
    pilotStatusBadge: 'Campus Scale Architecture',
  },
  {
    slug: 'workplaces',
    title: 'Workplaces & Commercial Facilities',
    subtitle: 'After-hours security and automated perimeter protection for corporate assets.',
    description:
      'Commercial facilities require reliable after-hours intrusion detection, equipment tamper protection, and verifiable audit trails for facility security management.',
    icon: 'Building2',
    challenges: [
      'High risk during non-operational evening/weekend hours',
      'Vulnerability of remote utility rooms and storage yards',
      'Complex integration requirements with existing security desks',
    ],
    innovortexApproach: [
      'Scheduled automated active security modes during off-hours',
      'Hardware tamper detection alerts security on physical node interference',
      'API-ready telemetry stream for integration with security management software',
    ],
    keyBenefits: [
      'Automated off-hour facility hardening',
      'Hardware-level anti-vandalism monitoring',
      'Seamless API integration capabilities',
    ],
    pilotStatusBadge: 'Enterprise Ready',
  },
  {
    slug: 'healthcare-facilities',
    title: 'Healthcare Facilities & Hospitals',
    subtitle: 'Sensitive area protection ensuring patient dignity and staff security.',
    description:
      'Hospitals and healthcare clinics require strict access control and perimeter safety around sensitive wings, emergency entrances, and pharmaceutical storage without violating strict health privacy regulations.',
    icon: 'Hospital',
    challenges: [
      'Strict regulatory privacy requirements regarding video capture',
      '24/7 high-footfall environment requiring selective threat isolation',
      'Need for silent or targeted alert modes to prevent patient distress',
    ],
    innovortexApproach: [
      'Local edge inference ensures patient identity remains uncaptured',
      'Configurable alert modes (silent GSM dispatch vs high-decibel siren)',
      'Targeted monitoring of restricted drug storage and equipment zones',
    ],
    keyBenefits: [
      'HIPAA / Health Privacy aligned zero-cloud architecture',
      'Customizable silent dispatch notification modes',
      'Selective zone boundary enforcement',
    ],
    pilotStatusBadge: 'Privacy Hardened',
  },
  {
    slug: 'public-infrastructure',
    title: 'Public Infrastructure & Transport Hubs',
    subtitle: 'Resilient threat detection for critical public assets and transit zones.',
    description:
      'Substations, water treatment plants, telecommunications towers, and transit hubs require continuous intrusion monitoring across rugged outdoor environments.',
    icon: 'Landmark',
    challenges: [
      'Exposure to harsh weather, dust, and temperature swings',
      'Target for metal theft, vandalism, and unauthorized access',
      'Lack of reliable high-speed wired internet infrastructure',
    ],
    innovortexApproach: [
      'IP65 weather-proof industrial enclosure with battery backup',
      'GSM emergency dialing guarantees alert transmission over cellular networks',
      'Dual-sensing PIR + CV minimizes environmental false alarms',
    ],
    keyBenefits: [
      'Industrial-grade physical resilience',
      'Zero reliance on fiber or broadband infrastructure',
      'Instant alert delivery to municipal security teams',
    ],
    pilotStatusBadge: 'Infrastructure Grade',
  },
  {
    slug: 'rural-areas',
    title: 'Rural & Low-Connectivity Areas',
    subtitle: 'Autonomous safety infrastructure where power and internet are unreliable.',
    description:
      'Remote agricultural setups, off-grid outposts, and rural community centers face severe safety vulnerabilities due to frequent power grid failures and zero broadband connectivity.',
    icon: 'WifiOff',
    challenges: [
      'Complete absence of fixed broadband or Wi-Fi networks',
      'Frequent power outages and grid instability',
      'Long response times from distant emergency services',
    ],
    innovortexApproach: [
      'Complete local edge decision loop running on low-DC battery power',
      'Fallback GSM SMS messaging guarantees alerts reach key personnel',
      'Local high-intensity audio/visual alarms provide immediate deterrence',
    ],
    keyBenefits: [
      '100% off-grid operating independence',
      'Solar / Low-voltage battery compatibility',
      'Immediate local physical deterrence',
    ],
    pilotStatusBadge: 'Off-Grid Specialist',
  },
];
