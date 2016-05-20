import './index.scss';

import React from 'react';
import StageComponent from './stage';
import ComponentFragment from 'common/fragments/component';
import { MAIN_COMPONENT_NS } from 'common/fragments/namespaces';


class RootComponent extends React.Component {
  render() { 
    return <div className='m-editor-main'>
       <StageComponent {...this.props} />
    </div>;
  }
}

export default ComponentFragment.create({
  namespace: MAIN_COMPONENT_NS,
  componentClass: RootComponent
});