import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pages
import Search from '~/pages/Search';
import Discover from '~/pages/Discover';
import Trending from '~/pages/Trending';

//nested routes
import DiscoverRoutes from './discover.routes';

//icons
import IconsFA5 from 'react-native-vector-icons/FontAwesome5';
import IconsFeather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function HomeRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          activeBackgroundColor: '#000',
          inactiveBackgroundColor: '#000',
        }}>
        <Tab.Screen
          name="Discover"
          component={() => (
            <>
              <DiscoverRoutes />
            </>
          )}
          options={{
            title: 'Discover',
            color: '#fff',
            tabBarIcon: () => (
              <>
                <IconsFeather name="menu" size={24} color="#fff" />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Trending"
          component={() => <Trending />}
          options={{
            title: 'Trending',
            color: '#fff',
            tabBarIcon: () => (
              <>
                <IconsFA5 name="plus" size={20} color="#fff" />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
