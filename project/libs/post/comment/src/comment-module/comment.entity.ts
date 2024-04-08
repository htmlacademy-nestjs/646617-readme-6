import {
  BlogComment,
  Entity,
  StorableEntity
} from '@project/core';

export class CommentEntity extends Entity implements StorableEntity<BlogComment> {
  public comment: string;

  constructor(comment?: BlogComment) {
    super();
    this.init(comment)
  }
  toPOJO(): BlogComment {
    return {
      comment: this.comment
    };
  }

  private init(comment?: BlogComment) {
    if(!comment) return;
    this.comment = comment.comment
  }
}
