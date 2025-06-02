import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import styles from './styles/style';

export default function App() {
  const backgroundImage = require('./assets/login_bg.png');

  return (
      <View style={styles.container}>
        <Image source={backgroundImage} style={styles.backgroundImage}/>
        <View style={styles.form}>
            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                placeholder="RM"
                placeholderTextColor="#6b7280"
                style={styles.inputGeral}
              />
              <AntDesign style={styles.icone} name="user" size={24} color="black"/>
            </View>

            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                placeholder="Senha"
                placeholderTextColor="#6b7280"
                style={styles.inputGeral}
              />
              <AntDesign style={styles.icone} name="lock1" size={24} color="black" />
            </View>

            <View style={styles.input}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                placeholder="Código"
                placeholderTextColor="#6b7280"
                style={styles.inputGeral}
              />
              <View style={styles.asterisco}>
                <MaterialCommunityIcons name="asterisk" size={24} color="black" />
                <MaterialCommunityIcons name="asterisk" size={24} color="black" />
                <MaterialCommunityIcons name="asterisk" size={24} color="black" />
              </View>
            </View>

            <View style={styles.btn}>
              <TouchableOpacity style={styles.btn_login}>
                <Text style={styles.text_btn}>Login</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
  );
}