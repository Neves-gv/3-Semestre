import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';

const Tab = createBottomTabNavigator();

function NavBottonTabs() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}
                    options={{
                        tabBarIcon: ({ size, color }) => <AntDesign name="home" size={size} color={color} />
                    }} />
                <Tab.Screen name="Cadastro" component={Cadastro}
                    options={{
                        tabBarIcon: ({ size, color }) => <AntDesign name="user" size={size} color={color} />
                    }} />
                <Tab.Screen name="Relatorio" component={Relatorio}
                    options={{
                        tabBarIcon: ({ size, color }) => <MaterialIcons name="content-paste" size={size} color={color} />
                    }} />
                <Tab.Screen name="Grafico" component={Grafico}
                    options={{
                        tabBarIcon: ({ size, color }) => <Entypo name="bar-graph" size={size} color={color} />
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default NavBottonTabs;