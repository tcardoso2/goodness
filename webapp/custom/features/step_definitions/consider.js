const { setWorldConstructor } = require('@cucumber/cucumber');
let consider = require('../../main.js');

class ConsiderJS {
  constructor() {
    this.consider = consider;
    this.memory = [];
  }

  remember(memory) {
    this.memory.push(memory);
  }
}

setWorldConstructor(ConsiderJS);
