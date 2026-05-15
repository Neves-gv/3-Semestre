import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from './Home'
import Cadastro from './Cadastro'
import Relatorio from './Relatorio'
import Grafico from './Grafico'
import Aula01 from '../components/Aula01'
import Aula02 from '../components/Aula02'
import Aula03 from '../components/Aula03'
import Aula04 from '../components/Aula04'
import Aula05 from '../components/Aula05'
import Aula06 from '../components/Aula06'
import Aula07 from '../components/Aula07'

const Drawer = createDrawerNavigator()

function NavDrawer() {
    return (
        // <NavigationContainer>
        <Drawer.Navigator
            initialRouteName='Home'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#1e3a8a',
                    width: 240,
                },
                drawerLabelStyle: {
                    color: '#ffffff',
                    fontSize: 18
                },
                drawerActiveBackgroundColor: '#2563eb',
                drawerActiveTintColor: '#ffffff',
            }}
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Relatorio' component={Relatorio} />
            <Drawer.Screen name='Grafico' component={Grafico}
                options={{
                    title: 'Tela de Grafico de Teste',
                    drawerIcon: ({ size, color }) => <AntDesign name='line-chart1' size={size} color={color} />
                }} />
            <Drawer.Screen name='Aula01' component={Aula01}
                options={{
                    drawerIcon: ({ size, color }) => <AntDesign name="book" size={24} color="white" />
                }} />
            <Drawer.Screen name='Aula02' component={Aula02}
                options={{
                    drawerIcon: ({ size, color }) => <AntDesign name="book" size={24} color="white" />
                }} />
            <Drawer.Screen name='Aula03' component={Aula03}
                options={{
                    drawerIcon: ({ size, color }) => <AntDesign name="book" size={24} color="white" />
                }} />
            <Drawer.Screen name='Aula04' component={Aula04}
                options={{
                    drawerIcon: ({ size, color }) => <AntDesign name="book" size={24} color="white" />
                }} />
            <Drawer.Screen name='Aula05' component={Aula05}
                options={{
                    drawerIcon: ({ size, color }) => <AntDesign name="book" size={24} color="white" />
                }} />
            <Drawer.Screen name='Aula06' component={Aula06}
                options={{
                    drawerIcon: ({ size, color }) => <AntDesign name="book" size={24} color="white" />
                }} />
            <Drawer.Screen name='Aula07' component={Aula07}
                options={{
                    drawerIcon: ({ size, color }) => <AntDesign name="book" size={24} color="white" />
                }} />
        </Drawer.Navigator>
        // </NavigationContainer>
    )

}

export default NavDrawer;