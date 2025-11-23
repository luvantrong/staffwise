import { Button } from '@components';
import MainLayout from '@components/layout/main-layout';
import ProfileInfo from '@components/ui/proflie-info';
import { MainRoutes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ContentDetailPageProps } from '../..';

const AdminHome = (props: ContentDetailPageProps) => {
  const { profile } = props;
  const navigation = useNavigation<any>();
  const onLeaveStatus = () => {
    navigation.getParent().navigate(MainRoutes.ADMIN);
  };
  return (
    <MainLayout
      back={<MainLayout.OpenDrawerButton />}
      title="Home"
      headerChildren={<ProfileInfo profile={profile} />}
    >
      <View style={styles.container}>
        <Text>AdminHome</Text>
        <Button title="Leave status" onPress={onLeaveStatus} />
      </View>
    </MainLayout>
  );
};

export default AdminHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
