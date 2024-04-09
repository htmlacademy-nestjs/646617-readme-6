import { Module } from '@nestjs/common';
import { BlogUserModule } from '@project/blogUser';
import { FeedModule } from '@project/feed';

@Module({
  imports: [BlogUserModule, FeedModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
