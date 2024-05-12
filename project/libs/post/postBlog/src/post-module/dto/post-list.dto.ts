import {
  PostState,
  PostType,
} from '@project/core';
import { PostFilter } from '../post-tags.filter';

export class PostListDto {
  public start: number;
  public end: number;
  public filter: {
    type: PostType,
    tag: string;
    status: PostState
  };
  public sort: PostFilter;
}
