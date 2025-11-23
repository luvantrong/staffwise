import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StaffRoutes } from '@navigation/routes';
import LeaveStatus from '@screens/main/drawer-tab/home/role-content/staff/LeaveStatus';
import AdditionalLeave from '@screens/main/drawer-tab/home/role-content/staff/AdditionalLeave';
import StaffHome from '@screens/main/drawer-tab/home/role-content/staff';

const StaffStack = createNativeStackNavigator<any>();

const StaffNavigation = () => {
  return (
    <StaffStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={StaffRoutes.HOME}
    >
      <StaffStack.Screen name={StaffRoutes.HOME} component={StaffHome} />
      <StaffStack.Screen
        name={StaffRoutes.LEAVE_STATUS}
        component={LeaveStatus}
      />
      <StaffStack.Screen
        name={StaffRoutes.ADDITIONAL_LEAVE}
        component={AdditionalLeave}
      />
    </StaffStack.Navigator>
  );
};

export default StaffNavigation;
