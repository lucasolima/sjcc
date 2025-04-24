import { Comment } from "../entities/Comment";

export interface CommentRepository {
  save(comment: Comment): Promise<Comment>;
  findAll(): Promise<Comment[]>;
}
