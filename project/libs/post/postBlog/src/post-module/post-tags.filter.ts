import { Sort } from '@project/core';

export interface PostFilter {
  createdAt?: string;
  likesQty?: string;
  commentsQty?: string;
}

export function categoryFilterToPrismaFilter(): any {
  return { createdAt: Sort.ASC };
}

