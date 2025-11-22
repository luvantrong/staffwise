import { Button } from '@components';
import { authSlice } from '@redux/reducers/auth.slice';
import { useAppDispatch } from '@redux/selectors';
import axios from 'axios';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Chat = () => {
  const dispatch = useAppDispatch();
  return (
    <SafeAreaView>
      <Text>Chat</Text>
      <Button
        title="Logout"
        onPress={() => {
          axios.defaults.headers.common.Authorization = '';
          dispatch(authSlice.actions.removeToken());
        }}
      />
    </SafeAreaView>
  );
};

export default Chat;
