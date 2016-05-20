import expect from 'expect.js';
import BaseFragment from './base';
import FragmentCollection from './collection';

describe(__filename + '#', function() {
  it('can be created', function() {
    FragmentCollection.create();
  });
  
  it('can register a fragment', function() {
    var c = FragmentCollection.create();
    c.push(BaseFragment.create({ namespace: 'ab' }));
    expect(c.length).to.be(1);
    expect(c[0].namespace).to.be('ab'); 
  });
  
  it('throws an error if a registering a non-fragment', function() {
    var c = FragmentCollection.create();
    expect(function() {
      c.push({ namespace: 'ab' });
    }).to.throwException();
  });
  
  it('can search for a fragment', function() {
    var c = FragmentCollection.create();
    c.push(
      BaseFragment.create({ namespace: 'ab' }),
      BaseFragment.create({ namespace: 'ab' }),
      BaseFragment.create({ namespace: 'cd' })
    );
    
    expect(c.search('ab')).to.eql([{ namespace: 'ab' }, { namespace: 'ab' }]);
  });
});