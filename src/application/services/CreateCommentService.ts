import { PostgresCommentRepository } from "../../infra/persistence/PostgresCommentRepository";
import { Comment } from "../../domain/entities/Comment";

export class CreateCommentService {
  private repo: PostgresCommentRepository;

  constructor(repo: PostgresCommentRepository) {
    this.repo = repo;
  }

  public async execute(content: string): Promise<Comment> {
    const comment = new Comment({ content });
    return await this.repo.save(comment);
  }
}