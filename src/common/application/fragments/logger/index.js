import Logger from 'common/logger';
import { LOAD } from 'common/messages';
import { LOG_DISPATCHER_NS } from 'common/logger/namespaces';
import { ApplicationFragment } from 'common/fragments';
import { TypeDispatcher, CallbackDispatcher, DispatcherCollection } from 'common/dispatchers';

/**
 * Console log fragment for the application.  
 */

export default ApplicationFragment.create({
  factory: {
    create: create
  }
});

function create(app) {
  
  var { dispatcher, config, fragments } = app;
  
  // scope the logger to a limited collection
  var logDispatcher = DispatcherCollection.create();
  
  // register the logger as a global application 
  // property
  app.logger = Logger.create({ 
    dispatcher: logDispatcher
  });
  
  dispatcher.push(
    TypeDispatcher.create(
      LOAD,
      CallbackDispatcher.create(load)
    )
  );
  
  function load(message) { 
    logDispatcher.push(
      ...fragments.search(LOG_DISPATCHER_NS).map((fragment) => fragment.create(config.log))
    );
  }
}