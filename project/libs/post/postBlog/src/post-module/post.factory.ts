import {
  EntityFactory
} from '@project/core';
import { PostCreateDto } from './dto/post-create.dto';
import { PostEntity } from './post.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostFactory implements EntityFactory<PostEntity> {
  public create(entityPlainData: PostCreateDto): PostEntity {
    return new PostEntity(entityPlainData);
  }
}
