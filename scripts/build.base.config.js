/**
 * @type {import('electron-builder').Configuration}
 */
const config = {
  productName: 'bbfs-dp',
  appId: 'org.bfchain.bbfs',
  directories: {
    output: 'build'
  },
  // assign publish for auto-updater
  // set this to your own repo!
  // publish: [{
  //   provider: 'github',
  //   owner: '',
  //   repo: ''
  // }],
  files: [
    // don't include node_modules as all js modules are bundled into production js by rollup
    '!**/node_modules/**/*',
    'dist/electron/**/*'
    // unless you want to prevent some module to bundle up
    // list them below
  ]
}

module.exports = config
