import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateUserDto {

  @ApiProperty({example: 'exemple@mail.com', description: 'email'})
  readonly email: string;

  @ApiProperty({example: '12345', description: 'password'})
  readonly password: string;
}