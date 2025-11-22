import { Button, Text } from '@components';
import { setToken } from '@redux/reducers/auth.slice';
import { useAppDispatch } from '@redux/selectors';
import { baseAPI } from '@services/baseAPI';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  const dispatch = useAppDispatch();
  const signIn = async () => {
    const token = 'day-la-token';
    if (token) {
      dispatch(baseAPI.util.resetApiState());
      dispatch(
        setToken({
          access_token: token,
        }),
      );
    }
  };
  return (
    <SafeAreaView>
      <Text>Chat</Text>
      <Button title="Login" onPress={signIn} />
    </SafeAreaView>
  );
};

export default Login;
