import unknownArtist from '@/assets/unknown_artist.png';
import unknownTrack from '@/assets/unknown_track.png';
import { Image } from 'react-native';

export const unknownArtistImageUri =
  Image.resolveAssetSource(unknownArtist).uri;
export const unknownTrackImageUri = Image.resolveAssetSource(unknownTrack).uri;
