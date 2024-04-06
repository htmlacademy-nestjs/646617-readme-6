import {
  Body,
  Controller,
  Get,
  Param,
  Put
} from '@nestjs/common';
import { BlogUserService } from './blog-user.service';
import { UserChangePasswordDto } from '../dto/user-change-password.dto';

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

  @Put(':id/changePassword')
  public async changePassword(
    @Param('id') id: string,
    @Body() dto: UserChangePasswordDto
  ) {
    await this.blogUserService.updatePassword(id, dto);
  }
}
