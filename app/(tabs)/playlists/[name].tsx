import { screenPadding } from '@/app/constants/tokens';
import { defaultStyles } from '@/app/styles';
import { PlaylistTracksList } from '@/components/PlaylistTracksList';
import { usePlaylists } from '@/store/library';
import { Redirect, useLocalSearchParams, useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

const PlaylistScreen = () => {
  const navigation = useNavigation();
  const { name: playlistName } = useLocalSearchParams<{ name: string }>();

  const { playlists } = usePlaylists();

  const playlist = playlists.find((playlist) => playlist.name === playlistName);
  
  useEffect(() => {
    if (playlistName) {
      navigation.setOptions({
        title: playlistName, // Set the playlist name as the title
      });
    }
  }, [playlistName, navigation]);

  if (!playlist) {
    console.warn(`Playlist ${playlistName} was not found!`);

    return <Redirect href={'/(tabs)/playlists'} />;
  }

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <PlaylistTracksList playlist={playlist} />
      </ScrollView>
    </View>
  );
};

export default PlaylistScreen;
