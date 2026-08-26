import { ResponsibleAIPrinciple } from '@/types';

export const RESPONSIBLE_AI_PRINCIPLES: ResponsibleAIPrinciple[] = [
  {
    id: 'privacy-by-design',
    title: 'Privacy by Design & Zero-Cloud Video Transmission',
    summary:
      'Video frames are processed strictly inside volatile RAM on the local edge hardware and discarded immediately after neural evaluation.',
    technicalImplementation:
      'No raw footage, facial biometric databases, or continuous video streams leave the physical device. Only lightweight, non-identifying telemetry metadata (e.g. event timestamp and zone ID) is transmitted.',
  },
  {
    id: 'no-facial-recognition',
    title: 'No Biometric Tracking or Facial Recognition',
    summary:
      'SafeEdge™ models evaluate spatial motion dynamics and bounding volume threat conditions rather than identifying individual identities.',
    technicalImplementation:
      'Models are specifically trained on anonymized spatial geometry and human pose vectors without facial feature extraction or identity matching algorithms.',
  },
  {
    id: 'fail-safe-transparency',
    title: 'Deterministic Safety Decision Boundaries',
    summary:
      'AI inference serves as an intelligent trigger filter, while alert dispatch decisions follow strict, audit-verifiable rule matrices.',
    technicalImplementation:
      'Every safety trigger generates an immutable local event log detailing sensor input parameters, model confidence score, and decision engine logic.',
  },
  {
    id: 'human-in-the-loop',
    title: 'Human Security Response Empowerment',
    summary:
      'Automated systems provide instant deterrence and alert dispatch, empowering human security teams to intervene with maximum situational clarity.',
    technicalImplementation:
      'Alert notifications provide actionable context (zone tag, threat type) directly to security personnel without replacing human oversight.',
  },
];
