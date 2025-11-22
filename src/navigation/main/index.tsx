import { TabRoutes } from '@navigation/routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '@screens/main/drawer-tab/chat';
import Home from '@screens/main/drawer-tab/home';
import * as React from 'react';

const Drawer = createDrawerNavigator<any>();

const TabNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={TabRoutes.CHAT}
    >
      <Drawer.Screen
        name={TabRoutes.CHAT}
        component={Chat}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={TabRoutes.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default TabNavigation;
