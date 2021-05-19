const awilix = require('awilix');
// const DevController = require('./controller/dev');
const UserRepository = require('./app/infrastructure/repositories/UserReposetoryMySQL');
// const DevDao = require('./dao/dev');
const db = require('./app/infrastructure/db/models/index');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  container.register({
    userRepository: awilix.asClass(UserRepository),

    // services
    // devService: awilix.asClass(DevService),

    // DAOs
    // devDao: awilix.asClass(DevDao),

    // inject knexjs object with database connection pooling
    // support
    db: awilix.asValue(db),
  });
}

module.exports = {
  container,
  setup
};