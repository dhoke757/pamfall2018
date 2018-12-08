const assert = require('assert');
const app = require('../../src/app');

describe('\'pitchers\' service', () => {
  it('registered the service', () => {
    const service = app.service('pitchers');

    assert.ok(service, 'Registered the service');
  });
});
