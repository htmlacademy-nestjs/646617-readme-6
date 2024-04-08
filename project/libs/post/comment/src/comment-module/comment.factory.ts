import { Injectable } from '@nestjs/common';
import {
  BlogComment,
  EntityFactory
} from '@project/core';

import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentFactory implements EntityFactory<CommentEntity> {
  public create(entityPlainData: BlogComment): CommentEntity {
    return new CommentEntity(entityPlainData);
  }
}
