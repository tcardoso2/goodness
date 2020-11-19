
const { Given, When, Then } = require("@cucumber/cucumber");
const assert = require("assert").strict

Given('a file in {string}', function (string) {
  this.remember(this.consider.a.file(string));
});

When('I read the file', function () {
  this.remember(this.memory.pop().readWait());
});

Then('the contents should equal {string}', function (string) {
  assert.equal(this.memory.pop(), string);
});


