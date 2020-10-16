import store from './store'
import storage from "./storage";

// provides stitch config to client.
const mount  = (framework, name, options) => {
  const availableFrameworks = ['vue', 'react'];

  console.log("mount", framework, name, options);

  const mode = process.env['NODE' + '_ENV'];
  console.log("mount options", options)


  //validate mount params.
  let errorMessage = null;
  if(!framework) {
    errorMessage = `stitch.mount() is missing parameter 'framework', please provide one of the following values: ${availableFrameworks}.`
  }
  if(!name) {
    errorMessage = `stitch.mount() is missing parameter 'name', please provide a unique name value. This must match the package.json 'name' attribute.`
  }
  if(!name) {
    errorMessage = `stitch.mount() is missing parameter 'name', please provide a unique name value. This must match the package.json 'name' attribute.`
  }


  // validate entry point.
  const mountAppId = 'stitch-app-' + name;
  const mountDefaultId = options.elementId ? options.elementId : 'stitch-app-entry';
  const entryElement = document.getElementById(mountAppId) || document.getElementById(mountDefaultId);
  if(!entryElement) {
    errorMessage = `stitch.mount could not find an element to mount to. trying to mount to either '${mountAppId}' or '${mountDefaultId}' (in dev mode)`;
  }

  //validate framework
  if(framework == 'vue') {
    if(!options.instance) {
      errorMessage = `stitch.mount requires the vue instance be passed into options. i.e. { instance: vm }`;
    }
  }

  if(!errorMessage) {
    // figure out the mode.
    if(document.getElementById(mountAppId)) {
      storage.set("stitch:mode", "serve");
    }
    storage.set("stitch:mode", "dev");


    // mount by package name or default to the app entry for local development.
    if(framework == 'vue') {
      options.instance.$mount(entryElement);
    }
    else if(framework === 'react') {
      options.ReactDOM.render(options.instance, entryElement);
    }

  }
  else {
    console.error(errorMessage);
  }


}

export default mount
