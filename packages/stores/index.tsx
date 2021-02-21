  
import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';

import { reducer } from './src/reducer';

const store = createStore(reducer);

const Provider: React.ComponentType = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
  )
};

export default Provider;