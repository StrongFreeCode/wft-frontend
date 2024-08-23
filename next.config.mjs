/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com'
            }
        ]
    }

};
export default withNextIntl(nextConfig);
///export default nextConfig;
