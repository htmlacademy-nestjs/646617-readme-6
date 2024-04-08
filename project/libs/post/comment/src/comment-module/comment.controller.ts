import {
  Body,
  Controller,
  Get,
  Post
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ListCommentDto } from './dto/list-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(
    private commentService: CommentService
  ) {}

  @Post('/')
  public async create(
    @Body() createCommentDto: CreateCommentDto
  ) {
    const post = await this.commentService.create(createCommentDto);
    return post.toPOJO();
  }

  @Get('list')
  public async getAllComments(@Body() listCommentDto: ListCommentDto) {
    return await this.commentService.getAllComments(listCommentDto);;
  }
}
