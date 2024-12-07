import BaseLayout from '@/app/BaseLayout';
import NavigationFooter from '@/app/Components/NavigationFooter';
import NoteContentRow from '@/app/Components/NoteContentRow';
import Spacer from '@/app/Components/Spacer';
import NoteStorageHook, { AllNoteProps } from '@/app/Utils/NoteStorageHook';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { useCallback, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export type ViewCategoryParams = {
  category: string;
};

export default function viewCategory() {
  const params = useLocalSearchParams<ViewCategoryParams>();
  const { category } = params;

  const { getNotes } = NoteStorageHook();
  const [localNotes, setLocalNotes] = useState<AllNoteProps>({});

  useFocusEffect(
    useCallback(() => {
      handleGetNotes(category);
      return () => {};
    }, [])
  );

  const handleBackPress = () => {
    router.back();
  };

  const handleGetNotes = async (category: string) => {
    const notes = await getNotes(category);
    setLocalNotes(notes);
  };

  const renderCategorySummary = useCallback(() => {
    let sizeOfCategory = localNotes?.[category]?.length;

    return (
      <View key={`SummaryRow-${category}`}>
        <View style={styles.topRow}>
          <View style={styles.topRowLeft}>
            <Text style={styles.topRowTextStyles}>{category}</Text>
          </View>
        </View>
        <Spacer height={12} />
        <View style={styles.bottomRow}>
          <Text style={styles.bottomRowText}>
            {`This topic has a total of ${sizeOfCategory} record${
              sizeOfCategory !== 1 ? 's' : ''
            }.`}
          </Text>
        </View>
      </View>
    );
  }, [localNotes]);

  return (
    <BaseLayout showHeader={false}>
      <View style={styles.header}>
        <Pressable onPress={handleBackPress}>
          <Image
            style={styles.backIcon}
            source={require('../../../assets/images/backArrow.png')}
          />
        </Pressable>
        <Text style={styles.titleTextStyles}>Category Summary</Text>
        <Image
          style={styles.topRightImg}
          source={require('../../../assets/images/summaryIconTopRight.png')}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        {renderCategorySummary()}
        {localNotes?.[category]?.map((note, index) => {
          return (
            <View key={`Details-${note?.category}-${index}`}>
              <NoteContentRow note={note} index={index} />
            </View>
          );
        })}
        <Spacer height={120} />
      </ScrollView>
      <NavigationFooter currentPage={'summary'} />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    width: '100%',
    height: 155,
  },
  backIcon: { width: 24, height: 24, marginRight: 16, marginTop: 6 },
  topRightImg: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 229,
    height: 185,
  },
  titleTextStyles: {
    zIndex: 20,
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
  bottomRow: {},
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
