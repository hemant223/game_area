import {StyleSheet, Text, View, Image,ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import ADI from 'react-native-vector-icons/AntDesign';
import FAI from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const StartGame = props => {
  const navigation = useNavigation();
const handleFriend=() => {
  navigation.navigate(`${props.route.params.navigationTo}`)

}

  return (
    <View style={{width: '100%', height: '100%'}}>
      <LinearGradient colors={['#e98092', '#e98092', '#e6c2c9']}  style={{  opacity:0.7,height: '30%',  backgroundColor: '#fff', alignItems: 'center',justifyContent: 'center', backgroundColor:''}}>
        <Image
          source={require('../assets/images/memory_text.png')}
          style={{width: 250, height: 115,}}
        />
      </LinearGradient>

      <View style={{height: '70%', backgroundColor: '#dcf6ff', alignItems: 'center',}}>
        <View
          style={{
            marginTop:-40,
            width: '85%',
            backgroundColor: '#fff',
            height: '68%',
            borderRadius: 40,
            elevation: 10,
            padding: 5,
            alignItems: 'center',
            // justifyContent: 'center',
          }}>
          <View style={{marginTop: 20}}>
            <Text
              style={{
                color: '#282b28',
                fontSize: 22,
                fontWeight: 900,
                color: '#242724',
              }}>
              {'Flip 2 cards and find pairs.'}
            </Text>
          </View>
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 17, fontWeight: 900, color: '#066406'}}>
              {'How to play'}
            </Text>
            <ADI
              style={{marginLeft: 10, marginTop: 2, color: '#066406'}}
              name={'play'}
              size={25}
            />
          </View>

          <TouchableOpacity onPress={()=>{handleFriend();}} style={{flexDirection: 'row', marginTop: 30,alignItems: 'center',backgroundColor:'#217ed2',paddingVertical:5,borderRadius:10,elevation:15,width:'70%',justifyContent:'center'}}>
            <View>
              <FAI style={{color: '#fff'}} name={'user-friends'} size={50} />
            </View>
            <View style={{marginLeft:10,paddingVertical:10}}>
                <Text>
                   PLAY VS. 
                </Text>
                <Text style={{fontSize:30,color:'#fff',fontWeight:900}}>
                   FRIEND
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{alert('COMMING SOON BOT')}} style={{flexDirection: 'row', marginTop: 30,alignItems: 'center',backgroundColor:'#217ed2',paddingVertical:5,borderRadius:10,elevation:15,width:'70%',justifyContent:'center'}}>
            <View>
              <FAI style={{color: '#fff'}} name={'robot'} size={50} />
            </View>
            <View style={{marginLeft:10,paddingVertical:10}}>
                <Text>
                   PLAY VS. 
                </Text>
                <Text style={{fontSize:30,color:'#fff',fontWeight:900}}>
                   BOT
                </Text>
            </View>
          </TouchableOpacity>
        </View>

          <TouchableOpacity onPress={()=>{navigation.navigate('Dashboard')}} style={{width:'35%'}} >
          <LinearGradient    colors={['#e98092', '#e98092', '#e6c2c9']} style={{alignItems:'center',justifyContent:'center',paddingVertical:10,marginTop:20,borderRadius:10}} >
                   <Text style={{fontSize:30,fontWeight:900,color:'#fff'}}> Back </Text>
          </LinearGradient>
                 </TouchableOpacity>


      </View>
    </View>
  );
};

export default StartGame;

const styles = StyleSheet.create({});
