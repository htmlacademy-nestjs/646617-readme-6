import { Expose } from 'class-transformer';

export class CreatedUserRdo {
  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  avatar: File | null;
}
