import MainLayout from '@components/layout/main-layout';
import React from 'react';
import { Text } from 'react-native';

const Home = () => {
  return (
    <MainLayout back={<MainLayout.OpenDrawerButton />} title="Home">
      <Text>Home</Text>
    </MainLayout>
  );
};

export default Home;
