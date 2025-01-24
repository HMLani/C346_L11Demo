import React,{useState} from 'react';
import { StatusBar, View, Button, Text, TextInput, Alert } from 'react-native';

const Add = ({navigation, route}) => {
  const[name,setName] = useState("");

  return (
    <View>
      <StatusBar/>
      <Text>Name:</Text>
      <TextInput style={{borderWidth:1}} onChangeText={(text)=>setName(text)}/>
      <Button title='Submit'
      onPress={()=>{
          let myData = JSON.parse(route.params.datastr);
          let item = { name: name };
          myData.push(item);

          fetch(
              'https://jsonhost.com/json/b3d8544fad08cad51055613eabfa5d0c',
              {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Authorization': 'h9gmmnyejxov7x5waipg2xdi1nr6te5i'
                  },
                  body: JSON.stringify(myData)
              }
          )
              .then((res) => {
                  navigation.navigate('Home');
              })
        }
      }
      />
    </View>
  );
};

export default Add;
