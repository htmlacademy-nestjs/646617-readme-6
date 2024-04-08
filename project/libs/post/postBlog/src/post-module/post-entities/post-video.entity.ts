import {
  PostVideo
} from '@project/core';
import { BasePostEntity } from './base-post.entity';

export class PostVideoEntity extends BasePostEntity {
  link: string;
  name: string;

  constructor(post?: PostVideo) {
    super(post);
    this.initVideo(post);
  }

  initVideo(post?: PostVideo): void {
    if (!post) return;

    this.link = post.link;
    this.name = post.name;
  }

  toPOJO(): PostVideo {
    return {
      id: this.id,
      tags: this.tags,
      link: this.link,
      name: this.name,
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
