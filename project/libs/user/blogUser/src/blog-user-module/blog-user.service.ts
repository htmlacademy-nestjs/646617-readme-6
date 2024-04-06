import {
  Injectable
} from '@nestjs/common';
import {
  BlogUserEntity,
  BlogUserRepository
} from '@project/blogUser';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {}

  public async getUser(id: string): Promise<BlogUserEntity> {
    return this.blogUserRepository.findById(id);
  }
}
