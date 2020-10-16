// provides stitch config to client.
import store from './store';
import storage from './storage';
import emulatedConfig from "../emulate/config";
import checkMode from './check-mode';

const config = () => {
  console.log("store.mode", storage.get("stitch:mode"));

  return new Promise(async (resolve, reject) => {
    const mode = await checkMode();
    if(mode !== 'development') {
      var configElement = document.getElementById(stitchConfigElement);
      if(configElement) {
        var config = JSON.parse(configElement.innerText);
        resolve(config);
      }
    } else {
      // simulate config
      console.log("Stitch mode is development. Generating emulated configuration.");
      var config = emulatedConfig;
      console.log("stitch-config", config);
      resolve(config);
    }
  })
}

export default config;
