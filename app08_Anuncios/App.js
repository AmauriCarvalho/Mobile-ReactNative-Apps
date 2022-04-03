import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Anúncios</Text>
        <ScrollView horizontal={true}>
          <View style={styles.box1}>
          <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTptKWIJWZehxtE26Cgu51DEoQ4ThJrl-VmJ6SsR69qkZ6cQvmAAYx_es_kTnxC3YWiNIU&usqp=CAU'}}
          style={{ width: 200, height: 200}}
        />
        <Text style={styles.tituloprod}>Chinelo Havaianas preto</Text>
        
          </View>
          <View style={styles.box2}>
          <Image
          source={{ uri: 'https://images.kabum.com.br/produtos/fotos/254194/notebook-lenovo-ultrafino-ideapad-3i-intel-core-i7-10510u-nvidia-geforce-mx330-8gb-ssd-256gb-windows-11-15-6-prata-82bs000mbr_1636557283_original.jpg'}}
          style={{ width: 200, height: 200}}
        />
        <Text style={styles.tituloprod}>Nootbook lenovo</Text>
          </View>
          <View style={styles.box3}>
          <Image
          source={{ uri: 'https://tokstok.vtexassets.com/arquivos/ids/2262788/mesa-redonda-110-m-nozes-branco-tave_st0.jpg?v=637292232668830000'}}
          style={{ width: 200, height: 200}}
        />
        <Text style={styles.tituloprod}>Mesa Redonda Branca</Text>
          </View>
          <View style={styles.box4}>
          <Image
          source={{ uri: 'https://a-static.mlcdn.com.br/618x463/cadeira-de-escritorio-diretor-giratoria-dir-002-ac-comercial/magazineluiza/224326200/8b91a4df02b915d7151c267c948d97f5.jpg'}}
          style={{ width: 200, height: 200}}
        />
        <Text style={styles.tituloprod}>Cadeira de Escritório</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  box1:{
    marginBottom: 10,
    width: 200
  },
  box2:{
    marginBottom: 10
  },
  box3:{
    marginBottom: 10
  },
  box4:{
    marginBottom: 10
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    color: 'red',
    marginBottom: 20
  },
  tituloprod:{
    textAlign: 'center',
    fontSize: 20,
    color: 'blue'
  },
})
 
export default App;