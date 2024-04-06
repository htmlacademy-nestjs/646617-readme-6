import { Module } from "@nestjs/common";
import { BlogUserFactory } from './blog-user.factory';
import { BlogUserRepository } from './blog-user.repository';
import { BlogUserService } from './blog-user.service';
import { BlogUserController } from './blog-user.controller';

@Module({
  controllers: [BlogUserController],
  providers: [BlogUserFactory, BlogUserRepository, BlogUserService],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
