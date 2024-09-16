import { StackScreenWithSearchBar } from '@/app/constants/layout';
import { colors } from '@/app/constants/tokens';
import { defaultStyles } from '@/app/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            ...StackScreenWithSearchBar,
            headerTitle: 'Artists',
          }}
        />

        <Stack.Screen
          name='[name]'
          options={{
            headerTitle: '',
            headerBackVisible: true,
            headerStyle: {
              backgroundColor: colors.background,
            },
            headerTintColor: colors.primary,
          }}
        />
      </Stack>
    </View>
  );
};

export default ArtistsScreenLayout;
