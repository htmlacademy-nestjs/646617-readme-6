import {
  Controller,
  Get,
  Param
} from '@nestjs/common';
import { BlogUserService } from './blog-user.service';

@Controller('user')
export class BlogUserController {
  constructor(
    private blogUserService: BlogUserService
  ) {}

  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    const newUser = await this.blogUserService.getUser(id);
    return newUser.toPOJO();
  }
}
