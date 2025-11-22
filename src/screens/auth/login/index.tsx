import { Button, Text } from '@components';
import AuthLayout from '@components/layout/auth-layout';
import { setToken } from '@redux/reducers/auth.slice';
import { useAppDispatch } from '@redux/selectors';
import { baseAPI } from '@services/baseAPI';
import React from 'react';

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
    <AuthLayout>
      <Text>Chat</Text>
      <Button title="Login" onPress={signIn} />
    </AuthLayout>
  );
};

export default Login;
