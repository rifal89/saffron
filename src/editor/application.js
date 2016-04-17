import BaseApplication from 'common/application';
import mainComponentFragment from './fragments/component-main'; 
import initializeMainComponentFragment from './fragments/initialize-main-component';
 
class EditorApplication extends BaseApplication {
  static fragments = [
    initializeMainComponentFragment,
    mainComponentFragment
  ];
}

export default EditorApplication;
