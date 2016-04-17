import 'babel-polyfill';
import Application from './application';

window.onload = function() {
  
  var app = global.app = Application.create({
    element: document.getElementById('app')
  }); 
  
  app.initialize();
}