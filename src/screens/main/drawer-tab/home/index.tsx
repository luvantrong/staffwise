import StaffNavigation from '@navigation/main/staff-stack';
import { ProfileResponse, Role } from '@utils/types/profile.type';
import React from 'react';
import EmptyPage from './EmptyPage';

const profileDefault: ProfileResponse = {
  id: 1,
  name: 'Mỹ Linh',
  position: Role.STAFF,
  avatar: '',
};

const Home = () => {
  const { position } = profileDefault;
  const ContentDetailMap: { [key: string]: any } = {
    [Role.STAFF]: StaffNavigation,
  };
  const ContentPage = ContentDetailMap[position as string] || EmptyPage;
  return <ContentPage />;
};

export default Home;
