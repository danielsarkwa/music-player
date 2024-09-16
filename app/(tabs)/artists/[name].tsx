import { screenPadding } from '@/app/constants/tokens';
import { defaultStyles } from '@/app/styles';
import { ArtistTracksList } from '@/components/ArtistTracksList';
import { useArtists } from '@/store/library';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const ArtistDetailScreen = () => {
  const { name: artistName } = useLocalSearchParams<{ name: string }>();

  const artists = useArtists();

  const artist = artists.find((artist) => artist.name === artistName);

  if (!artist) {
    console.warn(`Artist ${artistName} not found!`);

    return <Redirect href={'/(tabs)/artists'} />;
  }

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <ArtistTracksList artist={artist} />
      </ScrollView>
    </View>
  );
};

export default ArtistDetailScreen;
