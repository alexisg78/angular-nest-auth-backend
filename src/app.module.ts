import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/?${process.env.MONGO_OPTIONS}`,
      {
        dbName: process.env.MONGO_DB_NAME,
      }
    ),

    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
