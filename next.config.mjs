// next.config.mjs
const nextConfig = {
  experimental: {
    // Remove unrecognized key like 'appDir'
    // Add only recognized experimental options
  },
  images: {
    domains: ['cms.interiorcompany.com','cbx-prod.b-cdn.net', 'via.placeholder.com', 'placehold.co'],

},
};

export default nextConfig;
