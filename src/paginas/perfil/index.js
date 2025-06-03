import React, { useState, useEffect } from 'react';
import { Text, ScrollView, View, Image, SafeAreaView, FlatList } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from './style';
import Cards from '../../componentes/cards/cards.js';
import pegarDepoimentos from '../../servicos/posts.js'

export default function Perfil() {
  const route = useRoute();
  const navigation = useNavigation();

  const [depoimentos, setDepoimentos] = useState([])

  useEffect(() => {
        (async () => {
            const dados = await pegarDepoimentos();
            setDepoimentos(dados);
        })();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../../../assets/user.png')}/>

        <View style={styles.numeros}>
          <Text>Postagens</Text>
          <Text>Comentários</Text>
          <Text>Favoritos</Text>
        </View>

        <SafeAreaView style={styles.container}>

            <FlatList
                data={depoimentos}
                keyExtractor={(item) => item.depoimento_id}
                renderItem={({ item }) => (
                    <Cards
                        avatarUrl={'https://placecats.com/neo/300/200'}
                        postTitle={item.depoimento_titulo}
                        time={new Date(item.depoimento_data_criacao).toLocaleDateString()} // formata a data para exibir bonitinho
                        text={item.depoimento_conteudo}
                        comments={0}
                        onStarPress={() => console.log('Star pressed', item.depoimento_id)}
                        onReportPress={() => console.log('Report pressed', item.depoimento_id)}
                    />
                )}
            />

        </SafeAreaView>
      </View>
    </ScrollView>
  );
}