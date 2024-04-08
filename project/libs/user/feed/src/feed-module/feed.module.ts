import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';
import { PostModule } from '@project/postBlog';

@Module({
  imports: [PostModule],
  controllers: [FeedController],
  providers: [FeedService]
})
export class FeedModule {}
