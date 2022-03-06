const fastify = require("fastify")({
  logger: true,
});
fastify.register(require("./routes/gpu"));
fastify.register(require("fastify-cors"), {});

const PORT = 5000;

const start = async () => {
  try {
    await fastify.listen(PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
