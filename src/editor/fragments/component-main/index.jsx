import React from 'react';
import ComponentFragment from 'common/fragments/component';
import { MAIN_COMPONENT_NS } from 'common/fragments/queries';

class RootComponent extends React.Component {
  render() {
    return <div>{ Math.random() }</div>;
  }
}

export default ComponentFragment.create({
  namespace: MAIN_COMPONENT_NS,
  componentClass: RootComponent
});