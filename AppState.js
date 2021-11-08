import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Pagina = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Hello = function () {
  const [nome, setNome] = useState('Tads UEPA');
  return (
    <Text>Nome: {nome}</Text>
  );
}

export default function App() {
  return (
    <Pagina>
      <Hello/>
    </Pagina>
  )

}
