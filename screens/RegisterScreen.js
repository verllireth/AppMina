import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const RegisterScreen = ({ listaUsuarios, setListaUsuarios }) => {
    const navigation = useNavigation();

    const [registerUsername, setRegisterUsername] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?+&])([A-Za-z\d$@$!%*?+&]|[^ ]){8,8}$/;


    const handleRegister = () => {
        if (!regexp_password.test(registerPassword)) {
            if (registerPassword.length < 8) {
                Alert.alert("La clave debe contener al menos 8 caracteres.");
            } else if (!/[A-Z]/.test(registerPassword)) {
                Alert.alert("La clave debe contener al menos una letra en mayúscula.");
            } else if (!/[a-z]/.test(registerPassword)) {
                Alert.alert("La clave debe contener al menos una letra en minúscula.");
            } else if (!/\d/.test(registerPassword)) {
                Alert.alert("La clave debe contener al menos un número.");
            } else if (!/[$@$!%*?+&]/.test(registerPassword)) {
                Alert.alert("La clave debe contener al menos un carácter especial ($@$!%*?+&).");
            } else {
                // This block should not be reached, as your regex already checks these conditions.
                Alert.alert("La clave no cumple con las condiciones requeridas.");
            }
        } else {
            const usuarioEncontrado = listaUsuarios.find((user) => user.usuario === registerUsername);

            if (usuarioEncontrado) {
                Alert.alert("El usuario ya existe, intenta otro usuario");
            } else {
                const nuevoUsuario = {
                    usuario: registerUsername,
                    clave: registerPassword
                };
                setListaUsuarios([...listaUsuarios, nuevoUsuario]);
                Alert.alert("Usuario registrado correctamente");
                navigation.navigate("LoginScreen");

              
            }
        }
    };

    

    return (
        <ScrollView style={styles.scroll} >
            <View style={styles.registerScreen}>
                <Text style={styles.titulo}>
                    Registro de cuenta
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nombre de usuario"
                    value={registerUsername}
                    onChangeText={text => setRegisterUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry
                    value={registerPassword}
                    onChangeText={text => setRegisterPassword(text)}
                 />
                <Button title="Registrarse" onPress={handleRegister}  />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#A4C3B2",
    },
    registerScreen: {
        marginTop: '40%',
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#A4C3B2",

    },
    titulo: {
        fontSize: 30,
        color: "black",
        marginBottom: 20,
        
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        backgroundColor: "#EAF4F4",

    },
  
});

export default RegisterScreen;
