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
import { PostListDto } from './dto/post-list.dto';

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
    const { isRepost, authorOriginal, ...rest } = post.toPOJO();
    return { ...rest };
  }

  @Put('edit')
  public async edit(@Body() postCreateDto: PostCreateDto) {
    const post = await this.postService.edit(postCreateDto);
    const { isRepost, authorOriginal, ...rest } = post.toPOJO();
    return { ...rest };
  }

  @Delete('delete/:id')
  public async delete(@Param('id') id: string) {
    await this.postService.delete(id);
  }

  @Get('detailedInfo/:id')
  public async getDetailedInformation(@Param('id') id: string) {
    const post = await this.postService.getDetailedInformation(id);
    return post.toPOJO();
  }

  @Put('repost/:id')
  public async repost(
    @Param('userId') userId: string,
    @Param('id') id: string
  ) {
    const post = await this.postService.repost(userId, id);
    return post.toPOJO();
  }

  @Get('list')
  public async getAllPosts(@Body() postListDto: PostListDto) {
    return await this.postService.getAllPosts(postListDto);
  }

  @Get(':id')
  public async getPostById(@Param('id') id: string) {
    const post = await this.postService.getPostById(id);
    const { isRepost, authorOriginal, ...rest } = post.toPOJO();
    return { ...rest };
  }
}
