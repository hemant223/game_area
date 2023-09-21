import { StyleSheet, Text, View,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const GameSelection = (props) => {
    const navigation = useNavigation();
    const handleGameSelection=(item,index)=>{
      
            navigation.navigate('StartGame',{navigationTo:item.navigationTo})
        
     
    }

const DATA=[
    {id:1,gColor:['#e98092', '#e98092', '#e6c2c9'],image_text_width:150,image_text_height:70, name: 'MEMORY',image:require('../../assets/images/memory.png'),image_text:require('../../assets/images/memory_text.png') ,bgColor:'#000000',navigationTo:'MemoryGame'},
    {id:2,gColor:['#4191d5', '#4191d5', '#98c2e6'],image_text_width:150,image_text_height:68, name: 'TIC TAC TOE',image:require('../../assets/images/tic_tak_toe.png'),image_text:require('../../assets/images/tic_tak_toe_text.png'),bgColor:'#000000',navigationTo:'Tic_Tac_Toe'},
    {id:3,gColor:['#e98092', '#e98092', '#e6c2c9'],image_text_width:150,image_text_height:70, name: 'NONE',image:require('../../assets/images/memory.png'),image_text:require('../../assets/images/memory_text.png') ,bgColor:'#000000',navigationTo:'MemoryGame'},
    {id:4,gColor:['#4191d5', '#4191d5', '#98c2e6'],image_text_width:150,image_text_height:68, name: 'NONE',image:require('../../assets/images/tic_tak_toe.png'),image_text:require('../../assets/images/tic_tak_toe_text.png'),bgColor:'#000000',navigationTo:'Tic_Tac_Toe'},
    {id:5,gColor:['#e98092', '#e98092', '#e6c2c9'],image_text_width:150,image_text_height:70, name: 'NONE',image:require('../../assets/images/memory.png'),image_text:require('../../assets/images/memory_text.png') ,bgColor:'#000000',navigationTo:'MemoryGame'},
]    

  return (
    <View  style={{width:'100%',backgroundColor:'#fff',alignItems:'center'}} >
   {
    DATA.map((itm,ind) =>{
return(
    <TouchableOpacity key={ind} onPress={()=>{handleGameSelection(itm,ind);}} style={{width:'90%'}}>
    <LinearGradient colors={itm.gColor}   style={{marginVertical:10,borderWidth:6,borderColor:"#020024",borderRadius:5,backgroundColor:itm.gColor[0],flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:5,paddingVertical:5}}  >
        <Image style={{width:itm.image_text_width,height:itm.image_text_height}}  source={itm.image_text}/>
        <Image style={{width:150,height:150}}  source={itm.image}/>
    </LinearGradient>
    </TouchableOpacity>
)

    })
   }

    </View>
  )
}

export default GameSelection

const styles = StyleSheet.create({})