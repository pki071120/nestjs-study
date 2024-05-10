import { Module } from '@nestjs/common';
import { BoardModule } from './board/board.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [BoardModule, LoginModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
