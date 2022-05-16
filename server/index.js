import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

// eslint-disable-next-line no-unused-vars
fastify.get('/', async (request, reply) => {
  return { hello: 'world' };
});

const start = async () => {
  try {
    await fastify.listen(3001);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
