import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notifications';
import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}

//injeção de dependencia, automatizar a inserção de dependencias quando a classe
//for instanciada

//quando o controller informa que precisa do modulo como parametro, o modulo ja fornece
//desde que o service esteja com o decorator de injectable
