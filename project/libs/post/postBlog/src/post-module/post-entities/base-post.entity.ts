import {
  Entity,
  Post,
  PostState,
  PostType,
  PostUnion,
  StorableEntity
} from '@project/core';
import { PostUser } from '../types/post-user.type';

export class BasePostEntity extends Entity implements StorableEntity<PostUnion> {
  protected tags: string[];
  protected creationDate: Date;
  protected publicationDate: Date;
  protected state: PostState;
  protected type: PostType;
  protected author: PostUser;
  protected authorOriginal: PostUser;
  protected isRepost: boolean;
  protected likeQty: number;
  protected commentQty: number;

  constructor(post: PostUnion) {
    super();
    this.init(post)
  }

  protected init(post?: Post): void {
    if (!post) return;

    this.id = post.id;
    this.tags = post.tags ?? null;
    this.creationDate = post.creationDate;
    this.publicationDate = post.publicationDate;
    this.state = post.state ?? PostState.Draft;
    this.type = post.type;
    this.author = post.author ?? null;
    this.authorOriginal = post.authorOriginal ?? null;
    this.isRepost = post.isRepost ?? false;
    this.likeQty = post.likeQty ?? 0;
    this.commentQty = post.commentQty ?? 0;
  }

  toPOJO(): PostUnion {
    return undefined;
  }

  setAuthor(author: PostUser): this {
    this.author = author;
    return this;
  }

  setAuthorOriginal(author: PostUser): this {
    this.authorOriginal = author;
    return this;
  }

  setState(state: PostState): this {
    this.state = state;
    return this;
  }

  setCreationDate(date: Date): this {
    this.creationDate = date;
    return this;
  }

  setPublicationDate(date: Date): this {
    this.publicationDate = date;
    return this;
  }

  setRepost(isRepost: boolean): this {
    this.isRepost = isRepost;
    return this;
  }

  setLike(isLike: boolean): this {
    this.likeQty = isLike ? ++this.likeQty : --this.likeQty;
    return this;
  }
}
