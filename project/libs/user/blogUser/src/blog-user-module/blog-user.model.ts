import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '@project/core';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class BlogUserModel extends Document implements User {
  @Prop({
    required: true,
    unique: true,
  })
  public email: string;

  @Prop({
    required: true,
  })
  public firstname: string;

  @Prop({
    required: true,
  })
  public lastname: string;

  @Prop({
    required: true,
  })
  public passwordHash: string;

  @Prop()
  public dateRegistration: Date;

  @Prop()
  public publicationsNumber: number;

  @Prop()
  public subscribersNumber: number;

  @Prop()
  public avatar: string;
}

export const BlogUserSchema = SchemaFactory.createForClass(BlogUserModel);
