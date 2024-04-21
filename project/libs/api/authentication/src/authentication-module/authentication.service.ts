import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { BlogUserRepository } from '@project/blogUser';
import { CreateUserDto } from '../dto/create-user.dto';
import { BlogUserEntity } from '@project/blogUser';
import { LoginUserDto } from '../dto/login-user.dto';
import dayjs from 'dayjs';
import { UserError } from '@project/core';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly blogUserRepository: BlogUserRepository,
  ) {}

  public async register(dto: CreateUserDto): Promise<BlogUserEntity> {
    const {email, firstname, lastname, password, avatar} = dto;
    const blogUser = {
      email,
      firstname,
      lastname,
      avatar: avatar ?? null,
      passwordHash: '',
      dateRegistration: dayjs(Date.now()).toDate(),
      publicationsNumber: 0,
      subscribersNumber: 0
    };

    const existUser = await this.blogUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new ConflictException(UserError.AUTH_USER_EXISTS);
    }

    const userEntity = await new BlogUserEntity(blogUser)
      .setPassword(password)

    await this.blogUserRepository.save(userEntity);

    return userEntity;
  }

  public async verifyUser(dto: LoginUserDto): Promise<BlogUserEntity> {
    const {email, password} = dto;
    const existUser = await this.blogUserRepository.findByEmail(email);

    if (!existUser) {
      throw new NotFoundException(UserError.AUTH_USER_NOT_FOUND);
    }

    if (!await existUser.comparePassword(password)) {
      throw new UnauthorizedException(UserError.AUTH_USER_PASSWORD_WRONG);
    }

    return existUser;
  }
}
