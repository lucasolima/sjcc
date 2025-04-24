import { CreateComment } from "../../domain/use-cases/CreateComment";
import { CommentRepository } from "../../domain/repositories/CommentRepository";
import { Comment } from "../../domain/entities/Comment";

export class CreateCommentService {
  private useCase: CreateComment;

  constructor(repo: CommentRepository) {
    this.useCase = new CreateComment(repo);
  }

  async execute(content: string): Promise<Comment> {
    return this.useCase.execute(content);
  }
}
