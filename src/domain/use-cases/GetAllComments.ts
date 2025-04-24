import { Comment } from "../entities/Comment";
import { CommentRepository } from "../repositories/CommentRepository";

export class GetAllComments {
  constructor(private readonly repo: CommentRepository) {}

  async execute(): Promise<Comment[]> {
    return this.repo.findAll();
  }
}