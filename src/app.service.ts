import { Injectable, Render } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // getChat():void {
  //  @Render('index');
  // }

}
