import { Module } from '@nestjs/common';
import { PostModule } from '@project/postBlog';
import { LikeModule } from '@project/like';
import { CommentModule } from '@project/comment';

@Module({
  imports: [PostModule, LikeModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
