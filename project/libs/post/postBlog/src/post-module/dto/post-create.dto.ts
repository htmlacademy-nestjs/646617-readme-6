import {
  PostState,
  PostTypeI,
  Tag
} from '@project/core';

export class PostCreateDto {
  public id?: string;
  public tags?: Tag[];
  public publicationName?: string;
  public link?: string;
  public announcement?: string;
  public announcementText?: string;
  public quote?: string;
  public authorQuote?: string;
  public photo?: string;
  public descriptionLink?: string;
  public state?: PostState;
  public type: PostTypeI;
  public authorId: string;
  public authorOriginalId?: string;
  public isRepost?: boolean;
}
