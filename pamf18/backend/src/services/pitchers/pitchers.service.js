// Initializes the `pitchers` service on path `/pitchers`
const createService = require('feathers-knex');
const createModel = require('../../models/pitchers.model');
const hooks = require('./pitchers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'pitchers',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/pitchers', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('pitchers');

  service.hooks(hooks);
};
  