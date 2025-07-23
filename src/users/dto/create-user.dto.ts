import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'john_doe',
    description: 'Unique username for the user',
  })
  username: string;
  @ApiProperty({
    example: 'john@gmail.com',
    description: 'Unique email address for the user',
  })
  email: string;
  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  name: string;
  @ApiProperty({
    example: '+1234567890',
    description: 'Phone number of the user',
  })
  phone: string;
  @ApiProperty({
    example: 'securepassword123',
    description: 'Password for the user account',
  })
  password: string;
  @ApiProperty({
    example: 'admin',
    description: 'Role of the user, e.g., admin or user',
  })
  role: string;
}
