import {
  PostState,
  PostType,
  Sort,
  SortType
} from '@project/core';

export class PostListDto {
  public start: number;
  public end: number;
  public filter: {
    type: PostType,
    tag: string;
    status: PostState
  };
  public sort: {
    orderBy: Sort
    orderType: SortType
  };
}
