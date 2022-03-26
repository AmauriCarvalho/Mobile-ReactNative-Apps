import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, Image} from 'react-native';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      gasolina: '',
      etanol: '',
      resultado: ''
    };
    
    this.calcularGE = this.calcularGE.bind(this);
  }
 
  calcularGE(){
    if ( (this.state.etanol == '') || (this.state.gasolina == '') ){
      alert('Valor inválido, tente novamente')
      return;
    }
    var resultado = this.state.etanol / this.state.gasolina
    if ( resultado > 0.7 ){
      this.setState({resultado: 'Gasolina é melhor' });
    }
    if ( resultado < 0.7 ){
      this.setState({resultado: 'Etanol é melhor'});
    }
  }
 
  render(){
    return(
      <View style={styles.area}>

      <Text style={styles.texto}>Gasolina ou Etanol</Text>

      <Image
          source={{ uri: 'https://educandoseubolso.blog.br/wp-content/uploads/2015/08/gasolina-x-etanol2-1280x720.jpg'}}
          style={{ width: 200, height: 200, marginLeft: 110}}
        />

 
      <TextInput style={styles.input} placeholder="Digite o preço do Etanol" onChangeText={ (texto) => this.setState({etanol: texto})}/>
      <TextInput style={styles.input} placeholder="Digite o preço da Gasolina" onChangeText={ (texto) => this.setState({gasolina: texto})}/>
 
      <Pressable style={styles.botao} onPress={() => this.calcularGE()}>
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