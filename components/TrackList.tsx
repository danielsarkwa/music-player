import { utilsStyles } from '@/app/styles';
import { FlatList, FlatListProps, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import TrackPlayer, { Track } from 'react-native-track-player';
import { unknownTrackImageUri } from './images';
import { TrackListItem } from './TracksListItem';

export type TracksListProps = Partial<FlatListProps<Track>> & {
  tracks: any[];
};

const ItemDivider = () => (
  <View
    style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}
  />
);

export const TrackList = ({ tracks, ...flatlistProps }: TracksListProps) => {
  const handleTrackSelect = async (selectedTrack: Track) => {
    await TrackPlayer.load(selectedTrack);
    await TrackPlayer.play();
  };

  return (
    <FlatList
      data={tracks}
      contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
      ListFooterComponent={ItemDivider}
      ItemSeparatorComponent={ItemDivider}
      ListEmptyComponent={
        <View>
          <Text style={utilsStyles.emptyContentText}>No songs found</Text>

          <FastImage
            source={{
              uri: unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={utilsStyles.emptyContentImage}
          />
        </View>
      }
      renderItem={({ item: track }) => (
        <TrackListItem onTrackSelect={handleTrackSelect} track={track} />
      )}
      {...flatlistProps}
    />
  );
};
