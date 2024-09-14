import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { colors } from './tokens';

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
  headerLargeTitle: true,
  headerLargeTitleStyle: {
    color: colors.text,
  },
  headerLargeStyle: {
    backgroundColor: colors.background,
  },
  headerTintColor: colors.text,
  headerTransparent: true,
  headerBlurEffect: 'prominent',
  headerShadowVisible: false,
};
