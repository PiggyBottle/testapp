import { View } from 'react-native';

interface SpacerProps {
  height?: number;
}

interface VSpacerProps {
  width?: number;
}

export const Spacer: React.FC<SpacerProps> = ({ height = 10 }) => {
  return <View pointerEvents={'none'} style={{ height }} />;
};

export const VSpacer: React.FC<VSpacerProps> = ({ width = 10 }) => {
  return <View pointerEvents={'none'} style={{ width }} />;
};

export default Spacer;