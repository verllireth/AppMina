import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

const VerNovedades = () => {
    const route = useRoute();
    const { novedades } = route.params;
    const renderIncapacidadInfo = (item) => {
        if (item.incapacidad && item.incapacidad.inicio && item.incapacidad.fin) {
            if (item.incapacidad.inicio.getTime() === item.incapacidad.fin.getTime()) {
                return (
                    <View style={styles.FechasNovedadesContainer}>
                        <Text>Incapacidad: Inicio • </Text>
                        <Text>Incapacidad: Fin • </Text>
                        <Text>Incapacidad: Días • 0</Text>
                    </View>
                );
            } else {
                return (
                    <View style={styles.FechasNovedadesContainer}>
                        <Text>Incapacidad: Inicio • {item.incapacidad.inicio.toString()}</Text>
                        <Text>Incapacidad: Fin •   {item.incapacidad.fin.toString()}</Text>
                        <Text>Incapacidad: Días •  {item.incapacidad.dias}</Text>
                    </View>
                );
            }
        }
        return null;
    };
    const renderLicenciaInfo = (item) => {
        if (item.licencia && item.licencia.hora) {
            const horaActual = new Date();
            const horaActualUTC = new Date(horaActual.toUTCString()); // Crear un objeto Date a partir de la cadena UTC
    
            if (horaActualUTC.getTime() === item.licencia.hora.getTime()) {
                return (
                    <View style={styles.LicenciasNovedadesContainer}>
                        <Text>Licencia: Hora • </Text>
                    </View>
                );
            } else {
                return (
                    <View style={styles.LicenciasNovedadesContainer}>
                        <Text>Licencia: Hora • {item.licencia.hora.toLocaleTimeString()}</Text>
                    </View>
                );
            }
        }
        return null;
    };
    
      
    
    
    const renderVacacionesInfo = (item) => (
        <View style={styles.VacacionesNovedadesContainer}>
            <Text>Vacaciones: {item.vacaciones}</Text>
        </View>
    );

    const renderNovedadItem = ({ item }) => (
        <View style={styles.novedadItem}>
            <ScrollView style={styles.scroll}>
                <Text style={styles.titulo}>Novedades</Text>
                {renderIncapacidadInfo(item)}
                {renderLicenciaInfo(item)}
                {renderVacacionesInfo(item)}
            </ScrollView>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={novedades}
                keyExtractor={(_, index) => index.toString()}
                renderItem={renderNovedadItem}
            />
        </View>
    );
};
                            
const styles = StyleSheet.create({
        FechasNovedadesContainer: {
        backgroundColor: "#6B9080",
        padding:10,
        borderColor: "#6B9080",
        borderWidth: 1,
        borderRadius: 5,

    },
    LicenciasNovedadesContainer:{
        backgroundColor: "#A4C3B2",
        padding:10,
        borderColor: "#6B9080",
        borderWidth: 1,
        borderRadius: 5,

    },
    VacacionesNovedadesContainer:{
        backgroundColor: "#CCE3DE",
        padding:10,
        borderColor: "#6B9080",
        borderWidth: 1,
        borderRadius: 5,

    },
    novedadItem:{
        display: "flex",
        marginBottom: 10,

    },
    container: {
        flex: 1,
        backgroundColor: "#EAF4F4",
        padding: 20,

    },
    titulo: {
        fontSize: 30,
        color: "black",
        marginBottom: 20,
        textAlign: "center",
       
    },
});

export default VerNovedades;
