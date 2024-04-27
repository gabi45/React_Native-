import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message'

export default function App() {

  const [contador, setContador] = useState(0);

  const incremento = () => {
    setContador (contador + 1)
  }

  function decremento() {
    if (contador > 0) {
    setContador(contador -1)
  
  } else {
    //Alert.alert ("Impossível decrementar a partir desse ponto")
    // ToastAndroid.show("Impossível decrementar a partir deste ponto", ToastAndroid.SHORT);
    showToast();
    return;
  }
}

function showToast() {
    Toast.show({
      type: 'error',
      text1: "Aviso",
      text2: "Impossível decrementar",
      position: 'bottom',
      bottomOffset: 20 
    });
}


  return (
  

    
    <View style={styles.container}>

    <TouchableOpacity
     onPress = {incremento} 
     style={styles.button}
     >  

      <Text style={{color: "white", textAlign: "center"}}>
        incrementar
      </Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={decremento}
      style={styles.button}>

      <Text style={{color: "white", textalign: "center"}}>
       Decrementar
    </Text>
</TouchableOpacity>
      <Text>Contador:{contador}</Text>
      <StatusBar style="auto" />
      <Toast/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: { 
  backgroundColor: 'black',
  borderRadius: 8,
  padding: 10,
  width: 150,
  margin: 10,

  }
});
