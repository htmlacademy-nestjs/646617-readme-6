import {
  Injectable
} from '@nestjs/common';
import { BaseMemoryRepository } from '@project/dataAccess';
import { PostFactory } from './post.factory';
import { PostEntityUnion } from './types/post-entity.type';
import { PostUnion } from '@project/core';

@Injectable()
export class PostRepository extends BaseMemoryRepository<PostEntityUnion> {
  constructor(postFactory: PostFactory) {
    super(postFactory);
  }

  getAllPosts(): Promise<PostUnion[]> {
    return Promise.resolve(Array.from(this.entities, ([, entity]) => (entity)));
  }
}
