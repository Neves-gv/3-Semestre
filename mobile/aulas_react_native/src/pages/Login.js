import { View, Text, Button } from 'react-native';

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1e3a8a' }}>
            <Text style={{ fontSize: 30, color: '#ffffff' }}>Tela de Login</Text>
            <Button title="ENTRAR" onPress={() => navigation.navigate('MenuPrincipal')} />
        </View>
    )
}
export default Login;