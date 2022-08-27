import { NestFactory } from "@nestjs/core";
import { AppModule } from "./src/app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { NestExpressApplication } from '@nestjs/platform-express';
import { WsAdapter } from "@nestjs/platform-ws"
import { join } from 'path';
import path from "path";
import fs from "fs"; 
import dotenv from "dotenv";

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ["log", "error", "debug", "verbose", "warn"],
  });
  app.useWebSocketAdapter(new WsAdapter(app));
  app.useStaticAssets(join(__dirname, '..', 'client'));
  app.enableCors();

  if (process.env.STAGE === "dev") {
    const options = new DocumentBuilder()
      .setTitle("Buy The Dip API Docs")
      .setDescription("Buy The Dip API Swagger 입니다.\nAuthorization이 필요없습니다.")
      .setVersion("1.0.0")
      .addBearerAuth({
        type: "http",
        scheme: "bearer",
        in: "header",
        name: "Authorization",
      })
      .addServer(String("http://localhost:4000"), String("local"))
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup("docs", app, document);

    const basePath = "./swagger";
    const swaggerSpecPath = path.join(basePath, "swagger-spec.json");
    try {
      fs.mkdirSync(basePath);
    } catch (e) {}
    fs.writeFileSync(swaggerSpecPath, JSON.stringify(document, undefined, "\t") + "\n");
  }
  await app.listen(4000);
}
bootstrap();
