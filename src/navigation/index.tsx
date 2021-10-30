import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootNavigator } from './RootNavigator/RootNavigator';

export default function Navigation() {
  //   const linkingConfig = useLinkingConfig();
  //   const linking = {
  //     config: linkingConfig,
  //   };

  return (
    <NavigationContainer
      //   linking={linking}
      documentTitle={{
        formatter: (_, route) => `${route?.name} - Movie App`,
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
