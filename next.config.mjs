import path from 'path';
import { fileURLToPath } from 'url';

const repoRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: repoRoot,
};

export default nextConfig;
