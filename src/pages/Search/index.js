import React from 'react';

import { Container } from './styles';

import Icon from 'react-native-vector-icons/FontAwesome5';

export default function Search() {
  return <Container />;
}

Search.navigationOptions = {
  tabBarLabel: 'Search',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="search" size={20} color={tintColor} />
  ),
};
