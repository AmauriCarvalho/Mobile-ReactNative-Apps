import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
 
class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Vagas Abertas</Text>
        <ScrollView>
          <View style={styles.box1}>
          <Text style={styles.titulovaga}>Desenvolvedor Web</Text>
          <Text style={styles.texto}>Salário: R$ 2500</Text>
          <Text style={styles.texto}>Descrição: Escrever códigos bem estruturados, eficientes e testáveis utilizando as melhores práticas de desenvolvimento de softwares. Criar layout/interface de usuário de sites usando práticas padrão de HTML/CSS. Integrar dados de vários serviços de back-end e bancos de dados.</Text>
          <Text style={styles.texto}>Contato: fulano@email.com</Text>
          </View>
          <View style={styles.box2}>
          <Text style={styles.titulovaga}>Desenvolvedor Web</Text>
          <Text style={styles.texto}>Salário: R$ 2000</Text>
          <Text style={styles.texto}>Descrição: Organizar os processos financeiros da empresa (documentação, notas fiscais, fluxo de caixa, transações internacionais, etc.) Estudar o perfil financeiro de clientes e fornecedores. Definir limites de crédito. Estabelecer métodos e processo de trabalho em sua área.</Text>
          <Text style={styles.texto}>Contato: joao@email.com</Text>
          </View>
          <View style={styles.box3}>
          <Text style={styles.titulovaga}>Analista BI</Text>
          <Text style={styles.texto}>Salário: R$ 1800</Text>
          <Text style={styles.texto}>Descrição: Define modelagem e modelos de dados a serem tratados e transformados e estuda a melhor ferramenta para extração de dados.</Text>
          <Text style={styles.texto}>Contato: email@email.com</Text>
          </View>
          <View style={styles.box4}>
          <Text style={styles.titulovaga}>Engenheiro Civil</Text>
          <Text style={styles.texto}>Salário: R$ 3500</Text>
          <Text style={styles.texto}>Descrição: Desenvolver projetos de engenharia; executar obras; planejar, orçar e contratar empreendimentos; coordenar a operação e a manutenção dos mesmos. Controlar a qualidade dos suprimentos e serviços comprados e executados. Elaborar normas e documentação técnica.</Text>
          <Text style={styles.texto}>Contato: fulano@email.com ou (xx) xxxx-xxxx </Text>
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
    borderWidth: 1,
    marginBottom: 10
  },
  box2:{
    borderWidth: 1,
    marginBottom: 10
  },
  box3:{
    borderWidth: 1,
    marginBottom: 10
  },
  box4:{
    borderWidth: 1,
    marginBottom: 10
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    color: 'red',
    marginBottom: 20
  },
  titulovaga:{
    textAlign: 'center',
    fontSize: 20,
    color: 'blue'
  },
  texto:{
    fontSize: 18,
    color: 'black',
    marginTop: 15
  }
})
 
export default App;