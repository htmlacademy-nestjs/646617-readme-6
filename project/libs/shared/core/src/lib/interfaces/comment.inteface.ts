export interface BlogComment {
  id?: string;
  message: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
  postId?: string;
}
