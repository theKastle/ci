import { expect } from 'chai';
import { calculate } from './calculator';

describe('Our basic calculator', () => {
  it('should eval 1 + 2 equal 3', () => {
    expect(calculate('1+2')).to.equal(3);
  })
})