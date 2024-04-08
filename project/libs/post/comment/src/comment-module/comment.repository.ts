import { Injectable } from '@nestjs/common';
import { BaseMemoryRepository } from '@project/dataAccess';
import { CommentFactory } from './comment.factory';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepository extends BaseMemoryRepository<CommentEntity> {
  constructor(commentFactory: CommentFactory) {
    super(commentFactory);
  }

  getAllComments(): Promise<any> {
    return Promise.resolve(Array.from(this.entities, ([, entity]) => (entity)));
  }
}
