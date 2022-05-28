import Fastify from 'fastify';
import Knex from 'knex';

// const db = new Database('foobar.db');

const knex = Knex({
  debug: true,
  client: 'better-sqlite3',
  connection: {
    // filename: ':memory:',
    filename: './dev.sqlite3',
  },
});
const fastify = Fastify({
  logger: true,
});

// eslint-disable-next-line no-unused-vars
fastify.get('/', (request, reply) => {
  return { hello: 'world' };
});

fastify.get('/create', (request, reply) => {
  knex.schema
    .createTable('books', function (table) {
      table.increments();
      table.string('title');
    })
    .then(function (rows) {
      console.log('OK', rows);
    })
    .catch(function (error) {
      console.error('ERROR', error);
    });
  return 'ok';
});

fastify.get('/post', (request, reply) => {
  knex('books')
    .insert({ title: 'Slaughterhouse Five' })
    .then(function (rows) {
      console.log('OK', rows);
    })
    .catch(function (error) {
      console.error('ERROR', error);
    });
  return 'ok';
});

fastify.get('/get', (request, reply) => {
  return knex.select('*').from('books');
  // .then(function (rows) {
  //   console.log('OK', rows);
  //   return rows;
  // })
  // .catch(function (error) {
  //   console.error('ERROR', error);
  //   return error;
  // });
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
