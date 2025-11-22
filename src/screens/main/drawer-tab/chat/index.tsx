import { AddIcon } from '@assets';
import { Button } from '@components';
import MainLayout from '@components/layout/main-layout';
import { authSlice } from '@redux/reducers/auth.slice';
import { useAppDispatch } from '@redux/selectors';
import axios from 'axios';
import React from 'react';
import { Text } from 'react-native';

const Chat = () => {
  const dispatch = useAppDispatch();

  return (
    <MainLayout
      title="Staff Wise"
      back={<Button.IconButton icon={<MainLayout.OpenDrawerButton />} />}
      next={
        <Button.IconButton
          icon={<AddIcon width={25} height={25} viewBox="0 0 30 30" />}
        />
      }
    >
      <Text>Chat</Text>
      <Button
        title="Logout"
        onPress={() => {
          axios.defaults.headers.common.Authorization = '';
          dispatch(authSlice.actions.removeToken());
        }}
      />
    </MainLayout>
  );
};

export default Chat;
