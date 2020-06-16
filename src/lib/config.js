// provides stitch config to client.
import store from './store';
import emulatedConfig from "../emulate/config";
const config = () => {
  console.log("store.mode", store.mode);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const stitchConfigElement = 'stitch-config';
      var configElement = document.getElementById(stitchConfigElement);
      if(configElement) {
        var config = JSON.parse(configElement.innerText);
        resolve(config);
      }
      else if(store.mode === 'dev') {
        // simulate config
        var config = emulatedConfig;
        console.log("config", config);
        resolve(config);
      }
      else {
        const message = `Stitch config not found on page. The stitch server should have written the config to a script element ${stitchConfigElement}, but it could not be found.`
        console.error(message)
        reject(message)
      }
    }, 100);
  })
}

export default config;
