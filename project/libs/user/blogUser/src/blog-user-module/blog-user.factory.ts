import {
  EntityFactory,
  User
} from '@project/core';
import { BlogUserEntity } from '@project/blogUser';

export class BlogUserFactory implements EntityFactory<BlogUserEntity> {
  public create(entityPlainData: User): BlogUserEntity {
    return new BlogUserEntity(entityPlainData);
  }
}
