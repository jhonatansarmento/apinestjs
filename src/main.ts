import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { InvalidCredentialsErrorFilter } from './auth/filters/invalid-credentials-error.filter';
import { NotFoundErrorFilter } from './common/filters/not-found-error.filter';
import { ProductSlugAlreadyExistsFilter } from './products/filters/product-slug-already-existis.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(
    new ProductSlugAlreadyExistsFilter(),
    new NotFoundErrorFilter(),
    new InvalidCredentialsErrorFilter(),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
