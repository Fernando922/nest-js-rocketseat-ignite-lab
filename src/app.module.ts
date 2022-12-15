import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from './infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}

//injeção de dependencia, automatizar a inserção de dependencias quando a classe
//for instanciada

//quando o controller informa que precisa do modulo como parametro, o modulo ja fornece
//desde que o service esteja com o decorator de injectable
