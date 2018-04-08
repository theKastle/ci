import { expect } from 'chai';
import { calculate } from './calculator';

// Unit Test: tests for the calculator module
describe('Our basic calculator', () => {
  it('should eval 1 + 2 equal 3', () => {
    expect(calculate('1+2')).to.equal(3);
  })

  it ('should eval 1*2*4 equals 8', () => {
    expect(calculate('1*2*3')).to.equal(8);
  })
})