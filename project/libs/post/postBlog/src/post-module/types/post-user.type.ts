import { User } from '@project/core';

export type PostUser = Pick<User,
  | "firstname"
  | "lastname"
  | "id"
  | "email"
>;
