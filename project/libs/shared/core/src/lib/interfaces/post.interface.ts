import {
  PostState
} from '../constants';
import { Tag } from './tags.interface';
import { PostTypeI } from './post-type.interface';

export interface Post {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  tags?: Tag[];
  publicationName?: string;
  link?: string;
  announcement?: string;
  announcementText?: string;
  quote?: string;
  authorQuote?: string;
  photo?: string;
  descriptionLink?: string;
  commentsQty?: number;
  likesQty?: number;
  state?: PostState;
  type?: PostTypeI;
  authorId: string;
  authorOriginalId?: string;
  isRepost?: boolean;
}
