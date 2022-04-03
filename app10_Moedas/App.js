import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Button, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
 
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      valorMoeda: 0,
      resultado: 0,
      exibirResultado: 0,
      moeda1: 0,
      moeda1opc: [
        {nome: 'Real'},
        {nome: 'Dollar'},
        {nome: 'Euro'},
      ],
      moeda2: 0,
      moeda2opc: [
        {nome: 'Real', dollar: 0.21,  euro: 0.19 },
        {nome: 'Dollar', euro:  0.91, real: 4.66 },
        {nome: 'Euro', dollar: 1.10 , real: 5.15 },
      ],
    };
    
 
    this.calcular = this.calcular.bind(this);

    this.pegaValor = this.pegaValor.bind(this);
  };
  pegaValor(valor){
    this.setState({valorMoeda: valor});
  };
  calcular(){
    if ( this.state.moeda1opc[this.state.moeda1].nome == 'Real' ){
      if ( this.state.moeda1opc[this.state.moeda1].nome == this.state.moeda2opc[this.state.moeda2].nome ){
        alert('Você escolheu as mesmas moedas')
      }
      else{
        var resultado = this.state.valorMoeda / this.state.moeda2opc[this.state.moeda2].real
      }
    }
    if ( this.state.moeda1opc[this.state.moeda1].nome == 'Dollar' ){
      if ( this.state.moeda1opc[this.state.moeda1].nome == this.state.moeda2opc[this.state.moeda2].nome ){
        alert('Você escolheu as mesmas moedas')
      }
      else{
        var resultado = this.state.valorMoeda / this.state.moeda2opc[this.state.moeda2].dollar
      }
    }
    if ( this.state.moeda1opc[this.state.moeda1].nome == 'Euro' ){
      if ( this.state.moeda1opc[this.state.moeda1].nome == this.state.moeda2opc[this.state.moeda2].nome ){
        alert('Você escolheu as mesmas moedas')
      }
      else{
        var resultado = this.state.valorMoeda / this.state.moeda2opc[this.state.moeda2].euro
      }
    }
    this.setState({
      exibirResultado: this.state.resultado = resultado,
    });
  }
  



 render(){
 
  let moeda1Item = this.state.moeda1opc.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })
  let moeda2Item = this.state.moeda2opc.map( (valor, chave) => {
    return <Picker.Item key={chave} value={chave} label={valor.nome} />
  })

  return (
    
    <View style={styles.container}>
      <ScrollView>
      <Text style={styles.titulo}>Conversor de Moedas</Text>
      <Text style={styles.titulo}>Cotação do dia: 03/04/2022</Text>
      <Text style={styles.tituloinput}>Valor:</Text>
      <TextInput
      keyboardType="numeric"
      style={styles.input}
      placeholder="Digite o Valor"
      onChangeText={this.pegaValor}
      />
      <Text style={styles.tituloinput}>De:</Text>
      <Picker selectedValue={this.state.moeda1}
      onValueChange={ (itemValue, itemIndex) => this.setState({moeda1: itemValue}) }
      >
        
        {moeda1Item}
      </Picker>
      <Text style={styles.tituloinput}>Para:</Text>
      <Picker selectedValue={this.state.moeda2}
      onValueChange={ (itemValue, itemIndex) => this.setState({moeda2: itemValue}) }
      >
        
        {moeda2Item}
      </Picker>




      <Button title="Calcular" onPress={this.calcular} />
      <Text style={styles.titulodados}>Resultado</Text>
      <Text style={styles.tituloinput}>{this.state.exibirResultado} </Text>
      </ScrollView>
    </View>
   );
 }
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 15,
  },
  titulo:{
    fontSize: 25,
    textAlign: 'center',
    color: 'red'
  },
  input:{
    height: 45,
    marginTop: 10,
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
  },
  tituloinput:{
    fontSize: 18,
    textAlign: 'center',
  },
  titulodados:{
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
}});