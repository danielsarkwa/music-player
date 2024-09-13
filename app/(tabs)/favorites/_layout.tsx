import { defaultStyles } from '@/app/styles';
import { Stack } from 'expo-router';
import { View } from 'react-native';

const FavoritesScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen name='index' options={{ headerTitle: 'Favorite' }} />
      </Stack>
    </View>
  );
};

export default FavoritesScreenLayout;
