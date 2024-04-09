import {
  PostLink
} from '@project/core';
import { BasePostEntity } from './base-post.entity';

export class PostLinkEntity extends BasePostEntity {
  link: string;
  description: string;

  constructor(post?: PostLink) {
    super(post);
    this.initLink(post);
  }

  initLink(post?: PostLink): void {
    if (!post) return;

    this.link = post.link;
    this.description = post.description;
  }

  toPOJO(): PostLink {
    return {
      id: this.id,
      tags: this.tags,
      link: this.link,
      description: this.description,
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
