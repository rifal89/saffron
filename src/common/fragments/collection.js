import BaseFragment from './base';
import Collection from 'common/collection';

class FragmentCollection extends Collection {
  
  constructor() {
    super(...arguments);
    this._fragments = {};
  }
  
  search(query) {
    return (this._fragments[query] || []);
  }
  
  searchOne(query) {
    return this.search(query)[0];
  }
  
  splice(index, count, ...entries) {
    entries.forEach((fragment) => {
      
      if (!(fragment instanceof BaseFragment)) {
        throw new Error(`registered fragment must be a BaseFragment`); 
      }
      
      var { namespace } = fragment;
      
      if (!this._fragments[namespace]) {
        this._fragments[namespace] = [];
      }
      
      this._fragments[namespace].push(fragment);
    });
    
    super.splice(index, count, ...entries);
  }
}

FragmentCollection.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

export default FragmentCollection;