import React from 'react';
import ReactDOM from 'react-dom';
import throttle from 'lodash.throttle';
import FactoryFragment from 'common/fragments/factory';
import { APP_NS, MAIN_COMPONENT_NS } from 'common/fragments/queries';
import { INITIALIZE, DISPOSE } from 'common/messages';
import { CallbackNotifier, TypeNotifier } from 'common/notifiers';

export default FactoryFragment.create({
  namespace: APP_NS,
  factory: {
    create: create
  }
});

function create(app) {
  
  var { notifier, fragments } = app;
  
  notifier.push(
    TypeNotifier.create(INITIALIZE, CallbackNotifier.create(initialize))
  );
  
  // after initialization, start rendering
  function initialize() {
    render(); 
    notifier.push(CallbackNotifier.create(throttle(render, 100)));
  }
  
  // called whenever a new notification is dispatched
  function render() {
    ReactDOM.render(
      fragments.searchOne(MAIN_COMPONENT_NS).create({
        notifier  : notifier,
        fragments : fragments
      }),
      app.element
    );
  }
}