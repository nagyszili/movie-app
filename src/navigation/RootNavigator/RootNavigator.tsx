import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SearchScreen } from '../../screens/SearchScreen';

// import { BottomTabNavigator } from '../BottomTabNavigator';

const RootStack = createNativeStackNavigator();

export const RootNavigator: React.FC<{}> = () => {
  return (
    <RootStack.Navigator initialRouteName="Search">
      <RootStack.Screen
        name="Search"
        component={SearchScreen}
        // options={{ headerShown: false }}
      />
      {/* <RootStack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      /> */}
    </RootStack.Navigator>
  );
};
