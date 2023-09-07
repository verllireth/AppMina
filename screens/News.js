import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, Alert,ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker';

const Novedades = () => {
    const navigation = useNavigation();


    const [showDateInicio, setShowDateInicio] = useState(false);
    const [showDateFin, setShowDateFin] = useState(false);
    const [showTime, setShowTime] = useState(false);
  
    
    const [incapacidadInicio, setIncapacidadInicio] = useState(new Date());
    const [incapacidadFin, setIncapacidadFin] = useState(new Date());
    const [licenciaHora, setLicenciaHora] = useState(new Date());
    const [vacaciones, setVacaciones] = useState(""); // Initialize with 15 vacation days
    const [novedadesList, setNovedadesList] = useState([]); // Lista de novedades

  
    const onChangeInicio = (event, selectedDate) => {
      setShowDateInicio(false);
      setIncapacidadInicio(selectedDate);
    };
  
    const onChangeFin = (event, selectedDate) => {
      setShowDateFin(false);
      setIncapacidadFin(selectedDate);
    };
    
    const onChangeHora = (event, selectedTime) => {
      setShowTime(false);
      setLicenciaHora(selectedTime);
    };
  

    const registrarNovedades = () => {
        const nuevaNovedad = { vacaciones };

        if (licenciaHora) {
            nuevaNovedad.licencia = {
                hora: licenciaHora,
            }}
        
         
        if (incapacidadInicio && incapacidadFin) {
            nuevaNovedad.incapacidad = {
                inicio: incapacidadInicio,
                fin: incapacidadFin,
                dias: calcularDiasIncapacidad(),

            };
        }
        if (vacaciones !== "") {
            nuevaNovedad.vacaciones = parseInt(vacaciones);
        }

        setNovedadesList([...novedadesList, nuevaNovedad]);
        setIncapacidadInicio(new Date());
        setIncapacidadFin(new Date());
        setLicenciaHora(new Date());
        setVacaciones("");
        Alert.alert("Novedad registrada");
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
<ScrollView style={styles.scroll}>
  <View style={styles.container}>



          <View style={styles.ContenedorFechas}>
                <Text style={styles.titulo}>Incapacidad</Text>
                <View style={styles.ContenedorFechasText}>
                    <Text style={styles.TextFechas}>Fecha inicio</Text>
                    <Text>Fecha fin</Text>
                </View>
                        
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
    
          <View style={styles.contenedorLicenciaGeneral}>
                <Text style={styles.tituloLicencias}>Licencias</Text>
                <View style={styles.contenedorLicencia}>
                    <DateTimePicker
                        display="default"
                        value={licenciaHora}
                        mode="clock"
                        onChange={(event, date) => setLicenciaHora(date)}
                    />
                </View>
          </View>
       

        <View style={styles.contenedorVacaciones}>
                    <Text style={styles.tituloLiVacaciones}>Vacaciones</Text>

                    <TextInput
                      style={styles.input}
                      placeholder="Vacaciones (días)"
                      value={vacaciones.toString()} // Convertir a cadena de texto
                      keyboardType="numeric"
                      onChangeText={setVacaciones}
                    />


          </View>
          
          

            <View style={styles.ContenedorBotones}>
                <View style={styles.botones}>
                    <Button  title="Registrar" onPress={registrarNovedades} />
                    <Button  title="Consultar" onPress={() => navigation.navigate('VerNovedades', { novedades: novedadesList })}/>
                </View>
            </View>

        </View>
</ScrollView>
);
   
};
const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#EDEDE9",
        padding: 20,
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 10,
        borderColor: "#6B9080",

    },
      // Estilos para el contenedor principal
        container: {
   

      },
    
       // Estilos para el título
       titulo: {
        fontSize: 30,
        color: "#6B9080",
        textAlign: "center",
        marginBottom: 20,
       

      },
      tituloLicencias: {
        fontSize: 30,
        color: "#6B9080",
        textAlign: "center",
       
        marginTop: 50,
      },
      tituloLiVacaciones: {
        fontSize: 30,
        color: "#6B9080",
        textAlign: "center",
      },



      
    // Estilos para el contenedor de fechas (general)
    ContenedorFechas: {
        backgroundColor: "#EAF4F4",
        height: 170,
        flexDirection: "column",
        marginBottom: 20,
        justifyContent: 'center',
        borderColor: "#6B9080",
        borderBottomWidth: 1,
        borderWidth: 1,
        borderRadius: 5,
        marginTop:10,
      },
    
         // Estilos para el contenedor de fechas (texto)
        ContenedorFechasText: {
        backgroundColor: "#EAF4F4",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        padding: 5,
      },
        // Estilos para el texto de fechas
        TextFechas: {
        marginRight: 170,
      },
      // Estilos para el contenedor de fechas (flexibles)
      ContenedorFechasF: {

        backgroundColor: "#EAF4F4",
        justifyContent: 'space-between',
        flexDirection: 'row',
        textAlign: "center",
        padding: 5,
        
      },
    

        // Estilos para el contenedor de licencia general
        contenedorLicenciaGeneral: {
        display: "flex",
        width: '100%',
        height: 100,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 90,
        marginTop: -20,
      },

    // Estilos para el texto de licencias
    textLicencias: {
      color: "black",
      fontSize: 26,
    },
  

  
    // Estilos para el contenedor de licencia
    contenedorLicencia: {
      backgroundColor: "#F6FFF8",
      height: 50,
      width: '100%',
      alignItems: "center",
      padding: 5,
      justifyContent: 'center',
      alignContent: 'flex-end',
      borderRadius: 5,
      borderWidth: 1,

      marginTop: 10,
    
    },
    contenedorVacaciones: {
            display: "flex",
            width: '100%',
            height: 200,
            justifyContent: "center",
            alignItems: 'center', 
            marginTop: -60,
    },
    contenedorVacacionesTexto:{
        fontSize:25
    },
    // Estilos para el input
    input: {
       
     borderWidth: 1,
        borderColor: "#6B9080",
        borderRadius: 5,
        padding: 10,
        color: "black",
        backgroundColor:'#F6FFF8',
        width:'100%',
        height:50,
        marginTop: 10,

    },


    ContenedorBotones: {
        backgroundColor: "#EDEDE9",
        justifyContent :'center',
        alignItems: 'center',
        marginTop: -30,

    },
    botones: {
        backgroundColor: "#EDEDE9",
        width: 240,
        flexDirection: "row",
        justifyContent :'space-between',
        alignItems:'center'
    },
 
  });
  

export default Novedades;
