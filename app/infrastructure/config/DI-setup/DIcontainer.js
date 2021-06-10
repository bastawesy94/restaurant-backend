const { createContainer, asClass, asValue, asFunction } = require('awilix');
const awilix = require('awilix')
const Demo = require('../../../application/use_cases/DemoService')
const Repo = require('../../repositories/MobileUserReposetoryMySQL');
const db = require('../../db/models/index')

const registerContainer = (otherServices = null) => {
    const container = createContainer();
    container.register({
        demoInstance: asClass(Demo),
        repoInstance: asClass(Repo),
        db :asValue(db),
       ...otherServices,
  });

  return container;
};

module.exports = registerContainer;