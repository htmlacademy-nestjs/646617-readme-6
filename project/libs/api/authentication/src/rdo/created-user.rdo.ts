import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreatedUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '134ce8babd-cc30-4805-9b12-d9420398e7c5',
  })
  @Expose()
  id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Ivan',
  })
  @Expose()
  firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov',
  })
  @Expose()
  lastname: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  @Expose()
  avatar?: string;
}
