// @ts-check
const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  retries: 0,

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  //  projects : [
  //   {
  //     name : 'safari',
  //     use: {

  //       browserName : 'webkit',
  //       headless : true,
  //       screenshot : 'off',
  //       trace : 'on',//off,on
  //       ...devices['iPhone 11'],
  //     }

  //   },
  //   {
  //     name : 'chrome',
  //     use: {

  //       browserName : 'chromium',
  //       headless : false,
  //       screenshot : 'on',
  //       video: 'retain-on-failure',
  //       ignoreHttpsErrors:true,  //ignore ssl errors, connection is not private..
  //       permissions:['geolocation'], // to allow location in browser request pop up

  //       trace : 'on',//off,on
  //      // ...devices[''] // add device such as iphone, pixel, etc
  //    //   viewport : {width:720,height:720} // adds viewport dimensions
  //        }

  //   }
  //   ]
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: "chromium",
    screenshot: "on",
    trace: "on", //off,on
  },
};

module.exports = config;
