import { dom } from "@fortawesome/fontawesome-svg-core";

// next.config.mjs
const nextConfig = {
  experimental: {
    // Remove unrecognized key like 'appDir'
    // Add only recognized experimental options
  },
  images: {
    domains: ['img.icons8.com'],
  },
};

export default nextConfig;
