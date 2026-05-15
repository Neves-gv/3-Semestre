import { View, Text, FlatList } from "react-native";
import Hr from "./Hr";

import * as Animatable from 'react-native-animatable';

const Aula07 = () => {

    return (
        <View>
            <Text>Aula 07 - Estilos de Navegação do tipo Tabs e Animação</Text>
            <Text>Criando Navegação do tipo Tabs no e apresentação sobre Animação</Text>
            <Hr />
            <Animatable.Text animation="fadeInLeft" iterationCount={'Infinity'}>
                Olá Mundo!!!
            </Animatable.Text>
            <Animatable.Text animation="fadeInUp" delay={1000} duration={1000}>
                Olá Neves
            </Animatable.Text>
            <Animatable.Image source={require('../assets/logo.png')}
                animation="lightSpeedIn" iterationCount={'Infinity'}
                style={{ width: 100, height: 100 }} />
            <Animatable.Text animation="pulse" iterationCount={'Infinity'} style={{ width: 200, height: 200 }}>
                Animatable Text
            </Animatable.Text>
        </View>
    )
}
export default Aula07; 