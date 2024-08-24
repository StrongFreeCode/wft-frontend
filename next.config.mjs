import withBundleAnalyzer from '@next/bundle-analyzer';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
            },
        ],
    },
    webpack: (config, { isServer }) => {
        // Personaliza la configuración de Webpack aquí si es necesario
        return config;
    },
    // Otras configuraciones de Next.js
};

export default withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' })(withNextIntl(nextConfig));