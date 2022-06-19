import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {

  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
  ) {}

  public async createPost (data: CreatePostDto) {
    const post = await this.postRepository.create(data);
    return post;
  }

  public async getAllPosts() {
    const posts = await this.postRepository.findAll();
    return posts;
  }
}
