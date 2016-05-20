import './scss/global';

import BaseApplication from 'common/application';
import mainComponentFragment from './fragments/component-main'; 
import initializeMainComponentFragment from './fragments/initialize-main-component';
import { fragment as consoleLogFragment } from 'common/logger/dispatchers/console';
 
class EditorApplication extends BaseApplication {
  static fragments = BaseApplication.fragments.concat([
    initializeMainComponentFragment,
    mainComponentFragment,
    consoleLogFragment
  ]);
}

export default EditorApplication;
