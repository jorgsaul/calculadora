import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState('')
  
  const presionar = valor =>{
    setInput(input + valor)
  }

  const borrar = () =>{
    setInput('')
  }

  const Boton = ({texto , presionado}) => (
    <TouchableOpacity style={styles.boton} onPress={presionado}>
      <Text>{texto}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input || '0'}</Text>
      <Text style={styles.resultado}> Resultado </Text>
      <View style={styles.fila}>
        <Boton texto= '7' presionado={()=>presionar('7')}/>
        <Boton texto= '8' presionado={()=>presionar('8')}/>
        <Boton texto= '9' presionado={()=>presionar('9')}/>
        <Boton texto= '+' presionado={()=>presionar('+')}/>
      </View>
      <View style={styles.fila}>
        <Boton texto= '4' presionado={()=>presionar('4')}/>
        <Boton texto= '5' presionado={()=>presionar('5')}/>
        <Boton texto= '6' presionado={()=>presionar('6')}/>
        <Boton texto= '-' presionado={()=>presionar('-')}/>
      </View>
      <View style={styles.fila}>
        <Boton texto= '1' presionado={()=>presionar('1')}/>
        <Boton texto= '2' presionado={()=>presionar('2')}/>
        <Boton texto= '3' presionado={()=>presionar('3')}/>
        <Boton texto= '*' presionado={()=>presionar('*')}/>
      </View>
      <View style={styles.fila}>
        <Boton texto= '0' presionado={()=>presionar('0')}/>
        <Boton texto= 'C' presionado={borrar}/>
        <Boton texto= '=' />
        <Boton texto= '/' presionado={()=>presionar('/')}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 180
  },
  boton:{
    flex: 1,
    backgroundColor: '#eee',
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    borderRadius: 5,
  },
  fila:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  resultado:{
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 20,
    color: 'green',
  },
  input:{
    fontSize: 32,
    textAlign: 'right',
    marginBottom: 10,
    padding: 10,
  }
});
