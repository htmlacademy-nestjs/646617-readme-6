import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { PostRepository } from './post.repository';
import { PostCreateDto } from './dto/post-create.dto';
import { PostEntityUnion } from './types/post-entity.type';
import { PostFactory } from './post.factory';
import {
  PostError,
  PostState,
  PostUnion
} from '@project/core';
import dayjs from 'dayjs';
import { PostListDto } from './dto/post-list.dto';
import { PostUser } from './types/post-user.type';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly postFactory: PostFactory
  ) {}

  async create(userId: string, postCreateDto: PostCreateDto): Promise<PostEntityUnion> {
    const author = { firstname: 'Author_Original_name' } as PostUser;
    const entity = this.postFactory.create(postCreateDto)
      .setAuthor(author)
      .setState(PostState.Publish)
      .setCreationDate(dayjs(Date.now()).toDate())
      .setPublicationDate(dayjs(Date.now()).toDate());
    await this.postRepository.save(entity);
    return Promise.resolve(entity);
  }

  async edit(postCreateDto: PostCreateDto): Promise<PostEntityUnion> {
    const entity = await this.postRepository.findById(postCreateDto.id);
    if(!entity) throw new NotFoundException(PostError.POST_NOT_FOUND);
    const { author, state, creationDate } = entity.toPOJO();
    const newEntity = this.postFactory.create(postCreateDto)
      .setAuthor(author)
      .setState(state)
      .setCreationDate(creationDate)
      .setPublicationDate(dayjs(Date.now()).toDate());
    await this.postRepository.save(newEntity);
    return Promise.resolve(newEntity);
  }

  async delete(id: string): Promise<void> {
    await this.postRepository.deleteById(id);
  }

  async getDetailedInformation(id: string): Promise<PostEntityUnion> {
    const entity = await this.postRepository.findById(id);
    if(!entity) throw new NotFoundException(PostError.POST_NOT_FOUND);
    return Promise.resolve(entity)
  }

  async repost(userId: string, id: string): Promise<PostEntityUnion> {
    const author = { firstname: 'Author_name' } as PostUser;
    const entity = await this.postRepository.findById(id);
    if(!entity) throw new NotFoundException(PostError.POST_NOT_FOUND);
    const pojo = entity.toPOJO();
    const newEntity = this.postFactory.create(pojo)
      .setAuthor(author)
      .setAuthorOriginal(pojo.author)
      .setState(pojo.state)
      .setCreationDate(pojo.creationDate)
      .setPublicationDate(pojo.publicationDate)
      .setRepost(true);
    await this.postRepository.save(newEntity);
    return Promise.resolve(newEntity);
  }

  async getAllPosts({ start = 0, end = 25, filter, sort }: PostListDto): Promise<PostUnion[]> {
    //фильтрация и сортировка
    //зарегистрированный может получить список черновиков
    const list = await this.postRepository.getAllPosts();
    return list.slice(start, end);
  }

  async getPostById(id: string): Promise<PostEntityUnion> {
    const entity = await this.postRepository.findById(id);
    if(!entity) throw new NotFoundException(PostError.POST_NOT_FOUND);
    return entity;
  }
}
