import React from 'react';

import { Container } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Genres() {
  return <Container />;
}

Genres.navigationOptions = {
  tabBarLabel: 'Genres',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="file" size={20} color={tintColor} />
  ),
};
