import {
  PostText
} from '@project/core';
import { BasePostEntity } from './base-post.entity';

export class PostTextEntity extends BasePostEntity {
  name: string;
  announcement: string;
  text: string;

  constructor(post?: PostText) {
    super(post);
    this.initText(post);
  }

  initText(post?: PostText): void {
    if (!post) return;

    this.name = post.name;
    this.announcement = post.announcement;
    this.text = post.text;
  }

  toPOJO(): PostText {
    return {
      id: this.id,
      tags: this.tags,
      name: this.name,
      announcement: this.announcement,
      text: this.text,
      creationDate: this.creationDate,
      publicationDate: this.publicationDate,
      state: this.state,
      type: this.type,
      author: this.author,
      authorOriginal: this.authorOriginal,
      isRepost: this.isRepost,
      likeQty: this.likeQty,
      commentQty: this.commentQty,
    };
  }
}
