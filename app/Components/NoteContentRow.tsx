import React from 'react';
import { Pressable, Text, Image, StyleSheet } from 'react-native';
import { NoteProps } from '../Utils/NoteStorageHook';
import { router } from 'expo-router';

interface NoteContentRowProps {
  note: NoteProps;
  index: number;
  maxLength?: number;
}

export const NoteContentRow: React.FC<NoteContentRowProps> = ({
  note,
  index,
  maxLength = 200,
}) => {
  return (
    <Pressable
      style={styles.noteContainer}
      onPress={() => {
        router.push({
          pathname: '/Screens/viewNote',
          params: { content: note?.content, category: note?.category, index },
        });
      }}
    >
      <Text style={styles.noteText} numberOfLines={2}>
        {note?.content?.substring(0, maxLength)}
        {`${note?.content?.length > maxLength ? '...' : ''}`}
      </Text>
      <Image
        style={styles.iconSize}
        source={require('../../assets/images/redRightArrow.png')}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  noteContainer: {
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
  noteText: {
    fontFamily: 'PingFang-SC',
    color: '#FFFFFFE5',
    fontSize: 16,
    lineHeight: 19.2,
    maxWidth: '85%',
  },
  iconSize: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});

export default NoteContentRow;
