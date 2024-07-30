import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface Post {
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): Post {
    return {
      author: 'Seunghwa',
      title: 'this is Post',
      content: 'this is Post',
      likeCount: 0,
      commentCount: 0,
    };
  }
}
