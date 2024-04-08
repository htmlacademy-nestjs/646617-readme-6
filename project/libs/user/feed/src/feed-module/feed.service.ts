import { Injectable } from '@nestjs/common';
import {
  PostListDto,
  PostRepository
} from '@project/postBlog';
import { PostUnion } from '@project/core';

@Injectable()
export class FeedService {
  constructor(
    private readonly postRepository: PostRepository
  ) {}

  async getAllPosts({ filter, sort }: PostListDto): Promise<PostUnion[]> {
    //фильтрация и сортировка
    //зарегистрированный может получить список черновиков
    return await this.postRepository.getAllPosts();
  }
}
