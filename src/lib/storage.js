var ls = require('local-storage');

const set = (key, value) => {
  ls.set(key, value);
}

const get = (key) => {
  const mode = process.env.NODE_ENV;
  let val = ls.get(key);
  if(mode === "development" && val === null) {
    val = prompt(`Please enter a value for '${key}'`);
    ls.set(key, val);
    alert(`The value of '${val}' has been stored for '${key}'. To clear this value, clear your browsers local storage.`)
  }
  return ls.get(key)
}

export default {
  set,
  get
}
