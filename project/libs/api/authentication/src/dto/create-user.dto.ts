export class CreateUserDto {
  public email: string;
  public firstname: string;
  public lastname: string;
  public avatar?: File;
  public password: string;
}
