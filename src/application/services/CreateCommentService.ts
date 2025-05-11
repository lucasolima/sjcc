import { Comment } from "../../domain/entities/Comment";
import { CommentRepository } from "../../domain/repositories/CommentRepository";
import { GeminiModerationService } from "../../application/services/GeminiModerationService";

export class CreateCommentService {
  private moderation: GeminiModerationService;

  constructor(private repo: CommentRepository, moderationService: GeminiModerationService) {
    this.moderation = moderationService;
  }

  async execute(content: string): Promise<Comment> {
    const status = await this.moderation.analyzeComment(content);
    const comment = new Comment({ content, status });
    return await this.repo.save(comment);
  }
}
