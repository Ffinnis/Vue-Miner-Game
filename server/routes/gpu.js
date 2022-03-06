const gpuParser = require('../parser/gpu')

function gpuRoutes(fastify, options, done) {

    fastify.get('/gpu', async (req, reply) => {
        const gpuList = await gpuParser()
        reply.send(gpuList)
    })

    done()
}

module.exports = gpuRoutes