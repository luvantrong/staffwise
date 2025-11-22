import { AddIcon, MenuIcon } from '@assets';
import { Button } from '@components';
import MainLayout from '@components/layout/main-layout';
import { useNavigation } from '@react-navigation/native';
import { authSlice } from '@redux/reducers/auth.slice';
import { useAppDispatch } from '@redux/selectors';
import axios from 'axios';
import React from 'react';
import { Text } from 'react-native';

const Chat = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <MainLayout
      title="Staff Wise"
      back={
        <Button.IconButton
          icon={<MenuIcon width={20} height={20} viewBox="0 0 512 512" />}
          onPress={openDrawer}
        />
      }
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
