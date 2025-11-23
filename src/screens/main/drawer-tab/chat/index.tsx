import { AddIcon } from '@assets';
import { Button } from '@components';
import MainLayout from '@components/layout/main-layout';
import React from 'react';
import { Text } from 'react-native';

const Chat = () => {
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
    </MainLayout>
  );
};

export default Chat;
