/** @type {import('next').NextConfig} */

const nextConfig = {
  devIndicators: {
    appIsrStatus: true, // Change to false if needed
    buildActivity: true, // Change to false if needed
    buildActivityPosition: "bottom-right", // Options: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
  },
};

export default nextConfig;
