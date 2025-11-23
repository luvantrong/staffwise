import { MainRoutes } from '@navigation/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../drawer-navigator';
import StaffNavigation from '../staff-stack';

const MainStack = createNativeStackNavigator<any>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={MainRoutes.DRAWER_TAB}
    >
      <MainStack.Screen name={MainRoutes.DRAWER_TAB} component={TabNavigator} />
      <MainStack.Screen name={MainRoutes.STAFF} component={StaffNavigation} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
