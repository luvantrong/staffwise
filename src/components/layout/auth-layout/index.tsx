import View from '@components/core/view';
import colors from '@utils/constants/colors';
import React, { Fragment } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ViewProps,
  Keyboard,
} from 'react-native';
import StatusBarLayout from '../status-bar';
import Text from '@components/core/text';

interface IProps extends ViewProps {
  title?: string;
  back?: React.ReactNode;
  loading?: boolean;
}

const AuthLayout: React.FC<IProps> = ({
  title,
  back,
  children,
  loading,
  ...props
}) => {
  return (
    <Fragment>
      {loading && (
        <View
          width={'100%'}
          height={'100%'}
          backgroundColor={'rgba(0,0,0,0.5)'}
          center
          absolute
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={1000000}
        >
          <ActivityIndicator size="small" color={colors.primary.default} />
        </View>
      )}
      <StatusBarLayout
        barStyle="light-content"
        backgroundColor={colors.background}
        statusBarColor={colors.primary.default}
      >
        <View
          padding={20}
          style={styles.container}
          onStartShouldSetResponder={() => {
            Keyboard.dismiss();
            return false;
          }}
          {...props}
        >
          {back}
          <Text font="Inter" size={40} color={colors.white} weight={600}>
            {title}
          </Text>
        </View>
        <View
          flex={1}
          padding={20}
          marginBottom={10}
          onStartShouldSetResponder={() => {
            Keyboard.dismiss();
            return false;
          }}
        >
          {children}
        </View>
      </StatusBarLayout>
    </Fragment>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: colors.primary.default,
  },
});
