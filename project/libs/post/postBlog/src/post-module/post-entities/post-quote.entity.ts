import {
  PostQuote
} from '@project/core';
import { BasePostEntity } from './base-post.entity';

export class PostQuoteEntity extends BasePostEntity {
  text: string;
  authorQuote: string;

  constructor(post?: PostQuote) {
    super(post);
    this.initQuote(post);
  }

  initQuote(post?: PostQuote): void {
    if (!post) return;

    this.text = post.text;
    this.authorQuote = post.authorQuote;
  }

  toPOJO(): PostQuote {
    return {
      id: this.id,
      tags: this.tags,
      text: this.text,
      authorQuote: this.authorQuote,
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
