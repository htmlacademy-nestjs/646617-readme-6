import { Post } from './post.interface';

export interface Tag {
  id: string;
  title: string;
  posts: Post[]
  createdAt: Date;
  updatedAt: Date;
}
