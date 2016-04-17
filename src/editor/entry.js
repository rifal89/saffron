import 'babel-polyfill';
import Application from './application';

window.onload = function() {
  
  var app = global.app = Application.create({
    element: document.getElementById('app')
  });
  
  // catch any global unhandled promise rejections 
  window.onunhandledrejection = function({ reason }) {
    console.error('unhandled promise rejection', reason.stack);
  };

  app.initialize().catch(function(error) {
    console.error(error.stack);
  });
}