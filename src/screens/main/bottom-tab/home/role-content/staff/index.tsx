import { Button, Text, TextInput, View } from '@components';
import { useBottomSheetContext2 } from '@components/common/bottom-sheet-outside';
import MultipleSelect, {
  MultipleSelectOption,
} from '@components/common/multiple-select';
import SelectBox from '@components/common/select-box';
import MainLayout from '@components/layout/main-layout';
import ProfileInfo from '@components/ui/proflie-info';
import { MainRoutes } from '@navigation/routes';
import { useNavigation } from '@react-navigation/native';
import colors from '@utils/constants/colors';
import { height } from '@utils/helpers/dimension';
import { ProfileResponse, Role } from '@utils/types/profile.type';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const profileDefault: ProfileResponse = {
  id: 1,
  name: 'Mỹ Linh',
  position: Role.STAFF,
  avatar: '',
};

const options = [
  {
    value: '1',
    label: 'ABCX',
  },
  {
    value: '2',
    label: 'dsfs',
  },
];

const data: MultipleSelectOption[] = [
  {
    value: '1',
    label: 'B1',
  },
  {
    value: '2',
    label: 'B2',
  },
  {
    value: '3',
    label: 'B3',
  },
  {
    value: '4',
    label: 'B4',
  },
  {
    value: '5',
    label: 'B5',
  },
  {
    value: '6',
    label: 'B6',
  },
  {
    value: '7',
    label: 'B7',
  },
  {
    value: '8',
    label: 'B8',
  },
  {
    value: '9',
    label: 'B9',
  },
  {
    value: '10',
    label: 'B10',
  },
  {
    value: '11',
    label: 'B11',
  },
  {
    value: '12',
    label: 'B12',
  },
  {
    value: '13',
    label: 'B13',
  },
  {
    value: '14',
    label: 'B14',
  },
  {
    value: '15',
    label: 'B15',
  },
  {
    value: '16',
    label: 'B16',
  },
  {
    value: '17',
    label: 'B17',
  },
  {
    value: '18',
    label: 'B18',
  },
  {
    value: '19',
    label: 'B19',
  },
  {
    value: '20',
    label: 'B20',
  },
  {
    value: '21',
    label: 'B21',
  },
];

const StaffHome = () => {
  const navigation = useNavigation<any>();
  const onLeaveStatus = () => {
    navigation.navigate(MainRoutes.STAFF);
  };

  const [test, setTest] = useState('1');
  const [pickedDisease, setPickedDisease] = useState(
    [] as MultipleSelectOption[],
  );

  const { openBottomSheet2, closeBottomSheet2 } = useBottomSheetContext2();

  const handleOpenBottomSheet = () => {
    openBottomSheet2({
      snapPoints: [height * 0.5, height * 0.75],
      // fixSnapPoints: true,
      content: (
        <View
          style={{
            flex: 1,
            width: '100%',
            paddingHorizontal: 16,
          }}
        >
          <TextInput label="12121" />

          <View row center space_between gap={8}>
            <View flex={1}>
              <Button title="Huỷ" onPress={closeBottomSheet2} />
            </View>

            <View flex={1}>
              <Button
                title="OK"
                onPress={() => {
                  console.log('ok');
                }}
              />
            </View>
          </View>
        </View>
      ),
    });
  };

  return (
    <MainLayout
      title="Staff Wise"
      headerChildren={<ProfileInfo profile={profileDefault} />}
    >
      <View gap={8} style={styles.container}>
        <Text>StaffHome</Text>
        <Button title="Leave status" onPress={onLeaveStatus} />
        <Button title="Bottom sheet 2" onPress={handleOpenBottomSheet} />
        <SelectBox
          label="Loại xe"
          placeholder="Chọn loại xe"
          searchLabel="Tìm kiếm loại xe"
          searchPlaceholder="Nhập loại xe tìm kiếm"
          options={options}
          value={test}
          onChange={v => setTest(v)}
        />
        <MultipleSelect
          value={pickedDisease}
          label={'Danh sách bệnh'}
          style={styles.button}
          labelStyle={styles.title}
          searchLabel={'Tìm kiếm bệnh'}
          searchPlaceholder={'Nhập tên bệnh'}
          options={data}
          onChange={value => {
            setPickedDisease(value);
          }}
        />
        {!!pickedDisease?.length && (
          <Text size={13} color={colors.orange.c500} weight={600}>
            Đã chọn "
            <Text size={13} color={colors.orange.c500} weight={600}>
              {pickedDisease.map(v => v.label).join(', ')}
            </Text>
            "
          </Text>
        )}
      </View>
    </MainLayout>
  );
};

export default StaffHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  button: {
    alignSelf: 'flex-start',
    height: 42,
    paddingHorizontal: 16,
    backgroundColor: colors.primary.c500,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
