import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import GameSelection from '../components/dashboard_component/GameSelection';
import BottomTotalWining from '../components/dashboard_component/BottomTotalWining';

const Dashboard = props => {
  return (
    <View style={{height:'100%',backgroundColor:'#fff'}}>
    <View style={{height:'92%'}}>

      <ScrollView>
        <GameSelection />
      </ScrollView>
    </View>
      <View style={{height:'8%',backgroundColor:'#fff',justifyContent:'flex-end'}}>
      <BottomTotalWining/>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
