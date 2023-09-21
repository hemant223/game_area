import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const BottomTotalWining = (props) => {
  return (
    <View style={{backgroundColor:'#434844',width:'100%',height:70,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
           
             <View style={{position:'relative'}}>
             <Image style={{width:100,height:80,bottom:25}}  source={require('../../assets/images/blue_profile.png')}/>
         <Text style={{ position:'absolute',fontSize:25,fontWeight:800,color:'#fff',left:43,bottom:60}}>{'0'}</Text>
             </View>
        <View style={{width:190,flexDirection:'row',backgroundColor:'#318e37',borderRadius:15,justifyContent:'space-evenly',alignItems:'center',paddingHorizontal:1,paddingHorizontal:3,paddingVertical:5}}>
        <Image style={{width:20,height:30}}  source={require('../../assets/images/trophy.png')}/>
         <View style={{alignItems:'center',justifyContent:'center',}}>
         <Text style={{ fontSize:15,fontWeight:800,color:'#fff'}}>PLAY</Text>
         <Text style={{ fontSize:15,fontWeight:800,color:'#fff'}}>TOURNAMENT</Text>
         </View>
        <Image style={{width:20,height:30}}  source={require('../../assets/images/trophy.png')}/>
        </View>

         <View style={{position:'relative'}}>
         <Text style={{ position:'absolute',fontSize:25,fontWeight:800,color:'#fff',left:43,zIndex:2,bottom:60}}>{'0'}</Text>
             <Image style={{width:100,height:80,bottom:25,}}  source={require('../../assets/images/red_profile.png')}/>
         </View>
             
    </View>
  )
}

export default BottomTotalWining

const styles = StyleSheet.create({})