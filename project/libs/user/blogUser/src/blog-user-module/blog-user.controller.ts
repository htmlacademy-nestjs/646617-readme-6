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
  public async getDetailedInformation(@Param('id') id: string) {
    return await this.blogUserService.getUser(id);
  }

  @Put(':id/changePassword')
  public async changePassword(
    @Param('id') id: string,
    @Body() dto: UserChangePasswordDto
  ) {
    await this.blogUserService.updatePassword(id, dto);
  }
}
