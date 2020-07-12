import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Discover from '~/pages/Discover';
import MovieDetails from '~/pages/MovieDetails';

const Stack = createStackNavigator();

export default function MoreRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Discover" component={Discover} headerShown={false} />
      <Stack.Screen name="MovieDetails" component={MovieDetails} />
    </Stack.Navigator>
  );
}
