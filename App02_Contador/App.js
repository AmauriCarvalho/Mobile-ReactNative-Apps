import React, { Component } from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      pessoa: 0,
    };
    
    this.adicionarPessoa = this.adicionarPessoa.bind(this);
    this.removerPessoa = this.removerPessoa.bind(this);
  }

  adicionarPessoa(){
    this.setState({pessoa: this.state.pessoa + 1})
  }
  removerPessoa(){
    if (this.state.pessoa > 0) {
      this.setState({pessoa: this.state.pessoa - 1})
    }
    
  }
 
  render(){
    return(
      <View style={styles.area}>
      
      <Text style={[styles.texto, styles.titulo]}> Contador de Pessoas </Text>
      <Text style={styles.texto}> {this.state.resultado} </Text>
      <Text style={styles.texto}> {this.state.pessoa} </Text>

      <Button title="Adicionar" color="green" margin-top="50" onPress={this.adicionarPessoa} />
      <Button title="Remover" color="red" style={styles.botao} onPress={this.removerPessoa} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  texto:{
    textAlign: 'center',
    fontSize: 25,
    color: 'red'
  },
  titulo:{
    fontWeight: 'bold',
    color: 'orange'
  },
})
 
export default App;