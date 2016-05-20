import expect from 'expect.js';
import createFactory from './create-factory';

describe(__filename + '#', function() {
  it('by default uses the Object as the base class', function() {
    
    class SubObject {
      static create = createFactory();   
    }
   
    expect(SubObject.create()).to.be.an(Object);
    
    for (var i = 10; i--;) {
      var ary = Array.apply(null, Array(i)).map(Number.prototype.valueOf, 0);
      expect(SubObject.create.apply(SubObject, ary)).to.be.an(SubObject);
    }
  });
  
  it('can create an instance of an array', function() {
    
    class SubArray extends Array {
      static create = createFactory(Array);  
      add(v) {
        this.push(v);
      } 
    }
    
    var a = SubArray.create();
    
    expect(SubArray.create(a)).to.be.an(Array);
    a.add(1);
    expect(a.length).to.be(1);
    expect(a[0]).to.be(1);
  });
});