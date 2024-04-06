import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/dataAccess';
import { BlogUserEntity } from './blog-user.entity';
import { BlogUserFactory } from './blog-user.factory';

@Injectable()
export class BlogUserRepository extends BaseMemoryRepository<BlogUserEntity> {
  constructor(entityFactory: BlogUserFactory) {
    super(entityFactory);
  }

  public findByEmail(email: string): Promise<BlogUserEntity | null> {
    const entities = Array.from(this.entities.values());
    const user = entities.find((entity) => entity.email === email);
    const value = user ? this.entityFactory.create(user) : null;
    return Promise.resolve(value);
  }
}
