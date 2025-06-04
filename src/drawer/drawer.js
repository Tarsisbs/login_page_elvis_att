import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../paginas/inicial/index.js';
import Favoritos from '../paginas/favoritos/index.js';
import Perfil from '../paginas/perfil/index.js';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function CustomDrawerContent(props) {
  const { state, navigation } = props;
  const activeRoute = state.routeNames[state.index];

  const backgroundImage = require('../../assets/drawer.png');

  return (
    <View style={styles.drawerContainer}>
      <Image source={backgroundImage} style={styles.backgroundImage}/>
      
      <View style={styles.itens}>
        <Text style={styles.title}>Nome do APP</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={[
            styles.menuItem,
            activeRoute === 'Home' && styles.menuItemActive
          ]}>
            <FontAwesome name="home" size={24} color="white" /> Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favoritos')}>
          <Text style={[
            styles.menuItem,
            activeRoute === 'Favoritos' && styles.menuItemActive
          ]}>
            <AntDesign name="star" size={24} color="white" /> Favoritos
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Perfil')}>
          <Text style={[
            styles.menuItem,
            activeRoute === 'Perfil' && styles.menuItemActive
          ]}>
            <FontAwesome name="user" size={24} color="white" /> Perfil
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#784e95',
          width: 240,
        },
        headerStyle: {
          backgroundColor: '#784e95',
        },
        headerTintColor: '#fff',
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Favoritos" component={Favoritos} />
      <Drawer.Screen name="Perfil" component={Perfil} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#784e95',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  itens: {
    padding: '10px',
    marginTop: '-300%'
  },
  menuItem: {
    fontSize: 18,
    marginVertical: 10,
    gap: 10,
    padding: '15px',
    borderRadius: '6px',
    color: '#fff',
  },
  menuItemActive: {
    backgroundColor: '#603d90',
    fontWeight: 'bold',
  },
  backgroundImage: {  
    width: '100%',
    height: '100%',
    zIndex: '-2'
  },
});