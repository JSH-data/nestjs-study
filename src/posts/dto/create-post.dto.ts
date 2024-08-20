import { PickType } from '@nestjs/mapped-types';
import { PostsModel } from '../entities/posts.entity';

// Validation을 위한 클래스
export class CreatePostDto extends PickType(PostsModel, ['title', 'content']) {}
