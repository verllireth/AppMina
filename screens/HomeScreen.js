import React from "react";
import { View, Text, StyleSheet, Button,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("StackScreen")}
        style={{
          backgroundColor:'purple',
          padding:10,
          marginTop: '20%',
          width: "50%",
          height: 'auto',
          alignSelf: "center",
          borderRadius: 5,
        }}
      > 
        <Text 
          style={{
            
            color:"white",
            textAlign:"center",
            
          }}  
        >Bienvenido a ss</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",       // Center horizontally
    
    
  },
  title: {

    color: "black" ,
    alignItems: "center",   
    marginTop:20,
    fontSize: 40,

    
  }
  
});

export default HomeScreen;

