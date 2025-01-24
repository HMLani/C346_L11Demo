import React,{useState, useEffect} from 'react';
import {StatusBar, Button, FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
   listStyle: {
      borderWidth: 1,
   },
});

const Home = ({navigation}) => {
  const [myData, setMyData] = useState([]);

    useEffect(() => {
        fetch('https://jsonhost.com/json/b3d8544fad08cad51055613eabfa5d0c')
            .then((res) => { return res.json(); })
            .then((myJSON) => {
                let myFliteredData = myJSON.filter((item) => item.name.includes('Soda'));
                setMyData(myFliteredData);
            });
    }, []);

  const renderItem = ({item, index, section}) => {
    return (
    <View style={styles.listStyle}>
    <Text>{item.name}</Text>
    </View>
    );
  };

   return (
    <View>
      <StatusBar/>
	  <Button
          title='Add Item'
          onPress={()=> {
              navigation.navigate("Add",{datastr:JSON.stringify(myData)})
          }}
      />
      <FlatList data={myData} renderItem={renderItem}/>
    </View>
  );
};

export default Home;
