import { Module } from '@nestjs/common';
import { PostModule } from '@project/postBlog';

@Module({
  imports: [PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
