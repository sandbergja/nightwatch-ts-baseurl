import {NightwatchTests} from 'nightwatch';

const home: NightwatchTests = {
  'Github Title test': () => {
    browser
      .verify.equal(browser.baseURL, 'https://github.com')
      .url(browser.baseURL)
      .assert.titleEquals('GitHub: Where the world builds software · GitHub')
      .end();
  }
};

export default home;
