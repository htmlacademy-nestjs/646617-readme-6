import {
  EntityFactory,
  PostLink,
  PostPhoto,
  PostQuote,
  PostText,
  PostType,
  PostVideo
} from '@project/core';
import { PostVideoEntity } from './post-entities/post-video.entity';
import { PostTextEntity } from './post-entities/post-text.entity';
import { PostQuoteEntity } from './post-entities/post-quote.entity';
import { PostPhotoEntity } from './post-entities/post-photo.entity';
import { PostLinkEntity } from './post-entities/post-link.entity';
import { Injectable } from '@nestjs/common';
import { PostEntityUnion } from './types/post-entity.type';
import { PostCreateDto } from './dto/post-create.dto';

@Injectable()
export class PostFactory implements EntityFactory<PostEntityUnion> {
  private entityMap = {
    [PostType.Video]: (entityPlainData: PostCreateDto) => new PostVideoEntity(entityPlainData as PostVideo),
    [PostType.Text]: (entityPlainData: PostCreateDto) => new PostTextEntity(entityPlainData as PostText),
    [PostType.Quote]: (entityPlainData: PostCreateDto) => new PostQuoteEntity(entityPlainData as PostQuote),
    [PostType.Photo]: (entityPlainData: PostCreateDto) => new PostPhotoEntity(entityPlainData as PostPhoto),
    [PostType.Link]: (entityPlainData: PostCreateDto) => new PostLinkEntity(entityPlainData as PostLink)
  }

  public create(entityPlainData: PostCreateDto): PostEntityUnion {
    return this.entityMap[entityPlainData.type](entityPlainData)
  }
}
