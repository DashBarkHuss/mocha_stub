const chai = require('chai');
const fileToTest = require('../../fileToTest.js');

const { expect } = chai;

describe('not stubbed /hi', () => {
  it('should say hi', () => {
    expect(fileToTest()).to.be.equal('hi!');
  });
});
