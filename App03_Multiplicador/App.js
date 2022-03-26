import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      primeiro: '',
      segundo: '',
      produto: ''
    };
    
    this.multiplicar = this.multiplicar.bind(this);
  }
 
  multiplicar(){
    if ( (this.state.primeiro == '') || (this.state.segundo == '') ){
      alert('Valor inválido, tente novamente')
      return;
    }
    var produto = this.state.primeiro * this.state.segundo
    this.setState({produto: 'Produto: ' + produto});
  }
 
  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.texto}>Multiplicador de Números</Text>
 
      <TextInput style={styles.input} placeholder="Digite o número" onChangeText={ (texto) => this.setState({primeiro: texto})}/>
      <Text style={styles.texto}>X</Text>
      <TextInput style={styles.input} placeholder="Digite o número" onChangeText={ (texto) => this.setState({segundo: texto})}/>
 
      <Pressable style={styles.botao} onPress={() => this.multiplicar()}>
        <Text style={styles.textoBotao}>Multiplicar</Text>
      </Pressable>

 
      <Text style={styles.texto}> {this.state.produto} </Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    width: 250,
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
    color: 'orange'
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
    backgroundColor: 'blue',
    marginLeft: 110,
  },

})
 
export default App;