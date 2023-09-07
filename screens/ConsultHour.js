

import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

function ConsultaHoras() {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('09:00');
  const [period, setPeriod] = useState('AM');

  const calculateTotalHours = () => {
    
  };

  const registerHours = () => {
    calculateTotalHours();
  };

  return (
    <View>
      <TextInput
        placeholder="Fecha"
        value={date}
        onChangeText={setDate}
      />
      <Text>Hora inicio: {startTime}</Text>
      <Text>AM/PM: {period}</Text>
      <Button title="Registrar" onPress={registerHours} />
      <Text>Total horas trabajadas: {/* Mostrar el total calculado aquí */}</Text>
    </View>
  );
}

export default ConsultaHoras;
