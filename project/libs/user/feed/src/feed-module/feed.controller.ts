import {
  Body,
  Controller,
  Get
} from '@nestjs/common';
import {
  PostListDto
} from '@project/postBlog';
import { FeedService } from './feed.service';

@Controller('feed')
export class FeedController {
  constructor(
    private feedService: FeedService
  ) {}

  @Get('list')
  public async getAllPosts(@Body() postListDto: PostListDto) {
    return await this.feedService.getAllPosts(postListDto);
  }
}
