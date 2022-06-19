import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@ApiTags('Создание постов')
@Controller('posts')
export class PostsController {

  constructor(
    private postService: PostsService
  ) {}

  @ApiOperation({summary: 'Получить все посты'})
  @ApiResponse({status: 200, type: [Post]})
  @Get()
  public getAllPosts() {
    this.postService.getAllPosts();
  }

  @ApiOperation({summary: 'Создание поста'})
  @ApiResponse({status: 200, type: Post})
  @Post('/create-post')
  public createPost(@Body() postDto: CreatePostDto) {
    return this.postService.createPost(postDto);
  }
}
