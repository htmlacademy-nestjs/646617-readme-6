import {
  Injectable,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ListCommentDto } from './dto/list-comment.dto';
import { CommentRepository } from './comment.repository';
import { CommentFactory } from './comment.factory';
import { CommentEntity } from './comment.entity';
import { BlogComment } from '@project/core';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository,
    private readonly commentFactory: CommentFactory
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<CommentEntity> {
    const entity = this.commentFactory.create(createCommentDto as any);
    await this.commentRepository.save(entity);
    return entity;
  }

  async getAllComments({ start, end }: ListCommentDto): Promise<BlogComment[]> {
    const list = await this.commentRepository.getAllComments();
    return list.slice(start, end);
  }
}
