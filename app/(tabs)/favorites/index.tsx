import { screenPadding } from '@/app/constants/tokens';
import { defaultStyles } from '@/app/styles';
import { TrackList } from '@/components/TrackList';
import { trackTitleFilter } from '@/helpers/filter';
import { generateTracksListId } from '@/helpers/miscellaneous';
import { useNavigationSearch } from '@/hooks/useNavigationSearch';
import { useFavorites } from '@/store/library';
import { useMemo } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const FavoritesScreen = () => {
  const search = useNavigationSearch({
    searchBarOptions: {
      placeholder: 'Find in songs',
    },
  });

  const favoritesTracks = useFavorites().favorites;

  const filteredFavoritesTracks = useMemo(() => {
    if (!search) return favoritesTracks;

    return favoritesTracks.filter(trackTitleFilter(search));
  }, [search, favoritesTracks]);

  return (
    <View style={defaultStyles.container}>
      <ScrollView
        style={{ paddingHorizontal: screenPadding.horizontal }}
        contentInsetAdjustmentBehavior='automatic'
      >
        <TrackList
          id={generateTracksListId('favorites', search)}
          tracks={filteredFavoritesTracks}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

export default FavoritesScreen;
