import StringTokenizer from './string';
import expect from 'expect.js';

describe(__filename + '#', function () {

  var tok = StringTokenizer.create();

  it('can tokenize a simple string', function () {
    expect(tok.tokenize('abc  d e\n\r\t'))
    .to.eql([
      { type: 'text', value: 'abc', length: 3 },
      { type: 'space', value: '  ', length: 2 },
      { type: 'text', value: 'd', length: 1 },
      { type: 'space', value: ' ', length: 1 },
      { type: 'text', value: 'e', length: 1 },
      { type: 'newLine', value: '\n', length: 1 },
      { type: 'newLine', value: '\r', length: 1 },
      { type: 'tab', value: '\t', length: 1 },
    ]);
  });
});
