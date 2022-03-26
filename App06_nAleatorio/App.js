import React, { Component } from 'react';
import { View, Text, StyleSheet, Pressable, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: '',
    };
    
    this.numeroAleatorio = this.numeroAleatorio.bind(this);
  }
 
  numeroAleatorio(){
    var numero = Math.floor(Math.random() * 10)
    this.setState({numero: numero});
  }
 
  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.texto}>Jogo do número aleatório</Text>
      <Image
          source={{ uri: 'https://pt.calcuworld.com/wp-content/uploads/sites/6/2019/11/numeros-aleatorios.png'}}
          style={{ width: 200, height: 200,marginLeft: 100}}
        />
        <Text style={styles.texto}>Pense em um número de 0 a 10</Text>
        <Text style={styles.texto}> {this.state.numero} </Text>
      <Pressable style={styles.botao} onPress={() => this.numeroAleatorio()}>
        <Text style={styles.textoBotao}>Descobrir</Text>
      </Pressable>

 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  input:{
    height: 45,
    width: 270,
    marginLeft: 80,
    borderWidth: 5,
    borderColor: 'green',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'blue'
  },
  textoBotao:{
    color: 'white',
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 25,
  },
  botao:{
    width: 200,
    height: 50,
    backgroundColor: 'green',
    marginLeft: 110,
  },

})
 
export default App;