import { Expose } from 'class-transformer';

export class UserDetailedRdo {
  @Expose()
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public lastname: string;

  @Expose()
  public avatar: File;

  @Expose()
  public dateRegistration: Date;

  @Expose()
  public publicationsNumber: number;

  @Expose()
  public subscribersNumber: number;
}
