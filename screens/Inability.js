import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';


    const Novedades = () => {
        const navigation = useNavigation();
        
        const [incapacidadInicio, setIncapacidadInicio] = useState(new Date());
        const [incapacidadFin, setIncapacidadFin] = useState(new Date());


        const [incapacidad, setIncapacidad] = useState("");
        const [novedadesList, setNovedadesList] = useState([]); 
    
        const registrarNovedades = () => {
            const nuevaNovedad = {  incapacidad: {
                inicio: incapacidadInicio,
                fin: incapacidadFin,
                dias: calcularDiasIncapacidad()
            } };

            setNovedadesList([...novedadesList, nuevaNovedad]);
            setIncapacidad("");
            Alert.alert("Novedad registrada")
            {/*  navigation.navigate('VerNovedades', { novedades: nuevasNovedades });*/}
           
        };

        const calcularDiasIncapacidad = () => {
            if (incapacidadInicio && incapacidadFin) {
                const inicio = new Date(incapacidadInicio);
                const fin = new Date(incapacidadFin);
                const diferencia = Math.abs(fin - inicio);
                const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24)) + 1;
                return dias;
            }
            return 0;
        };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Novedades</Text>
            
            <View style={styles.ContenedorFechas}>
                <View style={styles.ContenedorFechasText}>
                    <Text style={styles.TextFechas}>Fecha inicio</Text>
                    <Text>Fecha fin</Text>
                </View>
                        
                        {/*mode="datetime" */}
                <View style={styles.ContenedorFechasF}>
                    <DateTimePicker
                        value={incapacidadInicio}
                        mode="date"
                        onChange={(event,date) => setIncapacidadInicio(date)}
                        minimumDate={new Date(incapacidadInicio)}

                        />

                    <DateTimePicker
                        display="default"
                        value={incapacidadFin}
                        mode="date"
                        onChange={(event,date) => setIncapacidadFin(date)}
                        minimumDate={new Date(incapacidadInicio)}

                    />
                </View>
            </View>

            <Button title="Registrar Novedades" onPress={registrarNovedades} />
            
            <Button title="Ver Novedades Registradas"
             onPress={() => navigation.navigate('VerNovedades', { novedades: novedadesList })}

             />

        </View>
    );
};

const styles = StyleSheet.create({
    TextFechas: {
    marginRight:170,
    }
,    ContenedorFechasF: {
        backgroundColor: "white",
        justifyContent: 'space-between',
        flexDirection: 'row',

        textAlign: "center",
        padding:5,
    },
    ContenedorFechasText: {
        backgroundColor: "white",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        padding:5,


    },
    ContenedorFechas: {
        backgroundColor: "white",
        height: 80,
        flexDirection: "column",
        marginBottom: 10,  
        justifyContent: 'center',

    },
    container: {
        flex: 1,
        backgroundColor: "#ffff",
        padding: 20,
    },
    titulo: {
        fontSize: 30,
        color: "black",
        marginBottom: 20,
        textAlign: "center",
        marginBottom: 70,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
});

export default Novedades;
