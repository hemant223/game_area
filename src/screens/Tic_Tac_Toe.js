import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import {useNavigation} from '@react-navigation/native';


const Tic_Tac_Toe = () => {
  const navigation = useNavigation();
    const [toogleCount, setToogleCount] = useState(true)
    const [items, setItems] = useState([
        {id:1,img:null,status:false,imgWidth:null,imgChecker:'11',borderTopWidth:0,borderRightWidth:5,borderBottomWidth:5,borderLeftWidth:0},
        {id:2,img:null,status:false,imgWidth:null,imgChecker:'2222',borderTopWidth:0,borderRightWidth:5,borderBottomWidth:5,borderLeftWidth:5},
        {id:3,img:null,status:false,imgWidth:null,imgChecker:'3333',borderTopWidth:0,borderRightWidth:0,borderBottomWidth:5,borderLeftWidth:5},
        {id:4,img:null,status:false,imgWidth:null,imgChecker:'3444',borderTopWidth:5,borderRightWidth:5,borderBottomWidth:5,borderLeftWidth:0},
        {id:5,img:null,status:false,imgWidth:null,imgChecker:'555',borderTopWidth:5,borderRightWidth:5,borderBottomWidth:5,borderLeftWidth:5},
        {id:6,img:null,status:false,imgWidth:null,imgChecker:'666',borderTopWidth:5,borderRightWidth:0,borderBottomWidth:5,borderLeftWidth:5},
        {id:7,img:null,status:false,imgWidth:null,imgChecker:'777',borderTopWidth:5,borderRightWidth:5,borderBottomWidth:0,borderLeftWidth:0},
        {id:8,img:null,status:false,imgWidth:null,imgChecker:'888',borderTopWidth:5,borderRightWidth:5,borderBottomWidth:0,borderLeftWidth:5},
        {id:9,img:null,status:false,imgWidth:null,imgChecker:'999',borderTopWidth:5,borderRightWidth:0,borderBottomWidth:0,borderLeftWidth:5},
    ]);
  const [showWinUI, setShowWinUI] = useState()
  const [forOpacity, setForOpacity] = useState(null)
    


const handleBtn=(itm)=>{
    setToogleCount(!toogleCount)
    setItems((prevItems) =>
    prevItems.map((prevItem) =>
      prevItem.id === itm.id ? { ...prevItem, img:toogleCount? require('../assets/images/zero.png'):require('../assets/images/cross.png'),imgWidth:toogleCount?30:60,imgChecker:toogleCount?'zero':'cross',status:true} : prevItem
    )
  );
 
}

const checkImager=()=>{
    const myCheckerDATA=[
        {id:1,indexArr:[0,1,2]},
        {id:2,indexArr:[0,3,6]},
        {id:3,indexArr:[0,4,8]},
        {id:4,indexArr:[2,5,8]},
        {id:5,indexArr:[2,4,6]},
        {id:6,indexArr:[6,7,8]},
        {id:7,indexArr:[3,4,5]},
        {id:8,indexArr:[1,4,7]},
    ]
    var checker=  myCheckerDATA.map((itm)=>{
        const valuesToCheck1 = itm.indexArr.map((index) => items[index].imgChecker);
        const firstValue1 = valuesToCheck1[0];
        return firstcheck= valuesToCheck1.every((value) => value === firstValue1);  
    })
    if(checker.some(item => item === true)){
        setForOpacity(true)
        setShowWinUI(
            <View style={{position:'absolute',zIndex:1,}}>
              <Text style={{color:'#f5f6fa',fontSize:100}}>You Win</Text>
            </View>
          )
        
    }else{
        const areAllStatusTrue = items.every(item => item.status === true);
        if(areAllStatusTrue){
            setForOpacity(true)
            setShowWinUI(
                <View style={{position:'absolute',zIndex:1,}}>
                  <Text style={{color:'#f5f6fa',fontSize:100}}>Draw</Text>
                </View>
              )
        }
       
    }
  

}
const handleExit=()=>{
    navigation.navigate('Dashboard')
  }

useEffect(() => {
    checkImager();
}, [items])


  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#7f8fa6',}}>
      { showWinUI&& showWinUI }
      <TouchableOpacity onPress={()=>{handleExit();}} style={{position:'absolute',top:105,right:-12,backgroundColor:'#fff', transform: [{ rotate: '270deg'}],zIndex:1,paddingVertical:20,paddingHorizontal:25,borderTopLeftRadius:50,borderTopRightRadius:50}}>
          <Text style={{color:'#353b48',letterSpacing:3,fontWeight:900}}>Exit</Text>
        </TouchableOpacity>
      <View style={{width:'100%',height:70,alignItems:'center',opacity:forOpacity?0.2:null}}>
      { toogleCount===true&& <Text style={{color:'red',marginBottom:20,fontSize:30}}>{'Your Turn'}</Text>}
      </View>
    <View style={{flexDirection:'row',flexWrap:'wrap',opacity:forOpacity?0.2:null,backgroundColor:'#7f8fa6',width:'80%',alignSelf:'center',justifyContent:'center'}}>
   {
    items.map((item,index)=>(
       
      item.status?<View  key={index} style={{width:80,height:80,backgroundColor:'#7f8fa6',borderTopWidth:item.borderTopWidth,borderRightWidth:item.borderRightWidth,borderBottomWidth:item.borderBottomWidth,borderLeftWidth:item.borderLeftWidth,alignItems:'center',justifyContent:'center'}} >
           {item.img &&item.imgWidth &&<Image style={{width: item.imgWidth, height: 50}} source={item.img} /> }
        </View>:
        <TouchableOpacity onPress={()=>{handleBtn(item);}} key={index} style={{width:80,height:80,backgroundColor:'#7f8fa6',borderTopWidth:item.borderTopWidth,borderRightWidth:item.borderRightWidth,borderBottomWidth:item.borderBottomWidth,borderLeftWidth:item.borderLeftWidth,alignItems:'center',justifyContent:'center'}} >
           {item.img &&item.imgWidth &&<Image style={{width: item.imgWidth, height: 50}} source={item.img} /> }
        </TouchableOpacity>
    
    ))
   }
    </View>
    <View style={{width:'100%',height:70,alignItems:'center',opacity:forOpacity?0.2:null}} >
    {  toogleCount===false&& <Text style={{color:'#000',marginTop:20,fontSize:30}}>{'Your Turn'}</Text>}
    </View>
    </View>
  )
}

export default Tic_Tac_Toe

const styles = StyleSheet.create({})