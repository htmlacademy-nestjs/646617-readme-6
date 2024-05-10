import {
  Entity,
  Post,
  PostState,
  PostTypeI,
  StorableEntity,
  Tag
} from '@project/core';
import { PostCreateDto } from './dto/post-create.dto';

export class PostEntity extends Entity implements StorableEntity<Post> {
  public createdAt: Date;
  public updatedAt: Date;
  public tags?: Tag[];
  public publicationName?: string;
  public link?: string;
  public announcement?: string;
  public announcementText?: string;
  public quote?: string;
  public authorQuote?: string;
  public photo?: string;
  public descriptionLink?: string;
  public commentsQty?: number;
  public likesQty?: number;
  public state?: PostState;
  public type: PostTypeI;
  public authorId: string;
  public authorOriginalId?: string;
  public isRepost?: boolean;

  constructor(post: PostCreateDto | Post) {
    super();
    this.init(post)
  }

  private init(post?: PostCreateDto | Post): void {
    if (!post) return;

    this.id = post.id;
    this.tags = post.tags ?? undefined;
    this.publicationName = post.publicationName ?? '';
    this.link = post.link ?? '';
    this.announcement = post.announcement ?? '';
    this.announcementText = post.announcementText ?? '';
    this.quote = post.quote ?? '';
    this.authorQuote = post.authorQuote ?? '';
    this.photo = post.photo ?? '';
    this.descriptionLink = post.descriptionLink ?? '';
    this.state = post.state ?? PostState.Draft;
    this.authorId = post.authorId;
    this.authorOriginalId = post.authorOriginalId ?? '';
    this.isRepost = post.isRepost ?? false;
    this.type = post.type;

    if (!(post instanceof PostCreateDto)) {
      this.likesQty = post.likesQty;
      this.commentsQty = post.commentsQty;
      this.createdAt = post.createdAt;
      this.updatedAt = post.updatedAt;
    }
  }

  toPOJO(): Post {
    return {
      id: this.id,
      tags: this.tags,
      publicationName: this.publicationName,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      link: this.link,
      announcement: this.announcement,
      announcementText: this.announcementText,
      quote: this.quote,
      authorQuote: this.authorQuote,
      photo: this.photo,
      descriptionLink: this.descriptionLink,
      commentsQty: this.commentsQty,
      likesQty: this.likesQty,
      state: this.state,
      type: this.type,
      authorId: this.authorId,
      authorOriginalId: this.authorOriginalId,
      isRepost: this.isRepost,
    };
  }

  setAuthor(authorId: string): this {
    this.authorId = authorId;
    return this;
  }

  setAuthorOriginal(authorId: string): this {
    this.authorOriginalId = authorId;
    return this;
  }

  setState(state: PostState): this {
    this.state = state;
    return this;
  }

  setRepost(isRepost: boolean): this {
    this.isRepost = isRepost;
    this.id = isRepost ? undefined : this.id;
    return this;
  }

  setLikes(likes?: number): this {
    this.likesQty = likes ?? 0;
    return this;
  }

  setComments(comments?: number): this {
    this.commentsQty = comments ?? 0;
    return this;
  }
}
