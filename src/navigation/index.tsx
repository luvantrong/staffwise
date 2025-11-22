import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { authSlice } from '@redux/reducers/auth.slice';
import events, { eventKeys } from '@utils/helpers/events';
import React, { useEffect } from 'react';
import MainNavigator from './main';
import { RootRoutes } from './routes';
import { useAppDispatch } from '@redux/selectors';
import useAuthen from '@hooks/useAuthen';
import AuthNavigator from './auth';

const RootStack = createNativeStackNavigator<any>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootContent />
    </NavigationContainer>
  );
};

const RootContent = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const isSignedIn = useAuthen();

  useEffect(() => {
    const sub = events.on(eventKeys.resetToken, () => {
      dispatch(authSlice.actions.removeToken());
    });
    return () => {
      events.off(sub);
    };
  }, []);

  useEffect(() => {
    navigation.reset({
      index: 0,
      routes: [
        { name: (isSignedIn ? RootRoutes.MAIN : RootRoutes.AUTH) as never },
      ],
    });
  }, [isSignedIn]);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={RootRoutes.AUTH} component={AuthNavigator} />
      <RootStack.Screen name={RootRoutes.MAIN} component={MainNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
