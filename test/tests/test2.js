let fileToTest;
const sinon = require('sinon');
const chai = require('chai');
const greeting = require('../../greeting.js');

const { expect } = chai;

describe('stubbed /hi', () => {
  before(async () => {
    delete require.cache[require.resolve('../../fileToTest.js')];
    sinon.stub(greeting, 'greeting').callsFake((req, res, next) => 'bye!');
    fileToTest = require('../../fileToTest.js');
  });

  after(async () => {
    greeting.greeting.restore();
  });
  it('should say bye', async function () {
    expect(fileToTest()).to.be.equal('bye!');
  });
});
