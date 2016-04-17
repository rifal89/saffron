import expect from 'expect.js';
import EditorApplication from 'editor/application';

describe(__filename + '#', function() {
  
  var visibleDiv;
  var app;
  
  beforeEach(async function() {
    app = EditorApplication.create({
      element: visibleDiv = document.createElement('div')
    });
    
    document.body.appendChild(visibleDiv);
    
    await app.initialize();
  });
  
  afterEach(async function() {
    document.body.removeChild(visibleDiv);
    app.dispose();
  }); 
  
  it('is properly displaying correct information', function() {
    // TODO
  });
});