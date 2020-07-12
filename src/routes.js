import React from 'react';
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import Genres from '~/pages/Genres';
import Discover from '~/pages/Discover';
import Trending from '~/pages/Trending';

import Icon from 'react-native-vector-icons/FontAwesome5';

import MovieDetails from '~/pages/MovieDetails';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Discover: {
        screen: createStackNavigator(
          {
            Discover,
            MovieDetails,
          },
          {
            initialRouteName: 'Discover',
            defaultNavigationOptions: {
              title: '',
              headerTransparent: true,
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
              headerStyle: {
                shadowColor: 'transparent',
                shadowOpacity: 0,
                shadowOffset: {
                  height: 0,
                },
                elevation: 0,
              },
              headerTintColor: '#FFF',
            },
          },
        ),
        navigationOptions: {
          tabBarLabel: 'Discover',
          tabBarIcon: ({ tintColor }) => (
            <Icon name="search" size={20} color={tintColor} />
          ),
        },
      },
      Trending,
      Genres,
    },
    {
      resetOnBlur: true,
      tabBarOptions: {
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#222',
        },
      },
    },
  ),
);

export default Routes;
