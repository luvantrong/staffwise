import { SadFace, SignOutIcon } from '@assets';
import { Button, Text, useModal, View } from '@components';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { authSlice } from '@redux/reducers/auth.slice';
import { useAppDispatch } from '@redux/selectors';
import colors from '@utils/constants/colors';
import { ProfileResponse, Role } from '@utils/types/profile.type';
import axios from 'axios';
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
  const { modalControl } = useModal();
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    modalControl?.open({
      title: '',
      content: (
        <View center gap={16}>
          <SadFace color={colors.primary.default} />
          <Text align="center">
            Bạn có đồng ý đăng xuất khỏi ứng dụng không?
          </Text>
        </View>
      ),
      button1: (
        <Button
          title="Đồng ý"
          onPress={async () => {
            modalControl?.close();
            axios.defaults.headers.common.Authorization = '';
            dispatch(authSlice.actions.removeToken());
          }}
        />
      ),
      button2: (
        <Button
          title="Hủy"
          type={Button.Type.outline}
          onPress={() => {
            modalControl?.close();
          }}
        />
      ),
    });
  };
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
            <Text color={colors.white} weight={600} size={18}>
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
          onPress={handleSignOut}
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
