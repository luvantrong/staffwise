import { View, Text } from '@components';
import MainLayout from '@components/layout/main-layout';
import colors from '@utils/constants/colors';
import { ProfileResponse, Role } from '@utils/types/profile.type';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

const profileDefault: ProfileResponse = {
  id: 1,
  name: 'Mỹ Linh',
  position: Role.STAFF,
  avatar: '',
};

const ProfileInfo = ({ profile }: { profile: ProfileResponse }) => {
  const { name, avatar } = profile;
  return (
    <View style={styles.headerChildrenContainer}>
      <Image
        source={
          avatar
            ? { uri: avatar }
            : require('@assets/images/avatar-default.png')
        }
        style={styles.avatar}
      />
      <View gap={2} center>
        <Text color={colors.white} size={16}>
          Welcome back,
        </Text>
        <Text color={colors.white} weight={'bold'} size={16}>
          {name}
        </Text>
      </View>
    </View>
  );
};
const Home = () => {
  return (
    <MainLayout
      back={<MainLayout.OpenDrawerButton />}
      title="Home"
      headerChildren={<ProfileInfo profile={profileDefault} />}
    >
      <Text>Home</Text>
    </MainLayout>
  );
};

export default Home;

const styles = StyleSheet.create({
  headerChildrenContainer: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
});
