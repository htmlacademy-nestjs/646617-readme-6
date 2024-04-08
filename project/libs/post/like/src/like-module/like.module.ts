import { Module } from '@nestjs/common';
import { LikeController } from './like.controller';
import { LikeService } from './like.service';
import { PostModule } from '@project/postBlog';

@Module({
  imports: [PostModule],
  controllers: [LikeController],
  providers: [LikeService]
})
export class LikeModule {}
