import {
  PostState,
  PostType
} from '@project/core';

export class PostCreateDto {
  public id?: string;
  public tags: string[] | null;
  public state?: PostState;
  public type: PostType;
  public description?: string;
  public announcement?: string;
  public text?: string;
  public name?: string;
  public link?: string;
  public photo?: File;
}
