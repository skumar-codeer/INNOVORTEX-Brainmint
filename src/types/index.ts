// INNOVORTEX Core Type Definitions

export type SensorStatusType = 'active' | 'monitoring' | 'connected' | 'alert' | 'offline';

export interface DeviceTelemetry {
  cameraStatus: SensorStatusType;
  edgeAiStatus: SensorStatusType;
  pirStatus: SensorStatusType;
  gsmStatus: SensorStatusType;
  systemHealth: 'OK' | 'WARNING' | 'ALERT';
  lastPingTimestamp: string;
}

export interface SecurityEventLog {
  id: string;
  timestamp: string;
  eventType: 'Motion Detected' | 'Analysis Completed' | 'Safety Alert Triggered' | 'System Check';
  severity: 'info' | 'warning' | 'critical';
  locationTag: string;
  details: string;
}

export interface SystemPipelineNode {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
  techDetails: string[];
}

export interface ProductFeature {
  id: string;
  title: string;
  description: string;
  badge?: string;
  metricsPlaceholder?: string;
}

export interface ProductSpecification {
  category: string;
  specifications: { label: string; value: string }[];
}

export interface SafeEdgeProduct {
  id: string;
  name: string;
  tagline: string;
  positioning: string;
  description: string;
  keyFeatures: ProductFeature[];
  specifications: ProductSpecification[];
}

export interface TechStackArea {
  id: string;
  title: string;
  category: 'Hardware' | 'AI Inference' | 'Sensors & Alert' | 'Connectivity';
  description: string;
  features: string[];
}

export interface SolutionVertical {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  challenges: string[];
  innovortexApproach: string[];
  keyBenefits: string[];
  pilotStatusBadge: string;
}

export interface MetricCardItem {
  id: string;
  label: string;
  value: string;
  unit?: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface RoadmapMilestone {
  quarter: string;
  year: string;
  phase: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Development' | 'Planned';
  deliverables: string[];
}

export interface ResourcePublication {
  id: string;
  category: 'Product Brochure' | 'Research Paper' | 'News Update';
  title: string;
  date: string;
  abstract: string;
  downloadUrl?: string;
  readTime?: string;
}

export interface ResponsibleAIPrinciple {
  id: string;
  title: string;
  summary: string;
  technicalImplementation: string;
}

export interface NavLink {
  label: string;
  href: string;
  subLinks?: { label: string; href: string; description?: string }[];
}

export interface ContactFormInputs {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
  agreeToPrivacy: boolean;
}

export interface DemoRequestFormInputs {
  fullName: string;
  workEmail: string;
  organizationName: string;
  organizationType: string;
  deploymentTimeline: string;
  primaryConcern: string;
  additionalNotes?: string;
}
