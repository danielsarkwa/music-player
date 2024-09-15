import { screenPadding } from '@/app/constants/tokens';
import { defaultStyles } from '@/app/styles';
import { TrackList } from '@/components/TrackList';
import { trackTitleFilter } from '@/helpers/filter';
import { generateTracksListId } from '@/helpers/miscellaneous';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { useTracks } from '@/store/library';
import { useMemo } from 'react';
import { ScrollView, View } from 'react-native';

const SongsScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: { placeholder: 'Find in songs' },
  });

  const tracks = useTracks();

  const filteredTracks = useMemo(() => {
    if (!search) return tracks;

    return tracks.filter(trackTitleFilter(search));
  }, [search, tracks]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={{ paddingHorizontal: screenPadding.horizontal }}
      >
        <TrackList
          id={generateTracksListId('favorites', search)}
          tracks={filteredTracks}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
