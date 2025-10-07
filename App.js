import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const Boton = ({texto , presionado}) => (
    <TouchableOpacity style={styles.boton}>
      <Text>{texto}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.input}>0</Text>
      <Text style={styles.resultado}> Resultado </Text>
      <View style={styles.fila}>
        <Boton texto= '7'/>
        <Boton texto= '8'/>
        <Boton texto= '9'/>
        <Boton texto= '+'/>
      </View>
      <View style={styles.fila}>
        <Boton texto= '4'/>
        <Boton texto= '5'/>
        <Boton texto= '6'/>
        <Boton texto= '-'/>
      </View>
      <View style={styles.fila}>
        <Boton texto= '1'/>
        <Boton texto= '2'/>
        <Boton texto= '3'/>
        <Boton texto= '*'/>
      </View>
      <View style={styles.fila}>
        <Boton texto= '0'/>
        <Boton texto= 'C'/>
        <Boton texto= '='/>
        <Boton texto= '/'/>
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
