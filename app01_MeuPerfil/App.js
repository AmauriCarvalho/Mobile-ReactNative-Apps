import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
  return(
    <View>
        <Image
          source={{ uri: 'https://avatars.githubusercontent.com/u/83602531?s=400&u=233843fcfd46bc3240ec777acf384817d23f9369&v=4'}}
          style={{ width: 200, height: 200, marginBottom: 50, marginLeft: 100}}
        />
        <Text style={{fontSize: 15,marginLeft: 10}}>Nome:</Text>
        <Text style={{fontSize: 15, marginBottom: 25, marginLeft: 10}}>Amauri do Espirito Santo Carvalho</Text>

        <Text style={{fontSize: 15, marginLeft: 10}}>Formação:</Text>
        <Text style={{fontSize: 15, marginBottom: 25, marginLeft: 10}}>Cursando Sistemas para internet em FATEC - Rubens Lara</Text>

        <Text style={{fontSize: 15, marginLeft: 10}}>Experiência:</Text>
        <Text style={{fontSize: 15, marginBottom: 25, marginLeft: 10}}>Trabalho atualmente como Analista de BI e com alguns projetos web</Text>

        <Text style={{fontSize: 15, marginLeft: 10}}>Projetos:</Text>
        <Text style={{fontSize: 15, marginBottom: 25, marginLeft: 10}}>Dashboards para campanhas promocionais</Text>
    </View>
  )
}

export default App;