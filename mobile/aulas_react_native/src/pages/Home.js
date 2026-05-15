import { View, Text, Button } from 'react-native';

function Home({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e3a8a' }}>
            <Text style={{ fontSize: 30, color: '#ffffff' }}>Tela Principal</Text>
            <Button title="Ir para tela de Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Ir para tela de Relatório" onPress={() => navigation.navigate('Relatorio')} />
            <Button title="Ir para tela de Gráfico" onPress={() => navigation.navigate('Grafico')} />
        </View>
    )
}
export default Home;