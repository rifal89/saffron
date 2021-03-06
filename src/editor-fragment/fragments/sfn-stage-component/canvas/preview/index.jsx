import './index.scss';

import React from 'react';
import RegisteredComponent from 'common/react/components/registered';

export default class PreviewComponent extends React.Component {
  render() {
    return (<div className='m-editor-stage-preview'>
      <RegisteredComponent {...this.props} ns='components/preview' />
    </div>);
  }
}
