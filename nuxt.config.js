module.exports = {
    build: {
        analyze: true,
        vendor: ['axios']
    },
    cache: {
        max: 1000,
        maxAge: 900000
    },
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width,initial-scale=1' }
        ]
    }
}