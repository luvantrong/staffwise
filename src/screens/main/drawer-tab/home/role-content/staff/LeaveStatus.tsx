import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainLayout from '@components/layout/main-layout';

const LeaveStatus = () => {
  return (
    <MainLayout back={<MainLayout.BackToPreviousButton />} title="Leave Status">
      <View style={styles.container}>
        <Text>Leave Status</Text>
      </View>
    </MainLayout>
  );
};

export default LeaveStatus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
