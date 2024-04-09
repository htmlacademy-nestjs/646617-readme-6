import {
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { BlogUserRepository } from './blog-user.repository';
import { UserChangePasswordDto } from '../dto/user-change-password.dto';
import { UserError } from '@project/core';
import { UserDetailedRdo } from '../rdo/user-detailed.rdo';

@Injectable()
export class BlogUserService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository
  ) {}

  public async getUser(userId: string): Promise<UserDetailedRdo> {
    const {
      id,
      email,
      firstname,
      lastname,
      avatar,
      dateRegistration,
      publicationsNumber,
      subscribersNumber
    } = await this.blogUserRepository.findById(userId);
    return Promise.resolve({
      id,
      email,
      firstname,
      lastname,
      avatar,
      dateRegistration,
      publicationsNumber,
      subscribersNumber
    });
  }

  public async updatePassword(
    id: string,
    dto: UserChangePasswordDto
  ): Promise<void> {
    const { oldPassword, newPassword } = dto;
    const entity = await this.blogUserRepository.findById(id);
    const isPasswordRight = entity.comparePassword(oldPassword);
    if (!isPasswordRight) throw new UnauthorizedException(UserError.AUTH_USER_PASSWORD_WRONG);
    const updatedUser = await entity.setPassword(newPassword);
    await this.blogUserRepository.update(updatedUser);
  }
}
