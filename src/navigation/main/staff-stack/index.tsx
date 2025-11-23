import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StaffRoutes } from '@navigation/routes';
import LeaveStatus from '@screens/main/drawer-tab/home/role-content/staff/LeaveStatus';

const StaffStack = createNativeStackNavigator<any>();

const StaffNavigation = () => {
  return (
    <StaffStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={StaffRoutes.LEAVE_STATUS}
    >
      <StaffStack.Screen
        name={StaffRoutes.LEAVE_STATUS}
        component={LeaveStatus}
      />
    </StaffStack.Navigator>
  );
};

export default StaffNavigation;
