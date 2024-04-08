import { PostLinkEntity } from '../post-entities/post-link.entity';
import { PostPhotoEntity } from '../post-entities/post-photo.entity';
import { PostQuoteEntity } from '../post-entities/post-quote.entity';
import { PostTextEntity } from '../post-entities/post-text.entity';
import { PostVideoEntity } from '../post-entities/post-video.entity';

export type PostEntityUnion =
  | PostLinkEntity
  | PostPhotoEntity
  | PostQuoteEntity
  | PostTextEntity
  | PostVideoEntity
