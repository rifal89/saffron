import Logger from 'common/logger';
import { LOAD } from 'common/messages';
import { LOG_DISPATCHER_NS } from 'common/logger/namespaces';
import { ApplicationFragment } from 'common/fragments';
import { TypeDispatcher, CallbackDispatcher } from 'common/dispatchers';

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
  
  // register the logger as a global application 
  // property
  var logger = app.logger = Logger.create();
  
  dispatcher.push(
    TypeDispatcher.create(
      LOAD,
      CallbackDispatcher.create(load)
    )
  );
  
  function load(message) { 
    logger.dispatcher.push(
      ...fragments.search(LOG_DISPATCHER_NS).map((fragment) => fragment.create(config.log))
    );
  }
}