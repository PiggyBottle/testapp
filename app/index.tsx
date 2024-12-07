import { Link, router, useFocusEffect } from 'expo-router';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import BaseLayout from './BaseLayout';
import NavigationFooter from './Components/NavigationFooter';
import { Spacer } from './Components/Spacer';
import NOTE_CATEGORIES from './Constants/Categories';
import NoteStorageHook, {
  AllNoteProps,
  NoteProps,
} from './Utils/NoteStorageHook';
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NoteContentRow } from './Components/NoteContentRow';

export default function Index() {
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

  const renderNotes = (category: string) => {
    let categoryNotes = localNotes[category];
    return (
      <View style={styles.categorySection} key={`MainSection-${category}`}>
        <View style={styles.horizontal}>
          {category === 'Work and study' ? (
            <Image
              style={styles.iconSize}
              source={require('../assets/images/homeIconWnS.png')}
            />
          ) : category === 'Life' ? (
            <Image
              style={styles.iconSize}
              source={require('../assets/images/homeIconLife.png')}
            />
          ) : (
            <Image
              style={styles.iconSize}
              source={require('../assets/images/homeIconHnW.png')}
            />
          )}
          <Text style={styles.headerText}>{category}</Text>
        </View>
        {categoryNotes?.map((note, index) => {
          if (index < 3) {
            return (
              <View key={`${note?.category}-${index}`}>
                <NoteContentRow note={note} index={index} />
              </View>
            );
          } else {
            return null;
          }
        })}
      </View>
    );
  };

  return (
    <BaseLayout showHeader={true} title={'Home'} showSettings={true}>
      <ScrollView style={styles.contentContainer}>
        <View style={styles.horizontal}>
          <Image
            style={styles.iconSize}
            source={require('../assets/images/homeIconRecently.png')}
          />
          <Text style={styles.headerTextMain}>Recently created notes</Text>
        </View>
        <Spacer height={28} />
        {NOTE_CATEGORIES.map((category) => {
          return renderNotes(category?.value);
        })}
        <Spacer height={120} />
      </ScrollView>
      <NavigationFooter currentPage={'home'} />
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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  footerStyle: {
    width: '100%',
  },
  horizontal: { display: 'flex', flexDirection: 'row' },
  iconSize: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  categorySection: { marginBottom: 24 },
  headerTextMain: {
    fontFamily: 'PingFang-SC',
    color: '#FFFFFFB2',
    fontSize: 16,
    lineHeight: 19.2,
  },
  headerText: {
    fontFamily: 'PingFang-SC',
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 19.2,
  },
});
