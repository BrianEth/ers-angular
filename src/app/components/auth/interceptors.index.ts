/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS, NoopInterceptor } from '@angular/common/http';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
];