import { Module } from "@nestjs/common";
import { BlogUserFactory } from './blog-user.factory';
import { BlogUserRepository } from './blog-user.repository';
import { BlogUserService } from './blog-user.service';
import { BlogUserController } from './blog-user.controller';
import {
  BlogUserModel,
  BlogUserSchema
} from './blog-user.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([
    { name: BlogUserModel.name, schema: BlogUserSchema }
  ])],
  controllers: [BlogUserController],
  providers: [BlogUserFactory, BlogUserRepository, BlogUserService],
  exports: [BlogUserRepository],
})
export class BlogUserModule {}
