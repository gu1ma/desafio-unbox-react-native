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
          activeTintColor: 'rgba(255, 255, 255, 1)',
          inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
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
            tabBarIcon: ({ color }) => (
              <>
                <IconsFeather name="menu" size={24} color={color} />
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
            tabBarIcon: ({ color }) => (
              <>
                <IconsFA5 name="plus" size={20} color={color} />
              </>
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={() => <Search />}
          options={{
            title: 'Search',
            color: '#fff',
            tabBarIcon: ({ color }) => (
              <>
                <IconsFA5 name="search" size={20} color={color} />
              </>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
