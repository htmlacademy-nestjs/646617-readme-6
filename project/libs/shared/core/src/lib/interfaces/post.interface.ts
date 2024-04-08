import {
  PostState,
  PostType
} from '../constants';
import { PostVideo } from './post-video.inteface';
import { PostText } from './post-text.inteface';
import { PostQuote } from './post-quote.inteface';
import { PostPhoto } from './post-photo.inteface';
import { PostLink } from './post-link.inteface';
import { User } from './user.interface';

export interface Post {
  id?: string;
  tags: string[] | null;
  creationDate?: Date;
  publicationDate?: Date;
  state: PostState;
  type: PostType;
  author: User;
  authorOriginal?: User;
  isRepost?: boolean;
  likeQty?: number;
  commentQty?: number;
}

export type PostUnion =
  | PostVideo
  | PostText
  | PostQuote
  | PostPhoto
  | PostLink
