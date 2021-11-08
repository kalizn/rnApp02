import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

const Pagina = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Entrada = styled.TextInput`
  width:200px;
  heiht:40px;
  border:1px solid #000;
`;

const Hello = function () {
  const [nome, setNome] = useState('Tads UEPA');

  function mudarTexto(texto){
    setNome(texto);
  }
  return (
    <View>
      <Entrada value={nome} onChangeText={mudarTexto} />
      <Text>Olá {nome}</Text>
    </View>
  );
}

export default function App() {
  return (
    <Pagina>

      <Hello/>
    </Pagina>
  )

}
