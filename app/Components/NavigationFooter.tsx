import { LinearGradient } from 'expo-linear-gradient';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Spacer, { VSpacer } from './Spacer';
import { Link } from 'expo-router';

export default function NavigationFooter({ currentPage = '' }) {
  return (
    <View style={styles.footerContainer}>
      <LinearGradient
        colors={['rgba(28, 11, 55, 0.85)', 'rgba(29, 8, 55, 0.85)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        locations={[-0.0339, 1.0244]}
        style={styles.gradient}
      />
      <VSpacer />
      <Link href="/" style={styles.hitSlop}>
        <View style={styles.iconContainer}>
          {currentPage === 'home' ? (
            <Image
              style={styles.bottomIcons}
              source={require('../../assets/images/homeActive.png')}
            />
          ) : (
            <Image
              style={styles.bottomIcons}
              source={require('../../assets/images/homeInactive.png')}
            />
          )}
          <Spacer height={6} />
          <Text
            style={[
              styles.bottomText,
              currentPage === 'home'
                ? { color: '#F94695' }
                : { color: '#A6A6A6' },
            ]}
          >
            Home
          </Text>
        </View>
      </Link>

      <Link href="/Screens/newNote" style={styles.hitSlop}>
        <Image
          style={styles.addNoteIcon}
          source={require('../../assets/images/addNote.png')}
        />
      </Link>

      <Link href="/Screens/summary" style={styles.hitSlop}>
        <View style={styles.iconContainer}>
          {currentPage === 'summary' ? (
            <Image
              style={styles.bottomIcons}
              source={require('../../assets/images/summaryActive.png')}
            />
          ) : (
            <Image
              style={styles.bottomIcons}
              source={require('../../assets/images/summaryInactive.png')}
            />
          )}
          <Spacer height={6} />
          <Text
            style={[
              styles.bottomText,
              currentPage === 'summary'
                ? { color: '#F94695' }
                : { color: '#918DAC' },
            ]}
          >
            Summary
          </Text>
        </View>
      </Link>
      <VSpacer />
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 100,
    width: '100%',
    boxShadow: '0px 4px 10px 0px #1F073140',
    elevation: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backdropFilter: 'blur(20px)',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  iconContainer: { display: 'flex', flexDirection: 'column' },
  bottomIcons: {
    width: 50,
    height: 47,
  },
  addNoteIcon: {
    width: 36,
    height: 36,
  },
  bottomText: {
    fontFamily: 'PingFang-SC',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 14.4,
    textAlign: 'center',
  },
  hitSlop: { padding: 16 },
});
