const config = require('./lib/config');
const mount = require('./lib/mount');
const store = require('./lib/store');
const eventBus = require('./lib/event-bus');
const storage = require('./lib/storage');
const navigate = require('./lib/navigate');

const stitch = {
  config: config.default,
  mount: mount.default,
  store,
  storage: storage.default,
  eventBus: eventBus.default,
  navigate: navigate.default
}

export default stitch;
