

const toApp = (app) => {
  const mode = process.env.NODE_ENV;
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
