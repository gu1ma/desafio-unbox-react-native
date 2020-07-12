import React from 'react';

import { Container } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Trending() {
  return <Container />;
}

Trending.navigationOptions = {
  tabBarLabel: 'Trending',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="plus" size={20} color={tintColor} />
  ),
};
