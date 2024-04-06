import {
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';
import { BlogUserEntity } from './blog-user.entity';
import { UserChangePasswordDto } from '../dto/user-change-password.dto';
import { UserAnswer } from '@project/core';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {}

  public async getUser(id: string): Promise<BlogUserEntity> {
    return this.blogUserRepository.findById(id);
  }

  public async updatePassword(
    id: string,
    dto: UserChangePasswordDto
  ): Promise<void> {
    const { oldPassword, newPassword } = dto;
    const entity = await this.getUser(id);
    const isPasswordRight = entity.comparePassword(oldPassword);
    if (!isPasswordRight) throw new UnauthorizedException(UserAnswer.AUTH_USER_PASSWORD_WRONG);
    const updatedUser = await entity.setPassword(newPassword);
    await this.blogUserRepository.update(updatedUser);
  }
}
