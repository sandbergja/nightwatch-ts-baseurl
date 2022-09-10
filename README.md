To recreate the issue: `npm i && npx nightwatch`

This will verify that the baseURL is undefined, and that we can't navigate to it
using `browser.url`.


Steps I used to create this repo:

```
> npm init nightwatch

[...]

? What is your Language - Test Runner setup? TypeScript - Nightwatch Test Runner
? Where do you want to run your e2e tests? On my local machine
? Where you'll be testing on? Firefox
? Where do you plan to keep your end-to-end tests? tests
? What is the base_url of your project? https://github.com

[...]

Then modify the github test to exercise browser.baseURL
```
