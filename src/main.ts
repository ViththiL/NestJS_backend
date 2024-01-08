import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { exec } from 'child_process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    console.log(`Application is running on: http://localhost:3000`);
    // Automatically open the default browser after the server starts
    exec(`start http://localhost:3000`);
  });
}

bootstrap();
