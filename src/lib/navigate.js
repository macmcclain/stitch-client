const queryString = require('query-string');

const toApp = (app, params) => {
  const mode = process.env.NODE_ENV;

  let url = app;
  if(params) {
    const qs = queryString.stringify(params);
    url += "#?" + qs;
  }

  if(mode === "development" ) {
    alert(`Simulating navigation to '${app}' while in development environment. `)
  }
  else {
    window.location.href = app;
  }
}


export default {
  toApp
}
