import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default function BaseBackground({}) {
  return (
    <LinearGradient
      colors={['#1B284F', '#351159', '#421C45', '#3B184E']}
      locations={[0.1445, 0.4917, 0.7482, 1.0118]}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    />
  );
}

const styles = StyleSheet.create({
  gradient: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
  },
});
