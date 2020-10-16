export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      var configElement = document.getElementById('stitch-config');
      if(configElement) {
        resolve('production');
      } else {
        resolve('development');
      }
    }, 100);
  });
}
