import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

//pages
import MovieDetails from '~/pages/MovieDetails';

//components
import GoBack from '~/components/GoBack';

//nested routes
import TabRoutes from '~/routes/tabs.routes';

export default function IndexRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          options={() => {
            return {
              headerTransparent: true,
              headerTitle: '',
              color: 'white',
            };
          }}
          component={TabRoutes}
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
    </NavigationContainer>
  );
}
