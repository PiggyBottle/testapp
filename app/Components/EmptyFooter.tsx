import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

interface BaseLayoutProps {
  children?: ReactNode;
}

const EmptyFooter: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <View style={styles.footerContainer}>
      <LinearGradient
        colors={['rgba(28, 11, 55, 0.85)', 'rgba(29, 8, 55, 0.85)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[-0.0339, 1.0244]}
        style={styles.gradient}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 100,
    width: '100%',
    boxShadow: '0px 4px 10px 0px #1F073140',
    elevation: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default EmptyFooter;
