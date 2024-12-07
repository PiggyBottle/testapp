import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconStyles: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
});
export interface NoteCategory {
  label: string;
  value: string;
  icon: JSX.Element;
}

const NOTE_CATEGORIES = [
  {
    label: 'Work and Study',
    value: 'Work and Study',
    icon: (
      <Image
        style={styles.iconStyles}
        source={require('../../assets/images/summaryIconWnS.png')}
      />
    ),
  },
  {
    label: 'Life',
    value: 'Life',
    icon: (
      <Image
        style={styles.iconStyles}
        source={require('../../assets/images/summaryIconLife.png')}
      />
    ),
  },
  {
    label: 'Health and Well-being',
    value: 'Health and Well-being',
    icon: (
      <Image
        style={styles.iconStyles}
        source={require('../../assets/images/summaryIconHnW.png')}
      />
    ),
  },
];

export const NOTE_CATEGORIES_NO_ICON = NOTE_CATEGORIES.map((category) => {
  return { label: category?.label, value: category?.value };
});

export default NOTE_CATEGORIES;
