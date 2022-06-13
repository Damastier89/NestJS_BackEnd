import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@ApiTags('Создание постов')
@Controller('posts')
export class PostsController {

  constructor(
    private postService: PostsService
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  public createPost(@Body() postDto: CreatePostDto, @UploadedFile() image) {
    return this.postService.createPost(postDto, image);
  }
}
