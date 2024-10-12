/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode
    output: 'standalone', // Optimizes output for serverless deployment
    images: {
        domains: ['templify.video'], // Allows images from specific domains
    },
    async redirects() {
        return [
            {
                source: '/old-path',
                destination: '/new-path',
                permanent: true,
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.example.com/:path*',
            },
        ];
    },
    // Webpack configuration
    webpack: (config) => {
        // Add custom rule to handle video files (e.g., .mp4)
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|swf|ogv)$/, // Video file extensions
            use: {
                loader: 'file-loader', // Use file-loader for video files
                options: {
                    name: '[name].[hash].[ext]', // Output file name format
                    publicPath: '/_next/static/videos/', // Output path for the file
                    outputPath: 'static/videos/', // Location of video files in the build output
                },
            },
        });
        return config;
    },
};

export default nextConfig;
