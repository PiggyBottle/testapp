import BaseLayout from '@/app/BaseLayout';
import BasicButton from '@/app/Components/BasicButton';
import EmptyFooter from '@/app/Components/EmptyFooter';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { NOTE_CATEGORIES_NO_ICON } from '@/app/Constants/Categories';
import NoteStorageHook from '@/app/Utils/NoteStorageHook';
import { router } from 'expo-router';
import Popup from '@/app/Components/Popup';

export default function NewNote() {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState(NOTE_CATEGORIES_NO_ICON[0]?.value);
  const [text, setText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClosePopup();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const { setNotes } = NoteStorageHook();

  const handleOnPress = async () => {
    if (text?.length > 0) {
      await setNotes({ category, content: text });
      router.back();
    } else {
      setShowPopup(true);
    }
  };

  const onChangeText = (newText: string) => {
    if (newText?.length <= 200) {
      setText(newText);
    } else {
      setText(newText?.substring(0, 200));
    }
  };

  return (
    <BaseLayout showHeader={true} title={'New Note'} showBack={true}>
      <View style={styles.dropdownContainer}>
        <DropDownPicker
          items={NOTE_CATEGORIES_NO_ICON}
          value={category}
          setValue={setCategory}
          open={open}
          setOpen={setOpen}
          style={styles.pickerStyle}
          labelStyle={styles.pickerLabelStyle}
          textStyle={styles.pickerLabelStyle}
          theme={'DARK'}
        />
      </View>
      <ScrollView style={styles.contentContainer}>
        <TextInput
          placeholderTextColor={'#FFFFFFE5'}
          placeholder={'Please input note content'}
          multiline={true}
          onChangeText={onChangeText}
          style={styles.inputStyles}
          value={text}
          autoFocus={true}
        />
      </ScrollView>
      <EmptyFooter>
        <BasicButton text={'Save'} handleOnPress={handleOnPress} />
      </EmptyFooter>
      <Popup
        visible={showPopup}
        closePopUp={handleClosePopup}
        message={'All notes must have content'}
      />
    </BaseLayout>
  );
}

const styles = StyleSheet.create({
  dropdownContainer: {
    display: 'flex',
    width: '100%',
    padding: 20,
    paddingBottom: 16,
  },
  contentContainer: {
    display: 'flex',
    width: '100%',
    flex: 1,
    padding: 20,
    paddingTop: 0,
    paddingBottom: 100,
  },
  text: {
    color: '#fff',
    height: 500,
  },
  pickerStyle: {
    backgroundColor: '#FFFFFF0D',
    color: '#FFFFFFE5',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    borderRadius: 16,
  },
  pickerLabelStyle: {
    fontFamily: 'PingFang-SC',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: '#FFFFFFE5',
    marginLeft: 8,
  },
  inputStyles: {
    fontFamily: 'PingFang-SC',
    textAlignVertical: 'top',
    padding: 16,
    backgroundColor: '#FFFFFF0D',
    height: 334,
    color: '#FFFFFFE5',
    borderWidth: 1,
    borderColor: '#FFFFFF1F',
    borderRadius: 16,
  },
});
