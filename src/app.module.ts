import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}

//injeção de dependencia, automatizar a inserção de dependencias quando a classe
//for instanciada

//quando o controller informa que precisa do modulo como parametro, o modulo ja fornece
//desde que o service esteja com o decorator de injectable
