import { StyleSheet, View } from 'react-native';
import BaseHeader from './Components/BaseHeader';
import BaseBackground from './Components/BaseBackground';
import { ReactNode } from 'react';
import { StatusBar } from 'expo-status-bar';
import Spacer from './Components/Spacer';
import Constants from 'expo-constants';

interface BaseLayoutProps {
  children?: ReactNode;
  showHeader?: boolean;
  showBack?: boolean;
  title?: string;
  showSettings?: boolean;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  showHeader = false,
  showBack = false,
  title = '',
  showSettings = false,
}) => {
  return (
    <View style={styles.page}>
      <StatusBar style="dark" backgroundColor="#280842" />
      <Spacer height={Constants.statusBarHeight} />
      <BaseBackground />
      {!!showHeader && (
        <BaseHeader
          title={title}
          showBack={showBack}
          showSettings={showSettings}
        />
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default BaseLayout;
