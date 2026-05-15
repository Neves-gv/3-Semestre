import { View, Text, Button } from 'react-native';

function Grafico({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e3a8a' }}>
            <Text style={{ fontSize: 30, color: '#ffffff' }}>Tela de Gráfico</Text>
            <Button title="Ir para tela de Cadastro" onPress={() => navigation.navigate('Cadastro')} />
            <Button title="Ir para tela de Relatório" onPress={() => navigation.navigate('Relatorio')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}
export default Grafico;