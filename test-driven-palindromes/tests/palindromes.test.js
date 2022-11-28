const palindromes = require('../palindromes');

describe('palindromes()', () => {
  it('correctly identifies one-word palindromes', () => {
    expect(palindromes('madam')).toEqual(['madam']);
  });

  it('ignores case', () => {
    expect(palindromes('Wow')).toEqual(['wow']);
  });

  it('ignores punctuation', () => {
    expect(palindromes('yo, banana boy!')).toEqual(['yobananaboy']);
  });

  it('detects multi-word palindromes', () => {
    expect(palindromes('A man, a plan, a canal, Panama')).toEqual([
      'amanaplanacanalpanama',
    ]);
  });

  it('returns an empty array when given no palindroms', () => {
    expect(palindromes('tic tac toe')).toEqual([]);
  })
});
