import { MainRoutes } from '@navigation/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from '../drawer-navigator';

const MainStack = createNativeStackNavigator<any>();

const MainNavigation = () => {
  return (
    <MainStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={MainRoutes.DRAWER_TAB}
    >
      <MainStack.Screen name={MainRoutes.DRAWER_TAB} component={TabNavigator} />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
