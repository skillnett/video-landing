/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                },
            ],
        });

        config.module.rules.push({
            test: /\.(gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|txt)$/,
            type: 'asset/resource',
            generator: {
                filename: 'static/chunks/[path][name].[hash][ext]',
            },
        });

        return config;
    },
};
