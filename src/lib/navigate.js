const queryString = require('query-string');

const toApp = (app, params) => {
  const mode = process.env.NODE_ENV;

  let url = app;
  if(params) {
    const qs = queryString.stringify(params);
    url = url + "#?" + qs;
  }

  if(mode === "development" ) {
    alert(`Simulating navigation to '${url}' while in development environment. `)
  }
  else {
    window.location.href = url;
  }
}


export default {
  toApp
}
