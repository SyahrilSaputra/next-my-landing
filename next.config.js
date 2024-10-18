module.exports = {
    // images: {
    //     domains: ['www.google.com'],
    // },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Ini akan mengizinkan semua domain
            },
        ],
    },
}