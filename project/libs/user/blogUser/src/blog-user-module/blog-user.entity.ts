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
  public email: string;
  public firstname: string;
  public lastname: string;
  public passwordHash: string;
  public avatar: File;
  public dateRegistration: Date;
  public publicationsNumber: number;
  public subscribersNumber: number;

  constructor(user?: User) {
    super();
    this.populate(user);
  }

  public populate(user?: User): void {
    if (! user) return;

    this.id = user.id ?? '';
    this.email = user.email;
    this.firstname = user.firstname;
    this.lastname = user.lastname;
    this.passwordHash = user.passwordHash;
    this.avatar = user.avatar ?? null;
    this.dateRegistration = user.dateRegistration;
    this.publicationsNumber = user.publicationsNumber;
    this.subscribersNumber = user.subscribersNumber
  }

  public toPOJO(): User {
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

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
