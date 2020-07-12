import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export default function GoBack() {
  const { goBack } = useNavigation();
  const Container = styled.TouchableOpacity`
    margin-left: 10px;
  `;
  return (
    <Container
      onPress={() => {
        goBack();
      }}>
      <Icon name="chevron-left" size={40} color="#FFF" />
    </Container>
  );
}
