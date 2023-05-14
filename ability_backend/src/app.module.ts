import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@modules/auth/auth.module';
import { UserModule } from '@modules/user/user.module';
import { MethodModule } from '@modules/method/method.module';
import { InstrumentModule } from '@modules/instrument/instrument.module';
import { PrismaModule } from '@shared/prisma/prisma.module';
import { HelperModule } from '@shared/helper/helper.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    MethodModule,
    InstrumentModule,
    PrismaModule,
    HelperModule,
  ],
})
export class AppModule {}
