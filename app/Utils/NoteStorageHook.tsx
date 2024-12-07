import AsyncStorage from '@react-native-async-storage/async-storage';
import NOTE_CATEGORIES from '../Constants/Categories';

export interface NoteProps {
  category: string;
  content: string;
}

export interface AllNoteProps {
  [category: string]: NoteProps[];
}

export default function NoteStorageHook() {
  async function getNotes(category = 'all') {
    let allNotes: AllNoteProps = {
      'Work and Study': [],
      Life: [],
      'Health and Well-being': [],
    };
    if (category === 'all') {
      for (let i = 0; i < NOTE_CATEGORIES?.length; i++) {
        let notes: NoteProps[] = [];
        let value = NOTE_CATEGORIES[i]?.value;
        if (value) {
          let storedNotes = await AsyncStorage.getItem(value);
          if (storedNotes) {
            notes = [...notes, ...JSON.parse(storedNotes)];
            allNotes[NOTE_CATEGORIES[i]?.value] = notes;
          }
        }
      }
    } else {
      let storedNotes = await AsyncStorage.getItem(category);
      let notes: NoteProps[] = [];
      if (storedNotes) {
        notes = [...notes, ...JSON.parse(storedNotes)];
        allNotes[category] = notes;
      }
    }
    return allNotes;
  }

  async function setNotes(newNote: NoteProps) {
    if (newNote?.category?.length > 0) {
      let existingNotes = (await getNotes(newNote?.category))[
        newNote?.category
      ];
      existingNotes = [newNote, ...existingNotes];
      AsyncStorage.setItem(
        newNote?.category,
        JSON.stringify(existingNotes)
      ).catch((err) => {
        console.log('setNotes err', err);
      });
    }
  }

  async function deleteNote(category: string, index: number) {
    let existingNotes = (await getNotes(category))[category];
    existingNotes.splice(index, 1);
    AsyncStorage.setItem(category, JSON.stringify(existingNotes));
  }

  async function deleteAllNotes() {
    AsyncStorage.clear();
  }

  async function deleteExposedNotes() {
    for (let i = 0; i < NOTE_CATEGORIES?.length; i++) {
      let category = NOTE_CATEGORIES[i]?.value;
      for (let j = 0; j < 3; j++) {
        await deleteNote(category, 0);
      }
    }
  }

  return {
    getNotes,
    setNotes,
    deleteNote,
    deleteAllNotes,
    deleteExposedNotes,
  };
}
