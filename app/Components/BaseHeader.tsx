import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

export default function BaseHeader({
  title = '',
  showBack = false,
  showSettings = false,
}) {
  const handleBackPress = () => {
    router.back();
  };

  const handleSettingsPress = () => {
    router.push({
      pathname: '/Screens/settings',
    });
  };

  return (
    <View style={styles.headerContainer}>
      <LinearGradient colors={['#280947', '#280841']} style={styles.gradient} />
      <View style={styles.titleContainer}>
        <View style={styles.titleContainerLeft}>
          {showBack && (
            <Pressable onPress={handleBackPress}>
              <Image
                style={styles.backIcon}
                source={require('../../assets/images/backArrow.png')}
              />
            </Pressable>
          )}
          <Text style={styles.titleTextStyles}>{title}</Text>
        </View>
        {showSettings && (
          <Pressable onPress={handleSettingsPress}>
            <Image
              style={styles.settingsIcon}
              source={require('../../assets/images/homeSetting.png')}
            />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: 68,
    boxShadow: '0px 4px 10px 0px #1F073140',
    elevation: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 68,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  titleContainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleContainerLeft: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextStyles: {
    fontFamily: 'PingFang-SC-Bold',
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 36,
  },
  backIcon: { width: 24, height: 24, marginRight: 16 },
  settingsIcon: { width: 24, height: 24 },
});
