import { colors, fontSize } from '@/app/constants/tokens';
import { defaultStyles } from '@/app/styles';
import { TrackShortcutsMenu } from '@/components/TrackShortcutsMenu';
import { StopPropagation } from '@/components/utils/StopPropagation';
import { Ionicons } from '@expo/vector-icons';
import Entypo from '@expo/vector-icons/build/Entypo';
import { StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { TouchableHighlight } from 'react-native-gesture-handler';
import LoaderKit from 'react-native-loader-kit';
import { Track, useActiveTrack, useIsPlaying } from 'react-native-track-player';
import { unknownTrackImageUri } from './images';

export type TrackListItemProp = {
  track: Track;
  onTrackSelect: (track: Track) => void;
};

export const TrackListItem = ({
  track,
  onTrackSelect: handleTrackSelect,
}: TrackListItemProp) => {
  const { playing } = useIsPlaying();

  const isActive = false;
  const isActiveTrack = useActiveTrack()?.url === track.url;

  return (
    <TouchableHighlight onPress={() => handleTrackSelect(track)}>
      <View style={styles.trackItemContainer}>
        <View>
          <FastImage
            source={{
              uri: track.artwork ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActive ? 0.6 : 1,
            }}
          />

          {isActiveTrack &&
            (playing ? (
              <LoaderKit
                style={styles.trackPlayingIconIndicator}
                name='LineScaleParty'
                color={colors.icon}
              />
            ) : (
              <Ionicons
                style={styles.trackPausedIndicator}
                name='play'
                size={24}
                color={colors.icon}
              />
            ))}
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ width: '100%' }}>
            <Text
              numberOfLines={1}
              style={{
                ...styles.trackTitleText,
                color: isActiveTrack ? colors.primary : colors.text,
              }}
            >
              {track.title}
            </Text>
            {track.artist && (
              <Text numberOfLines={1} style={styles.trackArtistText}>
                {track.artist}
              </Text>
            )}
          </View>

          <StopPropagation>
            <TrackShortcutsMenu track={track}>
              <Entypo
                name='dots-three-horizontal'
                size={18}
                color={colors.icon}
              />
            </TrackShortcutsMenu>
          </StopPropagation>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  trackItemContainer: {
    flexDirection: 'row',
    columnGap: 14,
    alignItems: 'center',
    paddingRight: 20,
  },
  trackPlayingIconIndicator: {
    position: 'absolute',
    top: 18,
    left: 16,
    width: 16,
    height: 16,
  },
  trackPausedIndicator: {
    position: 'absolute',
    top: 14,
    left: 14,
  },
  trackArtworkImage: {
    borderRadius: 8,
    width: 50,
    height: 50,
  },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    fontWeight: '600',
    maxWidth: '90%',
  },
  trackArtistText: {
    ...defaultStyles.text,
    color: colors.textMuted,
    fontSize: 14,
    marginTop: 4,
  },
});
