import {
  EntityFactory,
  User
} from '@project/core';
import { BlogUserEntity } from '@project/blogUser';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogUserFactory implements EntityFactory<BlogUserEntity> {
  public create(entityPlainData: User): BlogUserEntity {
    return new BlogUserEntity(entityPlainData);
  }
}
