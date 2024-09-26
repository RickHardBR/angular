declare global {
  interface Window {
    ngRef: any;
  }
}

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';

platformBrowser()
  .bootstrapModule(AppModule)
  .then((ref) => {
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
  })
  .catch((err) => console.error(err));
