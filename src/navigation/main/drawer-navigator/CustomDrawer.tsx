import { SignOutIcon } from '@assets';
import { Text, View } from '@components';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import colors from '@utils/constants/colors';
import { ProfileResponse, Role } from '@utils/types/profile.type';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const profileDefault: ProfileResponse = {
  id: 1,
  name: 'Mỹ Linh',
  position: Role.STAFF,
  avatar: '',
};

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { avatar, name } = profileDefault;
  return (
    <View flex={1}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          backgroundColor: colors.primary.default,
          paddingBottom: 0,
          flex: 1,
        }}
      >
        <ImageBackground
          source={require('@assets/images/header-drawer-bg.png')}
          style={{
            padding: 20,
            marginLeft: -15,
          }}
        >
          <View width={75} gap={6} center>
            <Image
              source={
                avatar
                  ? { uri: avatar }
                  : require('@assets/images/avatar-default.png')
              }
              style={styles.avatar}
            />
            <Text color={colors.white} weight={'bold'} size={18}>
              {name}
            </Text>
          </View>
        </ImageBackground>
        <View
          flex={1}
          backgroundColor={colors.background}
          paddingVertical={20}
          marginHorizontal={-15}
          paddingHorizontal={20}
          style={{
            flexDirection: 'column',
            gap: 40,
          }}
        >
          <View>
            <DrawerItemList {...props} />
          </View>
          <View>
            {/* /
             // Thêm các tính năng như: 
             // lịch sử 5 hội thoại chat 
             // gần nhất vào đây
            */}
          </View>
        </View>
      </DrawerContentScrollView>
      <View
        padding={20}
        borderTopWidth={1}
        backgroundColor={colors.background}
        style={{
          borderTopColor: colors.neutral.c300,
        }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            gap: 6,
            alignItems: 'center',
          }}
        >
          <SignOutIcon width={22} height={22} />
          <Text>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  circleBackground: {
    position: 'absolute',
    bottom: '-75%',
    left: 0,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 72,
  },
});
