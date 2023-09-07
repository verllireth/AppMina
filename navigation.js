
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // Importa createStackNavigator
import { MaterialCommunityIcons } from '@expo/vector-icons'; 



// Importa los componentes de pantalla con los nombres en camelCase
import HomeScreen from './screens/HomeScreen';
import ConsultaHoras from "./screens/ConsultHour";
import Novedades from "./screens/News";
import StackScreen from "./screens/StackScreen";
import VerNovedades from "./screens/SeeNews";
import incapacidades from "./screens/Inability";

import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";



const HomeStack = createStackNavigator(); // Agrega la creación de un Stack.Navigator

function Mystack() {
  const [listaUsuarios, setListaUsuarios] = useState([]); // Initialize your user array here

  return (
    <HomeStack.Navigator
        initialRouteName="LoginScreen"
        options={{
            headerTintColor: '#10451D',
            title: false,
        }}
    >
        <HomeStack.Screen
            name='LoginScreen'
            children={() => <LoginScreen listaUsuarios={listaUsuarios} setListaUsuarios={setListaUsuarios} />}
        />

        <HomeStack.Screen
            name='RegisterScreen'
            children={() => <RegisterScreen listaUsuarios={listaUsuarios} setListaUsuarios={setListaUsuarios} />}
            options={{
                headerTintColor: '#10451D',
                headerBackTitleVisible: true,
                title: false,
            }}
        />

        
      <HomeStack.Screen
        name="bottons"
        component={Mytabs}
        options={{

          headerTintColor:'red',
          headerBackTitleVisible: true,
          headerBackTitle:"Cerrar Sesion",
          headerTitle:" ",
        }}
      />

      <HomeStack.Screen
          name='StackScreen'
          component={StackScreen}
          options={{
          headerTintColor:'#10451D',
          headerBackTitleVisible: true,
          itle:false,
      }}
      />

      <HomeStack.Screen
          name='VerNovedades'
          component={VerNovedades}
          options={{
          headerTintColor:'#10451D',
          headerBackTitleVisible: true,
          title:false,
      }}
      />
      <HomeStack.Screen
      
       name='incapacidades'
          component={VerNovedades}
          options={{
          headerTintColor:'#10451D',
          headerBackTitleVisible: false,
          title:false,
        }}
      />


        
    </HomeStack.Navigator>
);
};



const Tab = createBottomTabNavigator(); //Agrega la creación de un botton.Navigator
function Mytabs(){
  return (
    <Tab.Navigator 
      initialRouteName="HomeScreen"
      screenOptions={{

        tabBarActiveTintColor: "#10451D",
        headerShown: false,
      }}
    >

      <Tab.Screen 
        name='HomeBotton' 
        component={HomeScreen} 
        options={{
          tabBarLabel: "CheckIn",
          tabBarIcon: ({color,size}) =>(
            <MaterialCommunityIcons name="clock-fast" size={24} color="black" />
          ),
          abBarActiveTintColor: "#10451D",
          headerShown: false,
        }}
      />

      <Tab.Screen 
        name='ConsultarH' 
        component={ConsultaHoras}
        options={{
          tabBarLabel: "consult",
          tabBarIcon: ({color,size}) =>(
            <MaterialCommunityIcons name="account-search-outline" size={24} color="black" /> ),
            //,tabBarBadge:1,
            abBarActiveTintColor: "#10451D",
            headerShown: false,
        }}

      />

      <Tab.Screen 
        name='Novedades' 
        component={Novedades} 
        options={{
          tabBarLabel: "Novedades",
          tabBarIcon: ({color,size}) =>(
            <MaterialCommunityIcons name="clock-alert-outline" size={24} color="black" />
          ),
          abBarActiveTintColor: "#10451D",
          headerShown: false,
        }}
      />
    

    </Tab.Navigator>
  );

}

export default function Navigation(){
  return(
    <NavigationContainer>
        <Mystack/>
    </NavigationContainer>
  )
}