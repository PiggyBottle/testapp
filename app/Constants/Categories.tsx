import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconStyles: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  homeIconStyles: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
});
export interface NoteCategory {
  label: string;
  summaryLabel: string;
  value: string;
  icon: JSX.Element;
  homeIcon: JSX.Element;
}

const NOTE_CATEGORIES = [
  {
    label: 'Work and Study',
    summaryLabel: 'Work and Study',
    value: 'Work and Study',
    icon: (
      <Image
        style={styles.iconStyles}
        source={require('../../assets/images/summaryIconWnS.png')}
      />
    ),
    homeIcon: (
      <Image
        style={styles.homeIconStyles}
        source={require('../../assets/images/homeIconWnS.png')}
      />
    ),
  },
  {
    label: 'Life',
    summaryLabel: 'Home Life',
    value: 'Life',
    icon: (
      <Image
        style={styles.iconStyles}
        source={require('../../assets/images/summaryIconLife.png')}
      />
    ),
    homeIcon: (
      <Image
        style={styles.homeIconStyles}
        source={require('../../assets/images/homeIconLife.png')}
      />
    ),
  },
  {
    label: 'Health and Well-being',
    summaryLabel: 'Health and wellness',
    value: 'Health and Well-being',
    icon: (
      <Image
        style={styles.iconStyles}
        source={require('../../assets/images/summaryIconHnW.png')}
      />
    ),
    homeIcon: (
      <Image
        style={styles.homeIconStyles}
        source={require('../../assets/images/homeIconHnW.png')}
      />
    ),
  },
];

export const NOTE_CATEGORIES_NO_ICON = NOTE_CATEGORIES.map((category) => {
  return { label: category?.label, value: category?.value };
});

export default NOTE_CATEGORIES;
