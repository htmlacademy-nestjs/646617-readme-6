import {
  Body,
  Controller,
  Param,
  Post
} from '@nestjs/common';
import { LikeDto } from './dto/like.dto';
import { LikeService } from './like.service';

@Controller(':userId')
export class LikeController {
  constructor(
    private likeService: LikeService
  ) {}

  @Post('like')
  public async create(
    @Param('userId') userId: string,
    @Body() likeDto: LikeDto
  ) {
    const post = await this.likeService.create(userId, likeDto);
    return post.toPOJO();
  }
}
