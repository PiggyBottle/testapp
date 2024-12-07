import BaseLayout from '@/app/BaseLayout';
import BasicButton from '@/app/Components/BasicButton';
import EmptyFooter from '@/app/Components/EmptyFooter';
import Spacer from '@/app/Components/Spacer';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import NoteStorageHook from '@/app/Utils/NoteStorageHook';

export type ViewNoteParams = {
  content: string;
  category: string;
  index: string;
};

export default function ViewNote() {
  const params = useLocalSearchParams<ViewNoteParams>();

  const { content, category, index } = params;
  const { deleteNote } = NoteStorageHook();

  const handleOnPress = async () => {
    await deleteNote(category, parseInt(index));
    router.back();
  };

  return (
    <BaseLayout showHeader={true} title={'View Note'} showBack={true}>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.categoryStyles}>{category}</Text>
        <Spacer height={16} />
        <Text style={styles.contentStyles}>{content}</Text>
      </ScrollView>
      <EmptyFooter>
        <BasicButton text={'Delete Note'} handleOnPress={handleOnPress} />
      </EmptyFooter>
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    display: 'flex',
    width: '100%',
    flex: 1,
    padding: 20,
    paddingBottom: 100,
  },
  text: {
    color: '#fff',
    height: 500,
  },
  categoryStyles: {
    padding: 16,
    backgroundColor: '#FFFFFF0D',
    color: '#FFFFFFE5',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    borderRadius: 16,
    fontFamily: 'PingFang-SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
  contentStyles: {
    padding: 16,
    backgroundColor: '#FFFFFF0D',
    color: '#FFFFFFE5',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    borderRadius: 16,
    fontFamily: 'PingFang-SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
  },
});
