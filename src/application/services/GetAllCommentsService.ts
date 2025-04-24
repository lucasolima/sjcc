import { GetAllComments } from "../../domain/use-cases/GetAllComments";
import { CommentRepository } from "../../domain/repositories/CommentRepository";
import { Comment } from "../../domain/entities/Comment";

export class GetAllCommentsService {
  private useCase: GetAllComments;

  constructor(repo: CommentRepository) {
    this.useCase = new GetAllComments(repo);
  }

  async execute(): Promise<Comment[]> {
    return this.useCase.execute();
  }
}