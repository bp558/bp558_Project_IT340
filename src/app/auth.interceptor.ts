import { inject } from '@angular/core';
import { HttpInterceptorFn, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { AuthService } from './services/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (req, HttpHandlerFn) => {
  const auth = inject(AuthService);
  const token = auth.getToken();

  console.log("INTERCEPTOR FIRED:", req.url);
  console.log("TOKEN:", token);

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return HttpHandlerFn(authReq);
};
