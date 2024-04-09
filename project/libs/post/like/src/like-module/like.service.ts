import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import {
  PostEntityUnion,
  PostFactory,
  PostRepository
} from '@project/postBlog';
import { LikeDto } from './dto/like.dto';
import { PostError } from '@project/core';

@Injectable()
export class LikeService {
  constructor(
    private readonly postRepository: PostRepository,
    private readonly postFactory: PostFactory
  ) {}

  async create(userId: string, { id, isLike }: LikeDto): Promise<PostEntityUnion> {
    const author = { firstname: 'Author_name' }; // проверить авторизацию
    const entity = await this.postRepository.findById(id);
    if(!entity) throw new NotFoundException(PostError.POST_NOT_FOUND);
    const pojo = entity.toPOJO();
    const newEntity = this.postFactory.create(pojo)
      .setLike(isLike);
    await this.postRepository.save(newEntity);
    return Promise.resolve(newEntity);
  }
}
