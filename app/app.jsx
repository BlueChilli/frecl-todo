import React from "react";
import Routes from './Views/Routes.jsx';
import { Provider } from 'react-redux';

import store from "./Setup/store";

export default React.createClass({
  render(){
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
});


