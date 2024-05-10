import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import {
  BasePostgresRepository
} from '@project/dataAccess';
import { PostFactory } from './post.factory';
import { PrismaClientService } from '@project/post-models';
import {
  Post,
  PostError,
  Tag
} from '@project/core';
import {
  categoryFilterToPrismaFilter,
  PostFilter
} from './post-tags.filter';
import { PostEntity } from './post.entity';
import { MAX_POST_LIMIT } from './post.contants';

@Injectable()
export class PostRepository extends BasePostgresRepository<PostEntity, Post> {
  constructor(
    entityFactory: PostFactory,
    readonly client: PrismaClientService,
  ) {
    super(entityFactory, client);
  }

  public async save(entity: PostEntity): Promise<void> {
    const { tags, type, ...pojo } = entity.toPOJO();
    const record = await this.client.post.create({
      data: { ...pojo } as any
    });
    const likesDB = await this.client.like.findMany();
    const commentsDB = await this.client.comment.findMany();
    entity.id = record.id;
    entity.likesQty = likesDB.length;
    entity.commentsQty = commentsDB.length;
  }

  public async saveTags(entity: PostEntity): Promise<void> {
    const { tags } = entity.toPOJO();
    await this.client.tag.createMany({ data: tags, skipDuplicates: true });
    // await this.client.comment.createMany({
    //   data: comments.map(comment => ({
    //     ...comment,
    //     postId: record.id,
    //     userId: record.authorId
    //   }))
    // });
    const tagsDB = await this.client.tag.findMany();
    // const commentsDB = await this.client.comment.findMany();

    entity.tags = tagsDB as Tag[];
    // entity.comments = commentsDB as unknown as BlogComment[];
  }

  public async findById(id: string): Promise<PostEntity> {
    const document = await this.client.post.findFirst({
      where: {
        id,
      },
    });

    if (! document) {
      throw new NotFoundException(PostError.POST_NOT_FOUND);
    }

    return this.createEntityFromDocument(document);
  }

  public async find(sort?: PostFilter): Promise<PostEntity[]> {
    const orderBy = sort ?? categoryFilterToPrismaFilter();
    const documents = await this.client.post.findMany({
      orderBy,
      take: MAX_POST_LIMIT
    });


    return documents.map((document) => this.createEntityFromDocument(document));
  }

  public async deleteById(id: string): Promise<void> {
    await this.client.post.delete({ where: { id } });
  }

  public async update(entity: PostEntity): Promise<void> {
    const { tags, commentsQty, type, ...pojo } = entity.toPOJO();
    await this.client.post.update({
      where: { id: entity.id },
      data: { ...pojo } as any
    });

    // for (let tag of tags) {
    //   await this.client.tag.upsert({
    //     where: { id: tag.id },
    //     update: { ...tag } as any,
    //     create: tag as any
    //   });
    // }
  }

  public async findByIds(ids: string[]): Promise<PostEntity[]> {
    const records = await this.client.post.findMany({
      where: {
        id: {
          in: ids,
        }
      }
    });

    return records.map((record) => this.createEntityFromDocument(record));
  }
}
