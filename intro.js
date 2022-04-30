const puppet = require("puppeteer");
let page;
let browseropenpromise = puppet.launch({
  headless: false,
  slowMo: true,
  defaultViewport: null,
  args :["--start-maximized"]
});

browseropenpromise
  .then(function (browser) {
    // console.log("Browser Opened");
    const pages = browser.pages();
    return pages;
  })
  .then(function (browserpage) {
    page = browserpage[0];
    let res = page.goto("https://www.google.com/");
    return res;
  })
  .then(function () {
    const errorcheck = page.waitForSelector("input[type='text']", {
      visibilty: true,
    });
    return errorcheck;
  })
  .then(function () {
    const typeurl = page.type("input[type='text']", "pepcoding");
    return typeurl;
  })
  .then(function () {
    const enterr = page.keyboard.press("Enter");
    return enterr;
  })
  .then(function () {
    const errorcheck = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
      visibilty: true,
    });
    return errorcheck;
  })
  .then(function () {
    const texx = page.click("h3.LC20lb.MBeuO.DKV0Md");
  }).catch(function(error){
    console.log(error)
  });
console.log("OKK");



