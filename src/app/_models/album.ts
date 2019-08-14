import { Review } from './review';

export class Album {
  id: number;
  title: string;
  artist: string;
  releaseDate: number;
  nbTracks: number;
  albumLink: string;
  reviews: Review[];
}
