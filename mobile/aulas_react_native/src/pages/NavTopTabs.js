import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Cadastro from './Cadastro';
import Relatorio from './Relatorio';
import Grafico from './Grafico';
import Login from './Login';
import NavDrawer from './NavDrawer';

const TopTabs = createMaterialTopTabNavigator();

function NavTopTabs() {
    return (
        <NavigationContainer>
            <TopTabs.Navigator initialRouteName="Login">
                <TopTabs.Screen name="Login" component={Login} />
                <TopTabs.Screen name="Home" component={Home} />
                <TopTabs.Screen name="Cadastro" component={Cadastro} />
                <TopTabs.Screen name="Relatorio" component={Relatorio} />
                <TopTabs.Screen name="Grafico" component={Grafico} />
                <TopTabs.Screen name="MenuPrincipal" component={NavDrawer} options={{ headerShown: false }} />
            </TopTabs.Navigator>
        </NavigationContainer>
    );
}

export default NavTopTabs;