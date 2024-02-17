import { RestRequestConfig } from 'mock-config-server';

export const loginConfig: RestRequestConfig = {
  path: '/account/login',
  method: 'post',
  routes: [
    {
      data: { message: 'Неверная почта или пароль' },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(401);
          return data;
        },
      },
    },
    {
      data: { token: 'kfspeofkpsoefjoseifj' },
      entities: {
        body: {
          email: 'user@mail.ru',
          password: '1234',
        },
      },
    },
    {
      data: { message: 'Неверный пароль' },
      entities: {
        body: {
          email: 'user@mail.ru',
          password: {
            checkMode: 'exists',
          },
        },
      },
      interceptors: {
        response: (data, params) => {
          params.setStatusCode(400);
          return data;
        },
      },
    },
  ],
};
