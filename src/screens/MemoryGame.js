import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {
  CheckLengthWiseMemoryGameCard,
  SelectedMemoryGameItem,
} from '../helper/utils/redux/slices/MemoryGameSlice';
import {useNavigation} from '@react-navigation/native';

var arr = {};
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const MemoryGame = () => {
  const navigation = useNavigation();
     
   
  const [items, setItems] = useState([
    {
      id: 1,
      status: false,
      status1: false,
      img: require('../assets/images/1.png'),
      bgColor: 'green',
    },
    {
      id: 2,
      status: false,
      status1: false,
      img: require('../assets/images/2.png'),
      bgColor: '#353b48',
    },
    {
      id: 3,
      status: false,
      status1: false,
      img: require('../assets/images/3.png'),
      bgColor: '#7f8fa6',
    },
    {
      id: 4,
      status: false,
      status1: false,
      img: require('../assets/images/4.png'),
      bgColor: '#ED4C67',
    },
    {
      id: 5,
      status: false,
      status1: false,
      img: require('../assets/images/5.png'),
      bgColor: '#006266',
    },
    {
      id: 6,
      status: false,
      status1: false,
      img: require('../assets/images/6.png'),
      bgColor: '#C4E538',
    },
    {
      id: 7,
      status: false,
      status1: false,
      img: require('../assets/images/7.png'),
      bgColor: '#1B1464',
    },
    {
      id: 8,
      status: false,
      status1: false,
      img: require('../assets/images/8.png'),
      bgColor: '#130f40',
    },
    {
      id: 9,
      status: false,
      status1: false,
      img: require('../assets/images/9.png'),
      bgColor: '#22a6b3',
    },
    {
      id: 10,
      status: false,
      status1: false,
      img: require('../assets/images/10.png'),
      bgColor: '#e056fd',
    },
    {
      id: 11,
      status: false,
      status1: false,
      img: require('../assets/images/1.png'),
      bgColor: 'green',
    },
    {
      id: 12,
      status: false,
      status1: false,
      img: require('../assets/images/2.png'),
      bgColor: '#353b48',
    },
    {
      id: 13,
      status: false,
      status1: false,
      img: require('../assets/images/3.png'),
      bgColor: '#7f8fa6',
    },
    {
      id: 14,
      status: false,
      status1: false,
      img: require('../assets/images/4.png'),
      bgColor: '#ED4C67',
    },
    {
      id: 15,
      status: false,
      status1: false,
      img: require('../assets/images/5.png'),
      bgColor: '#006266',
    },
    {
      id: 16,
      status: false,
      status1: false,
      img: require('../assets/images/6.png'),
      bgColor: '#C4E538',
    },
    {
      id: 17,
      status: false,
      status1: false,
      img: require('../assets/images/7.png'),
      bgColor: '#1B1464',
    },
    {
      id: 18,
      status: false,
      status1: false,
      img: require('../assets/images/8.png'),
      bgColor: '#130f40',
    },
    {
      id: 19,
      status: false,
      status1: false,
      img: require('../assets/images/9.png'),
      bgColor: '#22a6b3',
    },
    {
      id: 20,
      status: false,
      status1: false,
      img: require('../assets/images/10.png'),
      bgColor: '#e056fd',
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [greenCount, setGreenCount] = useState(0)
  const [redCount, setRedCount] = useState(0)
  const [toogleCount, setToogleCount] = useState(true)
  const [showWinUI, setShowWinUI] = useState()

  const shuffleItems = () => {
    const shuffledItems = shuffleArray([...items]);
    setItems(shuffledItems);
  };
  useEffect(() => {
    shuffleItems();
  }, [])
  

  const handleSelectedCardItem = (itm, ind) => {
    if (selectedItem) {
      if (selectedItem.bgColor === itm.bgColor) {
        setSelectedItem(null);
        setItems((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.id === itm.id ? { ...prevItem, status: true } : prevItem
          )
        );
        if(toogleCount){
          setGreenCount(greenCount+1)
        }else{
          setRedCount(redCount+1)
        }
      } else {
        setSelectedItem(itm);
        setItems((prevItems) =>
          prevItems.map((prevItem) =>
            prevItem.id === itm.id ? { ...prevItem, status: true } : prevItem 
          )
        );
        let shouldRunConditionByTimeout = true;
        if (shouldRunConditionByTimeout) {
          setTimeout(() => {
            shouldRunConditionByTimeout = false;
            setSelectedItem(null);
            setItems((prevItems) =>
              prevItems.map((prevItem) =>
                prevItem.id === itm.id ? { ...prevItem, status: false } : prevItem 
              )
            );
            setItems((prevItems) =>     
            prevItems.map((prevItem) =>
              prevItem.id === selectedItem.id
                ? { ...prevItem, status: false }
                : prevItem
            )
          );
          setToogleCount(!toogleCount)
          }, 500); 
        }

      }
    } else {
      setSelectedItem(itm);
      setItems((prevItems) =>
        prevItems.map((prevItem) =>
          prevItem.id === itm.id ? { ...prevItem, status: true } : prevItem
        )
      );
    }
    
  };

const handleExit=()=>{
  navigation.navigate('Dashboard')
}

const forWinGame=()=>{
  const areAllStatusTrue = items.every(item => item.status === true);
  if(areAllStatusTrue){
    setShowWinUI(
      redCount>greenCount? <View style={{position:'absolute',zIndex:1,}}>                      
        <Text style={{color:'red',fontSize:80}}>Red Win</Text>                      
      </View>:redCount===greenCount?<View style={{position:'absolute',zIndex:1,}}>                      
        <Text style={{color:'#fff',fontSize:50}}>Draw</Text>                      
      </View>:<View style={{position:'absolute',zIndex:1,}}>                      
        <Text style={{color:'green',fontSize:50}}>Green Win</Text>                      
      </View>
    )
  setTimeout(() => {
    // navigation.navigate('Dashboard')
  }, 5000);
}
}
useEffect(() => {
  forWinGame();
}, [items])



  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#3794d5',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
       
      { showWinUI&& showWinUI } 
       

        <TouchableOpacity onPress={()=>{handleExit();}} style={{position:'absolute',top:105,right:-12,backgroundColor:'#fff', transform: [{ rotate: '270deg'}],zIndex:1,paddingVertical:20,paddingHorizontal:25,borderTopLeftRadius:50,borderTopRightRadius:50}}>
          <Text style={{color:'#353b48',letterSpacing:3,fontWeight:900}}>Exit</Text>
        </TouchableOpacity>
      <View
        style={{width:50, backgroundColor: '#27ae60',borderRadius:10,borderColor: toogleCount?'#000':'#27ae60',borderWidth:toogleCount?3:1,marginBottom:5}}>
        <Text style={{color:'#fff',textAlign:'center'}}>{greenCount}</Text>
      </View>
      <View
        style={{
          height: '80%',
          backgroundColor: '#353b48',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          borderWidth: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            opacity:showWinUI?0.2:null
          }}>
          {items.map((itm, ind) => {
            return (
             itm.status? <View
                key={ind}
                style={{
                  width: 70,
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f0932b',
                  // myId == itm.id ? selectedColor : '#f0932b',
                  margin: 5,
                  borderWidth: 5,
                  borderRadius: 5,
                  borderColor: '#fff',
                  position: 'relative',
                }}>
                {itm.status && (
                  <Image style={{width: 50, height: 50}} source={itm.img} />
                )}
              </View>:
              <TouchableOpacity
                onPress={() => {
                  handleSelectedCardItem(itm, ind);
                }}
                key={ind}
                style={{
                  width: 70,
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#f0932b',
                  margin: 5,
                  borderWidth: 5,
                  borderRadius: 5,
                  borderColor: '#fff',
                  position: 'relative',
                }}>
                {itm.status && (
                  <Image style={{width: 50, height: 50}} source={itm.img} />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View
        style={{width:50, backgroundColor: '#ff6b6b',borderRadius:10,borderColor:toogleCount?'red':'#000',borderWidth:toogleCount?1:3,marginTop:5}}>
        <Text style={{color:'#fff',textAlign:'center'}}>{redCount}</Text>
      </View>
    </View>
  );
};

export default MemoryGame;

var styles = StyleSheet.create({
 
});
