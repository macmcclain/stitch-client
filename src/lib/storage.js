var ls = require('local-storage');

const set = (key, value) => {
  ls.set(key, value);
}

const get = (key) => {
  return ls.get(key)
}

export default {
  set,
  get
}
