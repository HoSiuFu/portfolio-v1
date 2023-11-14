/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    api: {
        responseLimit: '100mb',
    },
}

module.exports = nextConfig
