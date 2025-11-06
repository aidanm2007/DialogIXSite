/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "react-wrap-balancer",
      "framer-motion"
    ]
  }
};

export default nextConfig;

