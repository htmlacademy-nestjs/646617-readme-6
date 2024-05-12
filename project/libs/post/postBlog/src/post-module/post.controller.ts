import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostCreateDto } from './dto/post-create.dto';
import { PostListDto } from '@project/postBlog';

@Controller(':userId/post')
export class PostController {
  constructor(
    private postService: PostService
  ) {}

  @Post('create')
  public async create(
    @Param('userId') userId: string,
    @Body() postCreateDto: PostCreateDto
  ) {
    const post = await this.postService.create(userId, postCreateDto);
    return post.toPOJO();
  }

  @Put('update/:id')
  public async edit(
    @Param('id') id: string,
    @Body() postCreateDto: PostCreateDto
  ) {
    await this.postService.update(id, postCreateDto);
  }

  @Delete('delete/:id')
  public async delete(@Param('id') id: string) {
    await this.postService.delete(id);
  }

  @Put('repost/:id')
  public async repost(
    @Param('userId') userId: string,
    @Param('id') id: string
  ) {
    await this.postService.repost(userId, id);
  }

  @Post('list')
  public async getAllPosts(@Body() postListDto: PostListDto) {
    return await this.postService.getAllPosts(postListDto);
  }

  @Get(':id')
  public async getPostById(@Param('id') id: string) {
    const post = await this.postService.getPostById(id);
    return post.toPOJO();
  }
}
