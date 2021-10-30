import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SearchScreen } from '../../screens/SearchScreen';

import { blackColor, whiteColor, secondaryColor } from '../../utils/colors';

const BottomTab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Search"
      //   tabBarOptions={{
      //     style: {
      //       paddingVertical: 0,
      //       backgroundColor: whiteColor,
      //     },
      //     tabStyle: {
      //       padding: 5,
      //     },
      //     activeTintColor: blackColor,
      //     showLabel: true,
      //   }}
    >
      <BottomTab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          //   tabBarIcon: ({ focused }) => (
          //     <Icon name="home" color={focused ? secondaryColor : blackColor} />
          //   ),
          tabBarLabel: ({ focused }) => (
            <Text style={focused ? styles.activeLabel : styles.label}>
              Search
            </Text>
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
    color: 'black',
  },
  activeLabel: {
    fontSize: 11,
    color: secondaryColor,
  },
  createAdIconActive: {
    borderRadius: 100,
    backgroundColor: secondaryColor,
    padding: 5,
  },
});
