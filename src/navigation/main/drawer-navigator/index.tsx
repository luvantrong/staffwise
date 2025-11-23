/* eslint-disable react/no-unstable-nested-components */
import { TabRoutes } from '@navigation/routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '@screens/main/drawer-tab/chat';
import Home from '@screens/main/drawer-tab/home';
import * as React from 'react';
import CustomDrawer from './CustomDrawer';
import { ChatIcon, HomeIcon } from '@assets';
import colors from '@utils/constants/colors';

const Drawer = createDrawerNavigator<any>();

const TabNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          fontSize: 16,
        },
        drawerActiveBackgroundColor: colors.primary.c500,
        drawerActiveTintColor: colors.white,
        drawerInactiveTintColor: colors.neutral.c700,
        drawerItemStyle: {
          borderRadius: 8,
        },
      }}
      initialRouteName={TabRoutes.MESSAGE}
    >
      <Drawer.Screen
        name={TabRoutes.MESSAGE}
        component={Chat}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <ChatIcon width={22} height={22} fill={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={TabRoutes.HOME}
        component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({ color }) => (
            <HomeIcon width={22} height={22} fill={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default TabNavigation;
