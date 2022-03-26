import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: '',
      altura: '',
      resultado: ''
    };
    
    this.calcularIMC = this.calcularIMC.bind(this);
  }
 
  calcularIMC(){
    if ( (this.state.peso == '') || (this.state.altura == '') ){
      alert('Valor inválido, tente novamente')
      return;
    }
    var resultado = this.state.peso / (this.state.altura * this.state.altura);
    if ( resultado < 18.5 ){
      this.setState({resultado: 'Abaixo do Peso'});
    }
    else if ( resultado < 25 ){
      this.setState({resultado: 'Peso Normal'});
    }
    else if ( resultado < 30 ){
      this.setState({resultado: 'Sobrepeso'});
    }
    else if ( resultado < 35 ){
      this.setState({resultado: 'Obesidade Grau I'});
    }
    else if ( resultado < 40 ){
      this.setState({resultado: 'Obesidade Grau II'});
    }
    else {
      this.setState({resultado: 'Obesidade Grau III'});
    };
  }
 
  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.texto}>Calculadora IMC</Text>

      <Image
          source={{ uri: 'https://www.ricardogozzano.com.br/wp-content/uploads/2020/03/tabela_imc.png'}}
          style={{ width: 400, height: 300, marginLeft: 7}}
        />

 
      <TextInput style={styles.input} placeholder="Digite o peso em kg" onChangeText={ (texto) => this.setState({peso: texto})}/>
      <TextInput style={styles.input} placeholder="Digite a altura em metros" onChangeText={ (texto) => this.setState({altura: texto})}/>
 
      <Pressable style={styles.botao} onPress={() => this.calcularIMC()}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

 
      <Text style={styles.texto}> {this.state.resultado} </Text>
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