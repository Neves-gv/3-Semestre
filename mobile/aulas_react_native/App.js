// importando todas as bibliotecas e componentes que utilizamos
import { StatusBar } from 'expo-status-bar';
// todo componente visual utilizada em Reacy native precisa ser importada
import { StyleSheet, Text, View } from 'react-native';

// Componente tradicional
export default function App() {
  return (
    // View = Div, main, section, header do html
    <View style={estilos.container}>
      {/* Text = p, span, h1, h2, h3, h4, h5, h6 */}
      <Text style={estilos.titulo}>Olá mundo</Text>
      <Text style={{fontWeight: 'bold', marginBottom: 20}}>Olá este é o meu primeiro app!!!</Text>

      <View style={estilos.containerLinhas}>
        <Text style={estilos.linhaesquerda}>linha da esquerda</Text>
        <Text style={estilos.linhameio}>linha do meio</Text>
        <Text style={estilos.linhadireita}>linha da direita</Text>
      </View>

      {/* StatusBar = barra de status do celular, defino a cor da barra */}
      <StatusBar style="auto" />
    </View>
  );
}

//para estilização em react native usamos o StyleSheet
// e fazemos um objeto estilização igual a react
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
  },
  containerLinhas: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
    alignItems: 'center',
  },
  linhaesquerda: {
    fontSize: 18,
    color: 'red',
  },
  linhameio: {
    fontSize: 18,
    color: 'green',
  },
  linhadireita: {
    fontSize: 18,
    color: 'blue',
  }
});