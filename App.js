import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';


const App=(navigation)=>{
  return (
    <View style={{flew: 1, backgroundColor: '#1A1A1A'}}>
        <Text style={{color:'#fff', fontSize:20, fontWeight:'700', marginTop:30, marginLeft: 20}}>Book App</Text>
        <Text style={{color:'#fff', fontSize:20, fontWeight:'700', marginTop:30, marginLeft: 20}}>New Books </Text>
        <View style={{marginTop:30}}>
        <FlatList data={[1,1,1,1,1,1]} horizontal showsHorizontalScrollIndicator={false} renderItem={({item, index})=>{
          return(
            <TouchableOpacity style={{width:120, height:120, borderRadius:10,  borderWidth:1, borderColor:'#fff',marginLeft:20,}}
             onPress={()=>{
              navigation.navigate('ViewBook');
            }}>

              <Image source={require('./src/pdfs/pdf.png')}style={{width:50,height:50, alignSelf:'center', marginTop:20}}/>
              <Text style={{color:'#fff',alignSelf:'center', marginTop:20, fontWeight:700 }}>{'Book'+(index+1)}</Text>
            </TouchableOpacity>
          )
        }}/>
        </View>
        <Text style={{color:'#fff', fontSize:20, fontWeight:'700', marginTop:30, marginLeft: 20}}>Trending Books </Text>
        <FlatList data={[1,1,1,1,1,1]} numColumns={2} renderItem={({item, index})=>{
          return(
            <View style={{width:'50%', height:130, justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity style={{width:'80%', height:120, borderRadius:1,  borderWidth:1, borderColor:'#fff',marginTop:20}}>
              <Image source={require('./src/pdfs/pdf.png')}style={{width:50,height:50, alignSelf:'center', marginTop:20}}/>
              <Text style={{color:'#fff',alignSelf:'center', marginTop:20, fontWeight:700 }}>{'Book'+(index+1)}</Text>
              <Text style={{fontSize:100,color:'red', position:'absolute',left:-20}}>{index+1}</Text>
            </TouchableOpacity>
            </View>
          )
        }}/>

    </View>
  );
};
export default App;