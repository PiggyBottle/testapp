import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Modal, View, Text, StyleSheet, Pressable } from 'react-native';

interface PopupProps {
  visible: boolean;
  message?: string;
  closePopUp?: () => void;
}

const Popup: React.FC<PopupProps> = ({ visible, closePopUp, message }) => {
  return (
    <Modal transparent={true} visible={visible} animationType="fade">
      <Pressable style={styles.overlay} onPress={closePopUp}>
        <View style={styles.popupContainer}>
          <LinearGradient
            colors={['#C724E1', '#4E22CC']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
          />
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popupContainer: {
    position: 'relative',
    width: 173,
    height: 80,
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  message: {
    textAlign: 'center',
    fontFamily: 'PingFang-SC',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  gradient: {
    position: 'absolute',
    display: 'flex',
    top: 0,
    width: 173,
    height: 80,
    borderRadius: 20,
  },
});

export default Popup;
