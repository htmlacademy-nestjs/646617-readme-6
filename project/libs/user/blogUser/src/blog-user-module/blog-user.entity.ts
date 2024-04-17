import {
  Entity,
  StorableEntity,
  User
} from '@project/core';
import {
  compare,
  genSalt,
  hash
} from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity extends Entity implements StorableEntity<User> {
  email: string;
  firstname: string;
  lastname: string;
  passwordHash?: string;
  avatar?: string;
  dateRegistration?: Date;
  publicationsNumber?: number;
  subscribersNumber?: number;

  constructor(user?: User) {
    super();
    this.init(user);
  }

  init(user?: User): void {
    if (!user) return;

    this.id = user.id ?? '';
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.passwordHash = user.passwordHash;
    this.avatar = user.avatar;
    this.dateRegistration = user.dateRegistration;
    this.publicationsNumber = user.publicationsNumber;
    this.subscribersNumber = user.subscribersNumber;
  }

  toPOJO(): User {
    return {
      id: this.id,
      email: this.email,
      firstname: this.firstname,
      lastname: this.lastname,
      passwordHash: this.passwordHash,
      avatar: this.avatar,
      dateRegistration: this.dateRegistration,
      publicationsNumber: this.publicationsNumber,
      subscribersNumber: this.subscribersNumber
    }
  }

  async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
