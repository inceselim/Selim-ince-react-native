import * as React from 'react';

//
// Main Stack Navigation
//
import { StackNav } from '../navigation/StackNav';

//
// Redux
//
import { Provider } from 'react-redux';
import store from '../redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StackNav />
    </Provider>
  );
}