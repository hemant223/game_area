import {StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import MainNavigationStack from './src/navigations/mainNavigationStack/MainNavigationStack';
import {Provider} from 'react-redux';
import store from './src/helper/utils/redux/store';
// import firestore from '@react-native-firebase/firestore';
const App = () => {
   
  // useEffect(() => {
  //   firestore()
  //   .collection('Users')
  //   .add({
  //     name: 'Ada Lovelace',
  //     age: 30,
  //   })
  //   .then(() => {
  //     console.log('User added!');
  //   });
  // }, [])
  

  return (
    <Provider store={store}>
      <MainNavigationStack />
    </Provider>
   
  );
};

export default App;

const styles = StyleSheet.create({});
