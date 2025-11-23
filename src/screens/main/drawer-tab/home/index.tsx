import { ProfileResponse, Role } from '@utils/types/profile.type';
import React from 'react';
import EmptyPage from './EmptyPage';
import AdminHome from './role-content/admin';
import ManagerHome from './role-content/manager';
import StaffHome from './role-content/staff';

const profileDefault: ProfileResponse = {
  id: 1,
  name: 'Mỹ Linh',
  position: Role.STAFF,
  avatar: '',
};

export interface ContentDetailPageProps {
  profile: ProfileResponse;
}

const Home = () => {
  const { position } = profileDefault;
  const ContentDetailMap: { [key: string]: any } = {
    [Role.STAFF]: StaffHome,
    [Role.MANAGER]: ManagerHome,
    [Role.ADMIN]: AdminHome,
  };
  const ContentPage = ContentDetailMap[position as string] || EmptyPage;
  return <ContentPage profile={profileDefault} />;
};

export default Home;
