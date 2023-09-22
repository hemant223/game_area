import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainNavigationStack from './src/navigations/mainNavigationStack/MainNavigationStack';
import {Provider} from 'react-redux';
import store from './src/helper/utils/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigationStack />
    </Provider>
   
  );
};

export default App;

const styles = StyleSheet.create({});
