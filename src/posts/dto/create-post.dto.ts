import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
  @ApiProperty({example: 'Angular', description: 'Exemple angular'})
  readonly title: string;

  @ApiProperty({example: 'Exemples', description: 'Some code'})
  readonly content: string;

  @ApiProperty({example: '1', description: '1'})
  readonly userId: number;
}