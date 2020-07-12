import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from '~/pages/Discover';
import MovieDetails from '~/pages/MovieDetails';

import GoBack from '~/components/GoBack';

const Stack = createStackNavigator();

export default function MoreRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={() => {
          return {
            headerShown: false,
          };
        }}
      />
      <Stack.Screen
        name="MovieDetails"
        component={MovieDetails}
        options={() => {
          return {
            headerLeft: () => <GoBack />,
            headerTransparent: true,
            headerTitle: '',
          };
        }}
      />
    </Stack.Navigator>
  );
}
