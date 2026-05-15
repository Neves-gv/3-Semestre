import { View, Text, Button } from 'react-native';

function Cadastro({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e3a8a' }}>
            <Text style={{ fontSize: 30, color: '#ffffff' }}>Tela de Cadastro</Text>
            <Button title="Ir para tela de Relatório" onPress={() => navigation.navigate('Relatorio')} />
            <Button title="Ir para tela de Gráfico" onPress={() => navigation.navigate('Grafico')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}
export default Cadastro;