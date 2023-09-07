import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const LoginScreen = ({ listaUsuarios }) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  

    const handleLogin = () => {
        if (username.length > 0 && password.length > 0) {
           

            const usuarioEncontrado = listaUsuarios.find((user) => user.usuario === username);
        
            if (usuarioEncontrado) {
                if (usuarioEncontrado.clave === password ) {
                    navigation.navigate("bottons");
                    setUsername('');
                    setPassword('');
                    navigation.navigate("bottons")
                  
                } else {
                    Alert.alert('Contraseña incorrecta');
                }
            } else {
                Alert.alert('Usuario no encontrado');
            }
        } else {
            Alert.alert('Por favor ingresa el usuario y la contraseña.');
        }
    };


    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.loginScreen}>
                <Text style={styles.titulo}>
                   Miningreen
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre de usuario"
                    value={username}
                    onChangeText={text => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={password}
                    onChangeText={text => setPassword(text)}
                />
            
                 
                <View style={styles.ContenedorBotones}>
                    <View style={styles.botones}>
                        <Button onPress={handleLogin} title="Ingresar" />   
                        <Button onPress={() => navigation.navigate("RegisterScreen")} title="Registrar"/>
                    </View>
                </View>
            
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#CCE3DE",
    },
    buttonContainer: {
        width: 200,
        height: 40,
        marginBottom: 10,
        flexDirection: "column",
        justifyContent: 'space-between'
    },
    loginScreen: {
        backgroundColor: "#CCE3DE",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40%',
    },
    titulo: {
        fontSize: 30,
        color: "black",
        marginTop:-70,
        marginBottom: 40,
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#EAF4F4',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    ContenedorBotones: {
        backgroundColor: "#CCE3DE",
        justifyContent :'center',
        alignItems: 'center',
        marginTop: 10,

    },
    botones: {
        backgroundColor: "#CCE3DE",
        width: 240,
        flexDirection: "row",
        justifyContent :'space-between',
        alignItems:'center'
    },
});

export default LoginScreen;
