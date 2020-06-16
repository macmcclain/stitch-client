const eventBus = require('js-event-bus')();


const on = (name, cb) => {
  console.log("stitch.eventBus.on", name, cb);
  eventBus.on(name, cb)
}

const emit = (name, o) => {
  console.log("stitch.eventBus.emit", name, o);
  eventBus.emit(name, o)
}

export default {
  on,
  emit,
  detach: eventBus.detatch
};
