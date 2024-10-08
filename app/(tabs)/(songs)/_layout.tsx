import { StackScreenWithSearchBar } from '@/app/constants/layout';
import { defaultStyles } from '@/app/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

const SongsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name='index'
          options={{ ...StackScreenWithSearchBar, headerTitle: 'Songs' }}
        />
      </Stack>
    </View>
  );
};

export default SongsScreenLayout;
