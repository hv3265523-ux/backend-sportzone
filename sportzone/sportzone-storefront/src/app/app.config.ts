import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Chuyển trang thì cuộn lên đầu trang
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
  ],
};