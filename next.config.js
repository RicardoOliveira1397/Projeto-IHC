const withCSS = require('@zeit/next-css')
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(
    withOptimizedImages(
        withCSS({
            useFileSystemPublicRoutes: false,
            module: {
                rules: []
            },
            devIndicators: {
                autoPrerender: false,
            },
            compress: true,
        })
    )
);