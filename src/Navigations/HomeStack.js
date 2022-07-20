import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DashboardScreen from 'src/Screens/DashboardScreen';
import DetailsScreen from 'src/Screens/DetailsScreen';
import WatchListScreen from 'src/Screens/WatchListScreen';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DashboardScreen"
        component={DashboardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WatchListScreen"
        component={WatchListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
