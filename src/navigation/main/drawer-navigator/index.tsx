/* eslint-disable react/no-unstable-nested-components */
import { HomeIcon, LogoIcon } from '@assets';
import { View } from '@components';
import { TabRoutes } from '@navigation/routes';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chat from '@screens/main/drawer-tab/chat';
import Home from '@screens/main/drawer-tab/home';
import colors from '@utils/constants/colors';
import * as React from 'react';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator<any>();

const TabNavigator = () => {
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
        drawerType: 'slide',
        drawerPosition: 'left',
        swipeEdgeWidth: 50,
      }}
      initialRouteName={TabRoutes.MESSAGE}
    >
      <Drawer.Screen
        name={TabRoutes.MESSAGE}
        component={Chat}
        options={{
          headerShown: false,
          drawerIcon: ({ color, focused }) => (
            <View
              backgroundColor={colors.primary.default}
              borderRadius={22}
              borderWidth={focused ? 0 : 1}
              borderColor={colors.primary.default}
            >
              <LogoIcon width={22} height={22} fill={color} />
            </View>
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

export default TabNavigator;
