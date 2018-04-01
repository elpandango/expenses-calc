import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import MainContent from '../../containers/MainContent/MainContent';
import Aux from '../../hoc/Auxilliary/Auxilliary';

class Layout extends Component {
    render() {
        return (
          <Aux>
              <Toolbar/>
              <MainContent/>
          </Aux>
        );
    }
}

export default Layout;