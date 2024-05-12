import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { PostRepository } from './post.repository';
import { PostCreateDto } from './dto/post-create.dto';
import { PostListDto } from '@project/postBlog';
import { PostFactory } from './post.factory';
import {
  PostError,
  PostState
} from '@project/core';
import { PostEntity } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly postFactory: PostFactory
  ) {}

  async create(userId: string, postCreateDto: PostCreateDto): Promise<PostEntity> {
    const entity = this.postFactory.create(postCreateDto)
      .setAuthor(userId)
      .setState(PostState.Publish)
      .setLikes()
      .setComments();

    await this.postRepository.save(entity);
    await this.postRepository.saveTags(entity);
    return Promise.resolve(entity);
  }

  async update(id: string, postCreateDto: PostCreateDto): Promise<void> {
    const entity = this.postFactory.create(postCreateDto)
    entity.id = id;
    await this.postRepository.update(entity);
  }

  async delete(id: string): Promise<void> {
    await this.postRepository.deleteById(id);
  }

  async repost(userId: string, id: string): Promise<void> {
    const entity = await this.postRepository.findById(id);
    entity.setAuthorOriginal(entity.authorId);
    entity.setAuthor(userId);
    entity.setRepost(true);
    await this.postRepository.save(entity);
  }

  async getAllPosts({ sort }: PostListDto): Promise<PostEntity[]> {
    return await this.postRepository.find(sort);
  }

  async getPostById(id: string): Promise<PostEntity> {
    return await this.postRepository.findById(id);
  }
}
