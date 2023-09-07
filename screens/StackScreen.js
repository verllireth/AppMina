import React from "react";
import { View, Text, StyleSheet } from 'react-native';

const StackScreen = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.titulo}> 
                Bienvenido
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffff",
    },
    titulo: {
        fontSize: 30,
        color: "black",
    }
});

export default StackScreen;
