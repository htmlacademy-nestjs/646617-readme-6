import {
  PostPhoto
} from '@project/core';
import { BasePostEntity } from './base-post.entity';

export class PostPhotoEntity extends BasePostEntity {
  photo: File;

  constructor(post?: PostPhoto) {
    super(post);
    this.initPhoto(post);
  }

  initPhoto(post?: PostPhoto): void {
    if (!post) return;

    this.photo = post.photo;
  }

  toPOJO(): PostPhoto {
    return {
      id: this.id,
      tags: this.tags,
      photo: this.photo,
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
