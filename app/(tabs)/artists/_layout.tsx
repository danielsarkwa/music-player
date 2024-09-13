import { defaultStyles } from '@/app/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

const ArtistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name='index' options={{ headerTitle: 'Artist' }} />
      </Stack>
    </View>
  );
};

export default ArtistsScreenLayout;
