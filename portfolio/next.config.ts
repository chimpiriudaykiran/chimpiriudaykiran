import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // serverActions is stable in Next.js 14, so no need for experimental unless using specific features
    serverExternalPackages: ["@getbrevo/brevo"], // Moved from experimental.serverComponentsExternalPackages
    webpack: (config) => {
        config.externals = [...(config.externals || []), { "@getbrevo/brevo": "commonjs @getbrevo/brevo" }];
        return config;
    },
};

export default nextConfig;