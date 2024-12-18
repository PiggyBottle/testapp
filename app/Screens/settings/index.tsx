import BaseLayout from '@/app/BaseLayout';
import BasicButton from '@/app/Components/BasicButton';
import EmptyFooter from '@/app/Components/EmptyFooter';
import { Image, ScrollView, StyleSheet } from 'react-native';
import NoteStorageHook from '@/app/Utils/NoteStorageHook';
import { useEffect, useState } from 'react';
import { OptionRow } from '@/app/Components/OptionRow';
import Popup from '@/app/Components/Popup';

export default function Settings() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState(
    'All notes have been cleared'
  );

  const { deleteAllNotes, deleteExposedNotes } = NoteStorageHook();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleClosePopup();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [showPopup]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDeleteAllNotes = () => {
    // this deletes all notes
    // deleteAllNotes();

    // this deletes the latest 3 notes for each category
    deleteExposedNotes();

    setShowPopup(true);
    setPopupMessage('All notes have been cleared');
  };

  const unavaiableFunction = () => {
    setPopupMessage('Function not included in demo');
    setShowPopup(true);
  };

  const pressHanderOC = () => {
    unavaiableFunction();
  };

  const pressHanderUA = () => {
    unavaiableFunction();
  };

  const pressHanderPP = () => {
    unavaiableFunction();
  };

  const pressHanderAU = () => {
    unavaiableFunction();
  };

  return (
    <BaseLayout showHeader={true} title={'Settings'} showBack={true}>
      <ScrollView style={styles.contentContainer}>
        <OptionRow
          onPressHandler={pressHanderOC}
          icon={
            <Image
              style={styles.iconSize}
              source={require('../../../assets/images/settingsIconOC.png')}
            />
          }
          text="Online Customer"
        />
        <OptionRow
          onPressHandler={pressHanderUA}
          icon={
            <Image
              style={styles.iconSize}
              source={require('../../../assets/images/settingsIconUA.png')}
            />
          }
          text="User Agreement"
        />
        <OptionRow
          onPressHandler={pressHanderPP}
          icon={
            <Image
              style={styles.iconSize}
              source={require('../../../assets/images/settingsIconPP.png')}
            />
          }
          text="Privacy Policy"
        />
        <OptionRow
          onPressHandler={pressHanderAU}
          icon={
            <Image
              style={styles.iconSize}
              source={require('../../../assets/images/settingsIconAU.png')}
            />
          }
          text="About Us"
        />
      </ScrollView>
      <EmptyFooter>
        <BasicButton
          text={'Delete All Notes'}
          handleOnPress={handleDeleteAllNotes}
        />
      </EmptyFooter>
      <Popup
        visible={showPopup}
        closePopUp={handleClosePopup}
        message={popupMessage}
      />
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
  iconSize: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});
