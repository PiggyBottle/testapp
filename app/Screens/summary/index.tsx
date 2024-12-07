import BaseLayout from '@/app/BaseLayout';
import BasicButton from '@/app/Components/BasicButton';
import NavigationFooter from '@/app/Components/NavigationFooter';
import Spacer, { VSpacer } from '@/app/Components/Spacer';
import NOTE_CATEGORIES, { NoteCategory } from '@/app/Constants/Categories';
import NoteStorageHook, { AllNoteProps } from '@/app/Utils/NoteStorageHook';
import { router, useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Summary() {
  const { getNotes } = NoteStorageHook();
  const [localNotes, setLocalNotes] = useState<AllNoteProps>({});

  useFocusEffect(
    useCallback(() => {
      handleGetNotes();
      return () => {};
    }, [])
  );

  const handleGetNotes = async () => {
    const notes = await getNotes();
    setLocalNotes(notes);
  };

  const renderCategorySummary = (category: NoteCategory) => {
    const categoryValue = category?.value;
    let sizeOfCategory = localNotes?.[categoryValue]?.length;

    const handleNavToDetails = () => {
      router.push({
        pathname: '/Screens/viewCategory',
        params: { category: categoryValue },
      });
    };

    return (
      <View key={`SummaryRow-${categoryValue}`}>
        <View style={styles.topRow}>
          <View style={styles.topRowLeft}>
            {category?.icon}
            <VSpacer width={4} />
            <Text style={styles.topRowTextStyles}>{categoryValue}</Text>
          </View>
          <BasicButton
            text={'Detail'}
            handleOnPress={handleNavToDetails}
            width={71}
          />
        </View>
        <Spacer height={12} />
        <View style={styles.bottomRow}>
          <Text style={styles.bottomRowText}>
            {`This topic has a total of ${sizeOfCategory} record${
              sizeOfCategory !== 1 ? 's' : ''
            }.`}
          </Text>
        </View>
        <Spacer height={40} />
      </View>
    );
  };

  return (
    <BaseLayout showHeader={false}>
      <View style={styles.header}>
        <Text style={styles.titleTextStyles}>Summary</Text>
        <Image
          style={styles.topRightImg}
          source={require('../../../assets/images/summaryIconTopRight.png')}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        {NOTE_CATEGORIES.map((category) => {
          return renderCategorySummary(category);
        })}
        <Spacer height={120} />
      </ScrollView>
      <NavigationFooter currentPage={'summary'} />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  header: { position: 'relative', padding: 16, width: '100%', height: 155 },
  topRightImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 229,
    height: 185,
  },
  titleTextStyles: {
    fontFamily: 'PingFang-SC-Bold',
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 36,
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    flex: 1,
    padding: 20,
    paddingBottom: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#FFFFFF0D',
  },
  topRow: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topRowLeft: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topRowTextStyles: {
    fontFamily: 'PingFang-SC-Regular',
    fontWeight: '400',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19.2,
  },
  bottomRow: {
    backgroundColor: '#FFFFFF0D',
    color: '#FFFFFFE5',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    borderRadius: 16,
    padding: 16,
  },
  bottomRowText: {
    fontFamily: 'PingFang-SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#FFFFFFB2',
  },
  text: {
    color: '#fff',
    height: 500,
  },
});
