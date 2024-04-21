import { Module } from '@nestjs/common';
import { AuthenticationModule } from '@project/authentication';
import { BlogUserModule } from '@project/blogUser';
import {
  ApiConfigModule,
  getMongooseOptions
} from '@project/api-config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthenticationModule,
    BlogUserModule,
    ApiConfigModule,
    MongooseModule.forRootAsync(
      getMongooseOptions()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
