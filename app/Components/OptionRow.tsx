import React, { ReactNode } from 'react';
import { Pressable, View, Text, Image, StyleSheet } from 'react-native';

interface OptionRowProps {
  onPressHandler: () => void;
  icon: ReactNode;
  text: string;
}

export const OptionRow: React.FC<OptionRowProps> = ({
  onPressHandler,
  icon,
  text,
}) => {
  return (
    <Pressable style={styles.rowContainer} onPress={onPressHandler}>
      <View style={styles.rowLeft}>
        {icon}
        <Text style={styles.rowText} numberOfLines={2}>
          {text}
        </Text>
      </View>
      <Image
        style={styles.iconSize}
        source={require('../../assets/images/redRightArrow.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 14,
    backgroundColor: '#FFFFFF0D',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#FFFFFF1F',
    backdropFilter: 'blur(42px)',
  },
  rowLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    fontFamily: 'PingFang-SC',
    color: '#FFFFFFE5',
    fontSize: 16,
    lineHeight: 19.2,
    maxWidth: '85%',
  },
  iconSize: {
    height: 20,
    width: 20,
  },
});

export default OptionRow;
