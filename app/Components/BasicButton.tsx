import { LinearGradient } from 'expo-linear-gradient';
import { Pressable, StyleSheet, Text } from 'react-native';

interface BaseLayoutProps {
  text?: string;
  width?: number;
  height?: number;
  handleOnPress?: () => void;
}

const BasicButton: React.FC<BaseLayoutProps> = ({
  text,
  width = 200,
  height = 34,
  handleOnPress = () => {},
}) => {
  return (
    <LinearGradient
      colors={['#F94695', '#F13A76']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[styles.button, { width, height }]}
    >
      <Pressable
        style={[styles.button, { width, height }]}
        onPress={handleOnPress}
      >
        <Text style={styles.buttonText}>{text}</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'PingFang-SC',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 18.2,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default BasicButton;
