// @ts-check
const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  retries: 0, // retries are used to determine that a test is flaky, if a test fails it will retry the test for the number of times specified
  //workers: 1, // playwright uses a max of 5 workers when running parallel tests,
  // by default when running all tests playwright will run them in parallel, but when running only one test.spec it runs sequentially
  // setting workers to 1 will make it run sequentially when running all tests

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },

  reporter: "html",
  // for allure report script use command for example: npx playwright test --grep @Webs --reporter=line,allure-playwright
  // once the tests run, use command: allure generate ./allure-results --clean
  // then: allure open ./allure-report
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
