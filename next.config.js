/** @type {import('next').NextConfig} */
const webpack = require('webpack');

const nextConfig = {
    reactStrictMode: false,
    compiler: {
        styledComponents: true,
    },
    images: {
        loader: 'akamai',
        path: '',
    },
    webpack(config) {
        config.plugins = config.plugins || [];

        config.plugins.push(
            new webpack.IgnorePlugin({ resourceRegExp: /\/iconv-loader$/ })
        );

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

module.exports = nextConfig;
