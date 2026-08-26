import { ResourcePublication } from '@/types';

export const RESOURCES_DATA: ResourcePublication[] = [
  {
    id: 'res-brochure-safeedge',
    category: 'Product Brochure',
    title: 'SafeEdge™ Technical Overview & Hardware Specs',
    date: '2026 Edition',
    abstract:
      'Detailed technical brochure covering Raspberry Pi 5 compute node architecture, sensor modal specs, multimodal alert relays, and installation guidelines.',
    downloadUrl: '#',
    readTime: 'PDF Document (4 Pages)',
  },
  {
    id: 'res-paper-privacy',
    category: 'Research Paper',
    title: 'Zero-Cloud Video Processing: Privacy-Conscious Edge AI for Perimeter Safety',
    date: 'January 2026',
    abstract:
      'Architectural whitepaper detailing how local neural inference eliminates privacy risks associated with traditional continuous cloud surveillance streaming.',
    downloadUrl: '#',
    readTime: '8 Min Read',
  },
  {
    id: 'res-paper-latency',
    category: 'Research Paper',
    title: 'Sub-100ms Inference Latency on Quantized Edge Micro-Accelerators',
    date: 'November 2025',
    abstract:
      'Engineering bench analysis comparing on-device computer vision inference speeds, memory footprint, and false-positive suppression on low-power hardware.',
    downloadUrl: '#',
    readTime: '12 Min Read',
  },
  {
    id: 'res-news-pilot',
    category: 'News Update',
    title: 'INNOVORTEX Initiates SafeEdge™ Field Trials Across Educational & Hostel Campuses',
    date: 'February 2026',
    abstract:
      'Announcing initial field trial deployments evaluating perimeter response times and zero-cloud video privacy verification in real-world institutional settings.',
    downloadUrl: '#',
    readTime: '3 Min Read',
  },
];
